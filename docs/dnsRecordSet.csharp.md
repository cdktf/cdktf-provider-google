# `dnsRecordSet` Submodule <a name="`dnsRecordSet` Submodule" id="@cdktf/provider-google.dnsRecordSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsRecordSet <a name="DnsRecordSet" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set google_dns_record_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DnsRecordSet(Construct Scope, string Id, DnsRecordSetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig">DnsRecordSetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig">DnsRecordSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.putRoutingPolicy">PutRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.resetRoutingPolicy">ResetRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.resetRrdatas">ResetRrdatas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRoutingPolicy` <a name="PutRoutingPolicy" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.putRoutingPolicy"></a>

```csharp
private void PutRoutingPolicy(DnsRecordSetRoutingPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.putRoutingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicy">DnsRecordSetRoutingPolicy</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRoutingPolicy` <a name="ResetRoutingPolicy" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.resetRoutingPolicy"></a>

```csharp
private void ResetRoutingPolicy()
```

##### `ResetRrdatas` <a name="ResetRrdatas" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.resetRrdatas"></a>

```csharp
private void ResetRrdatas()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.resetTtl"></a>

```csharp
private void ResetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DnsRecordSet resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DnsRecordSet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DnsRecordSet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DnsRecordSet.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DnsRecordSet.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DnsRecordSet resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DnsRecordSet to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DnsRecordSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DnsRecordSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.routingPolicy">RoutingPolicy</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference">DnsRecordSetRoutingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.managedZoneInput">ManagedZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.routingPolicyInput">RoutingPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicy">DnsRecordSetRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.rrdatasInput">RrdatasInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.ttlInput">TtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.managedZone">ManagedZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.rrdatas">Rrdatas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.ttl">Ttl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `RoutingPolicy`<sup>Required</sup> <a name="RoutingPolicy" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.routingPolicy"></a>

```csharp
public DnsRecordSetRoutingPolicyOutputReference RoutingPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference">DnsRecordSetRoutingPolicyOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagedZoneInput`<sup>Optional</sup> <a name="ManagedZoneInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.managedZoneInput"></a>

```csharp
public string ManagedZoneInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RoutingPolicyInput`<sup>Optional</sup> <a name="RoutingPolicyInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.routingPolicyInput"></a>

```csharp
public DnsRecordSetRoutingPolicy RoutingPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicy">DnsRecordSetRoutingPolicy</a>

---

##### `RrdatasInput`<sup>Optional</sup> <a name="RrdatasInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.rrdatasInput"></a>

```csharp
public string[] RrdatasInput { get; }
```

- *Type:* string[]

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.ttlInput"></a>

```csharp
public double TtlInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagedZone`<sup>Required</sup> <a name="ManagedZone" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.managedZone"></a>

```csharp
public string ManagedZone { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Rrdatas`<sup>Required</sup> <a name="Rrdatas" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.rrdatas"></a>

```csharp
public string[] Rrdatas { get; }
```

- *Type:* string[]

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.ttl"></a>

```csharp
public double Ttl { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DnsRecordSetConfig <a name="DnsRecordSetConfig" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DnsRecordSetConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ManagedZone,
    string Name,
    string Type,
    string Id = null,
    string Project = null,
    DnsRecordSetRoutingPolicy RoutingPolicy = null,
    string[] Rrdatas = null,
    double Ttl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.managedZone">ManagedZone</a></code> | <code>string</code> | The name of the zone in which this record set will reside. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.name">Name</a></code> | <code>string</code> | The DNS name this record set will apply to. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.type">Type</a></code> | <code>string</code> | The DNS record set type. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#id DnsRecordSet#id}. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.project">Project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.routingPolicy">RoutingPolicy</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicy">DnsRecordSetRoutingPolicy</a></code> | routing_policy block. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.rrdatas">Rrdatas</a></code> | <code>string[]</code> | The string data for the records in this record set whose meaning depends on the DNS type. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.ttl">Ttl</a></code> | <code>double</code> | The time-to-live of this record set (seconds). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ManagedZone`<sup>Required</sup> <a name="ManagedZone" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.managedZone"></a>

```csharp
public string ManagedZone { get; set; }
```

- *Type:* string

The name of the zone in which this record set will reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#managed_zone DnsRecordSet#managed_zone}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The DNS name this record set will apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#name DnsRecordSet#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The DNS record set type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#type DnsRecordSet#type}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#id DnsRecordSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#project DnsRecordSet#project}

---

##### `RoutingPolicy`<sup>Optional</sup> <a name="RoutingPolicy" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.routingPolicy"></a>

```csharp
public DnsRecordSetRoutingPolicy RoutingPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicy">DnsRecordSetRoutingPolicy</a>

routing_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#routing_policy DnsRecordSet#routing_policy}

---

##### `Rrdatas`<sup>Optional</sup> <a name="Rrdatas" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.rrdatas"></a>

```csharp
public string[] Rrdatas { get; set; }
```

- *Type:* string[]

The string data for the records in this record set whose meaning depends on the DNS type.

For TXT record, if the string data contains spaces, add surrounding " if you don't want your string to get split on spaces. To specify a single record value longer than 255 characters such as a TXT record for DKIM, add "" inside the Terraform configuration string (e.g. "first255characters""morecharacters").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#rrdatas DnsRecordSet#rrdatas}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetConfig.property.ttl"></a>

```csharp
public double Ttl { get; set; }
```

- *Type:* double

The time-to-live of this record set (seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#ttl DnsRecordSet#ttl}

---

### DnsRecordSetRoutingPolicy <a name="DnsRecordSetRoutingPolicy" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DnsRecordSetRoutingPolicy {
    object EnableGeoFencing = null,
    object Geo = null,
    DnsRecordSetRoutingPolicyPrimaryBackup PrimaryBackup = null,
    object Wrr = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicy.property.enableGeoFencing">EnableGeoFencing</a></code> | <code>object</code> | Specifies whether to enable fencing for geo queries. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicy.property.geo">Geo</a></code> | <code>object</code> | geo block. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicy.property.primaryBackup">PrimaryBackup</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackup">DnsRecordSetRoutingPolicyPrimaryBackup</a></code> | primary_backup block. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicy.property.wrr">Wrr</a></code> | <code>object</code> | wrr block. |

---

##### `EnableGeoFencing`<sup>Optional</sup> <a name="EnableGeoFencing" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicy.property.enableGeoFencing"></a>

```csharp
public object EnableGeoFencing { get; set; }
```

- *Type:* object

Specifies whether to enable fencing for geo queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#enable_geo_fencing DnsRecordSet#enable_geo_fencing}

---

##### `Geo`<sup>Optional</sup> <a name="Geo" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicy.property.geo"></a>

```csharp
public object Geo { get; set; }
```

- *Type:* object

geo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#geo DnsRecordSet#geo}

---

##### `PrimaryBackup`<sup>Optional</sup> <a name="PrimaryBackup" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicy.property.primaryBackup"></a>

```csharp
public DnsRecordSetRoutingPolicyPrimaryBackup PrimaryBackup { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackup">DnsRecordSetRoutingPolicyPrimaryBackup</a>

primary_backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#primary_backup DnsRecordSet#primary_backup}

---

##### `Wrr`<sup>Optional</sup> <a name="Wrr" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicy.property.wrr"></a>

```csharp
public object Wrr { get; set; }
```

- *Type:* object

wrr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#wrr DnsRecordSet#wrr}

---

### DnsRecordSetRoutingPolicyGeo <a name="DnsRecordSetRoutingPolicyGeo" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DnsRecordSetRoutingPolicyGeo {
    string Location,
    DnsRecordSetRoutingPolicyGeoHealthCheckedTargets HealthCheckedTargets = null,
    string[] Rrdatas = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeo.property.location">Location</a></code> | <code>string</code> | The location name defined in Google Cloud. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeo.property.healthCheckedTargets">HealthCheckedTargets</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargets">DnsRecordSetRoutingPolicyGeoHealthCheckedTargets</a></code> | health_checked_targets block. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeo.property.rrdatas">Rrdatas</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#rrdatas DnsRecordSet#rrdatas}. |

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeo.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location name defined in Google Cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#location DnsRecordSet#location}

---

##### `HealthCheckedTargets`<sup>Optional</sup> <a name="HealthCheckedTargets" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeo.property.healthCheckedTargets"></a>

```csharp
public DnsRecordSetRoutingPolicyGeoHealthCheckedTargets HealthCheckedTargets { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargets">DnsRecordSetRoutingPolicyGeoHealthCheckedTargets</a>

health_checked_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#health_checked_targets DnsRecordSet#health_checked_targets}

---

##### `Rrdatas`<sup>Optional</sup> <a name="Rrdatas" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeo.property.rrdatas"></a>

```csharp
public string[] Rrdatas { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#rrdatas DnsRecordSet#rrdatas}.

---

### DnsRecordSetRoutingPolicyGeoHealthCheckedTargets <a name="DnsRecordSetRoutingPolicyGeoHealthCheckedTargets" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DnsRecordSetRoutingPolicyGeoHealthCheckedTargets {
    object InternalLoadBalancers
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargets.property.internalLoadBalancers">InternalLoadBalancers</a></code> | <code>object</code> | internal_load_balancers block. |

---

##### `InternalLoadBalancers`<sup>Required</sup> <a name="InternalLoadBalancers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargets.property.internalLoadBalancers"></a>

```csharp
public object InternalLoadBalancers { get; set; }
```

- *Type:* object

internal_load_balancers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#internal_load_balancers DnsRecordSet#internal_load_balancers}

---

### DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers <a name="DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers {
    string IpAddress,
    string IpProtocol,
    string LoadBalancerType,
    string NetworkUrl,
    string Port,
    string Project,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.ipAddress">IpAddress</a></code> | <code>string</code> | The frontend IP address of the load balancer. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.ipProtocol">IpProtocol</a></code> | <code>string</code> | The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"]. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.loadBalancerType">LoadBalancerType</a></code> | <code>string</code> | The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"]. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.networkUrl">NetworkUrl</a></code> | <code>string</code> | The fully qualified url of the network in which the load balancer belongs. This should be formatted like `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.port">Port</a></code> | <code>string</code> | The configured port of the load balancer. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.project">Project</a></code> | <code>string</code> | The ID of the project in which the load balancer belongs. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.region">Region</a></code> | <code>string</code> | The region of the load balancer. Only needed for regional load balancers. |

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.ipAddress"></a>

```csharp
public string IpAddress { get; set; }
```

- *Type:* string

The frontend IP address of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#ip_address DnsRecordSet#ip_address}

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.ipProtocol"></a>

```csharp
public string IpProtocol { get; set; }
```

- *Type:* string

The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#ip_protocol DnsRecordSet#ip_protocol}

---

##### `LoadBalancerType`<sup>Required</sup> <a name="LoadBalancerType" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.loadBalancerType"></a>

```csharp
public string LoadBalancerType { get; set; }
```

- *Type:* string

The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#load_balancer_type DnsRecordSet#load_balancer_type}

---

##### `NetworkUrl`<sup>Required</sup> <a name="NetworkUrl" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.networkUrl"></a>

```csharp
public string NetworkUrl { get; set; }
```

- *Type:* string

The fully qualified url of the network in which the load balancer belongs. This should be formatted like `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#network_url DnsRecordSet#network_url}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.port"></a>

```csharp
public string Port { get; set; }
```

- *Type:* string

The configured port of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#port DnsRecordSet#port}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID of the project in which the load balancer belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#project DnsRecordSet#project}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region of the load balancer. Only needed for regional load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#region DnsRecordSet#region}

---

### DnsRecordSetRoutingPolicyPrimaryBackup <a name="DnsRecordSetRoutingPolicyPrimaryBackup" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DnsRecordSetRoutingPolicyPrimaryBackup {
    object BackupGeo,
    DnsRecordSetRoutingPolicyPrimaryBackupPrimary Primary,
    object EnableGeoFencingForBackups = null,
    double TrickleRatio = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackup.property.backupGeo">BackupGeo</a></code> | <code>object</code> | backup_geo block. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackup.property.primary">Primary</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimary">DnsRecordSetRoutingPolicyPrimaryBackupPrimary</a></code> | primary block. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackup.property.enableGeoFencingForBackups">EnableGeoFencingForBackups</a></code> | <code>object</code> | Specifies whether to enable fencing for backup geo queries. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackup.property.trickleRatio">TrickleRatio</a></code> | <code>double</code> | Specifies the percentage of traffic to send to the backup targets even when the primary targets are healthy. |

---

##### `BackupGeo`<sup>Required</sup> <a name="BackupGeo" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackup.property.backupGeo"></a>

```csharp
public object BackupGeo { get; set; }
```

- *Type:* object

backup_geo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#backup_geo DnsRecordSet#backup_geo}

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackup.property.primary"></a>

```csharp
public DnsRecordSetRoutingPolicyPrimaryBackupPrimary Primary { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimary">DnsRecordSetRoutingPolicyPrimaryBackupPrimary</a>

primary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#primary DnsRecordSet#primary}

---

##### `EnableGeoFencingForBackups`<sup>Optional</sup> <a name="EnableGeoFencingForBackups" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackup.property.enableGeoFencingForBackups"></a>

```csharp
public object EnableGeoFencingForBackups { get; set; }
```

- *Type:* object

Specifies whether to enable fencing for backup geo queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#enable_geo_fencing_for_backups DnsRecordSet#enable_geo_fencing_for_backups}

---

##### `TrickleRatio`<sup>Optional</sup> <a name="TrickleRatio" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackup.property.trickleRatio"></a>

```csharp
public double TrickleRatio { get; set; }
```

- *Type:* double

Specifies the percentage of traffic to send to the backup targets even when the primary targets are healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#trickle_ratio DnsRecordSet#trickle_ratio}

---

### DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo <a name="DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo {
    string Location,
    DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets HealthCheckedTargets = null,
    string[] Rrdatas = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo.property.location">Location</a></code> | <code>string</code> | The location name defined in Google Cloud. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo.property.healthCheckedTargets">HealthCheckedTargets</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets">DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets</a></code> | health_checked_targets block. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo.property.rrdatas">Rrdatas</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#rrdatas DnsRecordSet#rrdatas}. |

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location name defined in Google Cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#location DnsRecordSet#location}

---

##### `HealthCheckedTargets`<sup>Optional</sup> <a name="HealthCheckedTargets" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo.property.healthCheckedTargets"></a>

```csharp
public DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets HealthCheckedTargets { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets">DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets</a>

health_checked_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#health_checked_targets DnsRecordSet#health_checked_targets}

---

##### `Rrdatas`<sup>Optional</sup> <a name="Rrdatas" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo.property.rrdatas"></a>

```csharp
public string[] Rrdatas { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#rrdatas DnsRecordSet#rrdatas}.

---

### DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets <a name="DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets {
    object InternalLoadBalancers
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets.property.internalLoadBalancers">InternalLoadBalancers</a></code> | <code>object</code> | internal_load_balancers block. |

---

##### `InternalLoadBalancers`<sup>Required</sup> <a name="InternalLoadBalancers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets.property.internalLoadBalancers"></a>

```csharp
public object InternalLoadBalancers { get; set; }
```

- *Type:* object

internal_load_balancers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#internal_load_balancers DnsRecordSet#internal_load_balancers}

---

### DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers <a name="DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers {
    string IpAddress,
    string IpProtocol,
    string LoadBalancerType,
    string NetworkUrl,
    string Port,
    string Project,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.ipAddress">IpAddress</a></code> | <code>string</code> | The frontend IP address of the load balancer. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.ipProtocol">IpProtocol</a></code> | <code>string</code> | The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"]. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.loadBalancerType">LoadBalancerType</a></code> | <code>string</code> | The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"]. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.networkUrl">NetworkUrl</a></code> | <code>string</code> | The fully qualified url of the network in which the load balancer belongs. This should be formatted like `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.port">Port</a></code> | <code>string</code> | The configured port of the load balancer. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.project">Project</a></code> | <code>string</code> | The ID of the project in which the load balancer belongs. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.region">Region</a></code> | <code>string</code> | The region of the load balancer. Only needed for regional load balancers. |

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.ipAddress"></a>

```csharp
public string IpAddress { get; set; }
```

- *Type:* string

The frontend IP address of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#ip_address DnsRecordSet#ip_address}

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.ipProtocol"></a>

```csharp
public string IpProtocol { get; set; }
```

- *Type:* string

The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#ip_protocol DnsRecordSet#ip_protocol}

---

##### `LoadBalancerType`<sup>Required</sup> <a name="LoadBalancerType" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.loadBalancerType"></a>

```csharp
public string LoadBalancerType { get; set; }
```

- *Type:* string

The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#load_balancer_type DnsRecordSet#load_balancer_type}

---

##### `NetworkUrl`<sup>Required</sup> <a name="NetworkUrl" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.networkUrl"></a>

```csharp
public string NetworkUrl { get; set; }
```

- *Type:* string

The fully qualified url of the network in which the load balancer belongs. This should be formatted like `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#network_url DnsRecordSet#network_url}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.port"></a>

```csharp
public string Port { get; set; }
```

- *Type:* string

The configured port of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#port DnsRecordSet#port}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID of the project in which the load balancer belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#project DnsRecordSet#project}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region of the load balancer. Only needed for regional load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#region DnsRecordSet#region}

---

### DnsRecordSetRoutingPolicyPrimaryBackupPrimary <a name="DnsRecordSetRoutingPolicyPrimaryBackupPrimary" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimary.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DnsRecordSetRoutingPolicyPrimaryBackupPrimary {
    object InternalLoadBalancers
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimary.property.internalLoadBalancers">InternalLoadBalancers</a></code> | <code>object</code> | internal_load_balancers block. |

---

##### `InternalLoadBalancers`<sup>Required</sup> <a name="InternalLoadBalancers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimary.property.internalLoadBalancers"></a>

```csharp
public object InternalLoadBalancers { get; set; }
```

- *Type:* object

internal_load_balancers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#internal_load_balancers DnsRecordSet#internal_load_balancers}

---

### DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers <a name="DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers {
    string IpAddress,
    string IpProtocol,
    string LoadBalancerType,
    string NetworkUrl,
    string Port,
    string Project,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.ipAddress">IpAddress</a></code> | <code>string</code> | The frontend IP address of the load balancer. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.ipProtocol">IpProtocol</a></code> | <code>string</code> | The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"]. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.loadBalancerType">LoadBalancerType</a></code> | <code>string</code> | The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"]. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.networkUrl">NetworkUrl</a></code> | <code>string</code> | The fully qualified url of the network in which the load balancer belongs. This should be formatted like `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.port">Port</a></code> | <code>string</code> | The configured port of the load balancer. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.project">Project</a></code> | <code>string</code> | The ID of the project in which the load balancer belongs. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.region">Region</a></code> | <code>string</code> | The region of the load balancer. Only needed for regional load balancers. |

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.ipAddress"></a>

```csharp
public string IpAddress { get; set; }
```

- *Type:* string

The frontend IP address of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#ip_address DnsRecordSet#ip_address}

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.ipProtocol"></a>

```csharp
public string IpProtocol { get; set; }
```

- *Type:* string

The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#ip_protocol DnsRecordSet#ip_protocol}

---

##### `LoadBalancerType`<sup>Required</sup> <a name="LoadBalancerType" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.loadBalancerType"></a>

```csharp
public string LoadBalancerType { get; set; }
```

- *Type:* string

The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#load_balancer_type DnsRecordSet#load_balancer_type}

---

##### `NetworkUrl`<sup>Required</sup> <a name="NetworkUrl" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.networkUrl"></a>

```csharp
public string NetworkUrl { get; set; }
```

- *Type:* string

The fully qualified url of the network in which the load balancer belongs. This should be formatted like `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#network_url DnsRecordSet#network_url}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.port"></a>

```csharp
public string Port { get; set; }
```

- *Type:* string

The configured port of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#port DnsRecordSet#port}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID of the project in which the load balancer belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#project DnsRecordSet#project}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region of the load balancer. Only needed for regional load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#region DnsRecordSet#region}

---

### DnsRecordSetRoutingPolicyWrr <a name="DnsRecordSetRoutingPolicyWrr" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrr.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DnsRecordSetRoutingPolicyWrr {
    double Weight,
    DnsRecordSetRoutingPolicyWrrHealthCheckedTargets HealthCheckedTargets = null,
    string[] Rrdatas = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrr.property.weight">Weight</a></code> | <code>double</code> | The ratio of traffic routed to the target. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrr.property.healthCheckedTargets">HealthCheckedTargets</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargets">DnsRecordSetRoutingPolicyWrrHealthCheckedTargets</a></code> | health_checked_targets block. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrr.property.rrdatas">Rrdatas</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#rrdatas DnsRecordSet#rrdatas}. |

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrr.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

The ratio of traffic routed to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#weight DnsRecordSet#weight}

---

##### `HealthCheckedTargets`<sup>Optional</sup> <a name="HealthCheckedTargets" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrr.property.healthCheckedTargets"></a>

```csharp
public DnsRecordSetRoutingPolicyWrrHealthCheckedTargets HealthCheckedTargets { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargets">DnsRecordSetRoutingPolicyWrrHealthCheckedTargets</a>

health_checked_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#health_checked_targets DnsRecordSet#health_checked_targets}

---

##### `Rrdatas`<sup>Optional</sup> <a name="Rrdatas" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrr.property.rrdatas"></a>

```csharp
public string[] Rrdatas { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#rrdatas DnsRecordSet#rrdatas}.

---

### DnsRecordSetRoutingPolicyWrrHealthCheckedTargets <a name="DnsRecordSetRoutingPolicyWrrHealthCheckedTargets" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DnsRecordSetRoutingPolicyWrrHealthCheckedTargets {
    object InternalLoadBalancers
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargets.property.internalLoadBalancers">InternalLoadBalancers</a></code> | <code>object</code> | internal_load_balancers block. |

---

##### `InternalLoadBalancers`<sup>Required</sup> <a name="InternalLoadBalancers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargets.property.internalLoadBalancers"></a>

```csharp
public object InternalLoadBalancers { get; set; }
```

- *Type:* object

internal_load_balancers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#internal_load_balancers DnsRecordSet#internal_load_balancers}

---

### DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers <a name="DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers {
    string IpAddress,
    string IpProtocol,
    string LoadBalancerType,
    string NetworkUrl,
    string Port,
    string Project,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.ipAddress">IpAddress</a></code> | <code>string</code> | The frontend IP address of the load balancer. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.ipProtocol">IpProtocol</a></code> | <code>string</code> | The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"]. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.loadBalancerType">LoadBalancerType</a></code> | <code>string</code> | The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"]. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.networkUrl">NetworkUrl</a></code> | <code>string</code> | The fully qualified url of the network in which the load balancer belongs. This should be formatted like `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.port">Port</a></code> | <code>string</code> | The configured port of the load balancer. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.project">Project</a></code> | <code>string</code> | The ID of the project in which the load balancer belongs. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.region">Region</a></code> | <code>string</code> | The region of the load balancer. Only needed for regional load balancers. |

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.ipAddress"></a>

```csharp
public string IpAddress { get; set; }
```

- *Type:* string

The frontend IP address of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#ip_address DnsRecordSet#ip_address}

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.ipProtocol"></a>

```csharp
public string IpProtocol { get; set; }
```

- *Type:* string

The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#ip_protocol DnsRecordSet#ip_protocol}

---

##### `LoadBalancerType`<sup>Required</sup> <a name="LoadBalancerType" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.loadBalancerType"></a>

```csharp
public string LoadBalancerType { get; set; }
```

- *Type:* string

The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#load_balancer_type DnsRecordSet#load_balancer_type}

---

##### `NetworkUrl`<sup>Required</sup> <a name="NetworkUrl" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.networkUrl"></a>

```csharp
public string NetworkUrl { get; set; }
```

- *Type:* string

The fully qualified url of the network in which the load balancer belongs. This should be formatted like `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#network_url DnsRecordSet#network_url}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.port"></a>

```csharp
public string Port { get; set; }
```

- *Type:* string

The configured port of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#port DnsRecordSet#port}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID of the project in which the load balancer belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#project DnsRecordSet#project}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region of the load balancer. Only needed for regional load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/dns_record_set#region DnsRecordSet#region}

---

## Classes <a name="Classes" id="Classes"></a>

### DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList <a name="DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.get"></a>

```csharp
private DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference <a name="DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocolInput">IpProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerTypeInput">LoadBalancerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrlInput">NetworkUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.portInput">PortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocol">IpProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerType">LoadBalancerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrl">NetworkUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.port">Port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddressInput"></a>

```csharp
public string IpAddressInput { get; }
```

- *Type:* string

---

##### `IpProtocolInput`<sup>Optional</sup> <a name="IpProtocolInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocolInput"></a>

```csharp
public string IpProtocolInput { get; }
```

- *Type:* string

---

##### `LoadBalancerTypeInput`<sup>Optional</sup> <a name="LoadBalancerTypeInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerTypeInput"></a>

```csharp
public string LoadBalancerTypeInput { get; }
```

- *Type:* string

---

##### `NetworkUrlInput`<sup>Optional</sup> <a name="NetworkUrlInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrlInput"></a>

```csharp
public string NetworkUrlInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.portInput"></a>

```csharp
public string PortInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocol"></a>

```csharp
public string IpProtocol { get; }
```

- *Type:* string

---

##### `LoadBalancerType`<sup>Required</sup> <a name="LoadBalancerType" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerType"></a>

```csharp
public string LoadBalancerType { get; }
```

- *Type:* string

---

##### `NetworkUrl`<sup>Required</sup> <a name="NetworkUrl" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrl"></a>

```csharp
public string NetworkUrl { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.port"></a>

```csharp
public string Port { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference <a name="DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.putInternalLoadBalancers">PutInternalLoadBalancers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInternalLoadBalancers` <a name="PutInternalLoadBalancers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.putInternalLoadBalancers"></a>

```csharp
private void PutInternalLoadBalancers(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.putInternalLoadBalancers.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.internalLoadBalancers">InternalLoadBalancers</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList">DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.internalLoadBalancersInput">InternalLoadBalancersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargets">DnsRecordSetRoutingPolicyGeoHealthCheckedTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalLoadBalancers`<sup>Required</sup> <a name="InternalLoadBalancers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.internalLoadBalancers"></a>

```csharp
public DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList InternalLoadBalancers { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList">DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList</a>

---

##### `InternalLoadBalancersInput`<sup>Optional</sup> <a name="InternalLoadBalancersInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.internalLoadBalancersInput"></a>

```csharp
public object InternalLoadBalancersInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.internalValue"></a>

```csharp
public DnsRecordSetRoutingPolicyGeoHealthCheckedTargets InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargets">DnsRecordSetRoutingPolicyGeoHealthCheckedTargets</a>

---


### DnsRecordSetRoutingPolicyGeoList <a name="DnsRecordSetRoutingPolicyGeoList" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DnsRecordSetRoutingPolicyGeoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList.get"></a>

```csharp
private DnsRecordSetRoutingPolicyGeoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DnsRecordSetRoutingPolicyGeoOutputReference <a name="DnsRecordSetRoutingPolicyGeoOutputReference" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DnsRecordSetRoutingPolicyGeoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.putHealthCheckedTargets">PutHealthCheckedTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.resetHealthCheckedTargets">ResetHealthCheckedTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.resetRrdatas">ResetRrdatas</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHealthCheckedTargets` <a name="PutHealthCheckedTargets" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.putHealthCheckedTargets"></a>

```csharp
private void PutHealthCheckedTargets(DnsRecordSetRoutingPolicyGeoHealthCheckedTargets Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.putHealthCheckedTargets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargets">DnsRecordSetRoutingPolicyGeoHealthCheckedTargets</a>

---

##### `ResetHealthCheckedTargets` <a name="ResetHealthCheckedTargets" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.resetHealthCheckedTargets"></a>

```csharp
private void ResetHealthCheckedTargets()
```

##### `ResetRrdatas` <a name="ResetRrdatas" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.resetRrdatas"></a>

```csharp
private void ResetRrdatas()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.property.healthCheckedTargets">HealthCheckedTargets</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference">DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.property.healthCheckedTargetsInput">HealthCheckedTargetsInput</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargets">DnsRecordSetRoutingPolicyGeoHealthCheckedTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.property.rrdatasInput">RrdatasInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.property.rrdatas">Rrdatas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HealthCheckedTargets`<sup>Required</sup> <a name="HealthCheckedTargets" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.property.healthCheckedTargets"></a>

```csharp
public DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference HealthCheckedTargets { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference">DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference</a>

---

##### `HealthCheckedTargetsInput`<sup>Optional</sup> <a name="HealthCheckedTargetsInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.property.healthCheckedTargetsInput"></a>

```csharp
public DnsRecordSetRoutingPolicyGeoHealthCheckedTargets HealthCheckedTargetsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoHealthCheckedTargets">DnsRecordSetRoutingPolicyGeoHealthCheckedTargets</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `RrdatasInput`<sup>Optional</sup> <a name="RrdatasInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.property.rrdatasInput"></a>

```csharp
public string[] RrdatasInput { get; }
```

- *Type:* string[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Rrdatas`<sup>Required</sup> <a name="Rrdatas" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.property.rrdatas"></a>

```csharp
public string[] Rrdatas { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DnsRecordSetRoutingPolicyOutputReference <a name="DnsRecordSetRoutingPolicyOutputReference" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DnsRecordSetRoutingPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.putGeo">PutGeo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.putPrimaryBackup">PutPrimaryBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.putWrr">PutWrr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.resetEnableGeoFencing">ResetEnableGeoFencing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.resetGeo">ResetGeo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.resetPrimaryBackup">ResetPrimaryBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.resetWrr">ResetWrr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGeo` <a name="PutGeo" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.putGeo"></a>

```csharp
private void PutGeo(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.putGeo.parameter.value"></a>

- *Type:* object

---

##### `PutPrimaryBackup` <a name="PutPrimaryBackup" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.putPrimaryBackup"></a>

```csharp
private void PutPrimaryBackup(DnsRecordSetRoutingPolicyPrimaryBackup Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.putPrimaryBackup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackup">DnsRecordSetRoutingPolicyPrimaryBackup</a>

---

##### `PutWrr` <a name="PutWrr" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.putWrr"></a>

```csharp
private void PutWrr(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.putWrr.parameter.value"></a>

- *Type:* object

---

##### `ResetEnableGeoFencing` <a name="ResetEnableGeoFencing" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.resetEnableGeoFencing"></a>

```csharp
private void ResetEnableGeoFencing()
```

##### `ResetGeo` <a name="ResetGeo" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.resetGeo"></a>

```csharp
private void ResetGeo()
```

##### `ResetPrimaryBackup` <a name="ResetPrimaryBackup" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.resetPrimaryBackup"></a>

```csharp
private void ResetPrimaryBackup()
```

##### `ResetWrr` <a name="ResetWrr" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.resetWrr"></a>

```csharp
private void ResetWrr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.property.geo">Geo</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList">DnsRecordSetRoutingPolicyGeoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.property.primaryBackup">PrimaryBackup</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference">DnsRecordSetRoutingPolicyPrimaryBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.property.wrr">Wrr</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList">DnsRecordSetRoutingPolicyWrrList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.property.enableGeoFencingInput">EnableGeoFencingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.property.geoInput">GeoInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.property.primaryBackupInput">PrimaryBackupInput</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackup">DnsRecordSetRoutingPolicyPrimaryBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.property.wrrInput">WrrInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.property.enableGeoFencing">EnableGeoFencing</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicy">DnsRecordSetRoutingPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Geo`<sup>Required</sup> <a name="Geo" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.property.geo"></a>

```csharp
public DnsRecordSetRoutingPolicyGeoList Geo { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyGeoList">DnsRecordSetRoutingPolicyGeoList</a>

---

##### `PrimaryBackup`<sup>Required</sup> <a name="PrimaryBackup" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.property.primaryBackup"></a>

```csharp
public DnsRecordSetRoutingPolicyPrimaryBackupOutputReference PrimaryBackup { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference">DnsRecordSetRoutingPolicyPrimaryBackupOutputReference</a>

---

##### `Wrr`<sup>Required</sup> <a name="Wrr" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.property.wrr"></a>

```csharp
public DnsRecordSetRoutingPolicyWrrList Wrr { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList">DnsRecordSetRoutingPolicyWrrList</a>

---

##### `EnableGeoFencingInput`<sup>Optional</sup> <a name="EnableGeoFencingInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.property.enableGeoFencingInput"></a>

```csharp
public object EnableGeoFencingInput { get; }
```

- *Type:* object

---

##### `GeoInput`<sup>Optional</sup> <a name="GeoInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.property.geoInput"></a>

```csharp
public object GeoInput { get; }
```

- *Type:* object

---

##### `PrimaryBackupInput`<sup>Optional</sup> <a name="PrimaryBackupInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.property.primaryBackupInput"></a>

```csharp
public DnsRecordSetRoutingPolicyPrimaryBackup PrimaryBackupInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackup">DnsRecordSetRoutingPolicyPrimaryBackup</a>

---

##### `WrrInput`<sup>Optional</sup> <a name="WrrInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.property.wrrInput"></a>

```csharp
public object WrrInput { get; }
```

- *Type:* object

---

##### `EnableGeoFencing`<sup>Required</sup> <a name="EnableGeoFencing" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.property.enableGeoFencing"></a>

```csharp
public object EnableGeoFencing { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyOutputReference.property.internalValue"></a>

```csharp
public DnsRecordSetRoutingPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicy">DnsRecordSetRoutingPolicy</a>

---


### DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList <a name="DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.get"></a>

```csharp
private DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference <a name="DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocolInput">IpProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerTypeInput">LoadBalancerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrlInput">NetworkUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.portInput">PortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocol">IpProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerType">LoadBalancerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrl">NetworkUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.port">Port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddressInput"></a>

```csharp
public string IpAddressInput { get; }
```

- *Type:* string

---

##### `IpProtocolInput`<sup>Optional</sup> <a name="IpProtocolInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocolInput"></a>

```csharp
public string IpProtocolInput { get; }
```

- *Type:* string

---

##### `LoadBalancerTypeInput`<sup>Optional</sup> <a name="LoadBalancerTypeInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerTypeInput"></a>

```csharp
public string LoadBalancerTypeInput { get; }
```

- *Type:* string

---

##### `NetworkUrlInput`<sup>Optional</sup> <a name="NetworkUrlInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrlInput"></a>

```csharp
public string NetworkUrlInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.portInput"></a>

```csharp
public string PortInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocol"></a>

```csharp
public string IpProtocol { get; }
```

- *Type:* string

---

##### `LoadBalancerType`<sup>Required</sup> <a name="LoadBalancerType" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerType"></a>

```csharp
public string LoadBalancerType { get; }
```

- *Type:* string

---

##### `NetworkUrl`<sup>Required</sup> <a name="NetworkUrl" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrl"></a>

```csharp
public string NetworkUrl { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.port"></a>

```csharp
public string Port { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference <a name="DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.putInternalLoadBalancers">PutInternalLoadBalancers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInternalLoadBalancers` <a name="PutInternalLoadBalancers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.putInternalLoadBalancers"></a>

```csharp
private void PutInternalLoadBalancers(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.putInternalLoadBalancers.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.internalLoadBalancers">InternalLoadBalancers</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList">DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.internalLoadBalancersInput">InternalLoadBalancersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets">DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalLoadBalancers`<sup>Required</sup> <a name="InternalLoadBalancers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.internalLoadBalancers"></a>

```csharp
public DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList InternalLoadBalancers { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList">DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList</a>

---

##### `InternalLoadBalancersInput`<sup>Optional</sup> <a name="InternalLoadBalancersInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.internalLoadBalancersInput"></a>

```csharp
public object InternalLoadBalancersInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.internalValue"></a>

```csharp
public DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets">DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets</a>

---


### DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList <a name="DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.get"></a>

```csharp
private DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference <a name="DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.putHealthCheckedTargets">PutHealthCheckedTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.resetHealthCheckedTargets">ResetHealthCheckedTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.resetRrdatas">ResetRrdatas</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHealthCheckedTargets` <a name="PutHealthCheckedTargets" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.putHealthCheckedTargets"></a>

```csharp
private void PutHealthCheckedTargets(DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.putHealthCheckedTargets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets">DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets</a>

---

##### `ResetHealthCheckedTargets` <a name="ResetHealthCheckedTargets" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.resetHealthCheckedTargets"></a>

```csharp
private void ResetHealthCheckedTargets()
```

##### `ResetRrdatas` <a name="ResetRrdatas" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.resetRrdatas"></a>

```csharp
private void ResetRrdatas()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.healthCheckedTargets">HealthCheckedTargets</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference">DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.healthCheckedTargetsInput">HealthCheckedTargetsInput</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets">DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.rrdatasInput">RrdatasInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.rrdatas">Rrdatas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HealthCheckedTargets`<sup>Required</sup> <a name="HealthCheckedTargets" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.healthCheckedTargets"></a>

```csharp
public DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference HealthCheckedTargets { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference">DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference</a>

---

##### `HealthCheckedTargetsInput`<sup>Optional</sup> <a name="HealthCheckedTargetsInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.healthCheckedTargetsInput"></a>

```csharp
public DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets HealthCheckedTargetsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets">DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `RrdatasInput`<sup>Optional</sup> <a name="RrdatasInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.rrdatasInput"></a>

```csharp
public string[] RrdatasInput { get; }
```

- *Type:* string[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Rrdatas`<sup>Required</sup> <a name="Rrdatas" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.rrdatas"></a>

```csharp
public string[] Rrdatas { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DnsRecordSetRoutingPolicyPrimaryBackupOutputReference <a name="DnsRecordSetRoutingPolicyPrimaryBackupOutputReference" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DnsRecordSetRoutingPolicyPrimaryBackupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.putBackupGeo">PutBackupGeo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.putPrimary">PutPrimary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.resetEnableGeoFencingForBackups">ResetEnableGeoFencingForBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.resetTrickleRatio">ResetTrickleRatio</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBackupGeo` <a name="PutBackupGeo" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.putBackupGeo"></a>

```csharp
private void PutBackupGeo(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.putBackupGeo.parameter.value"></a>

- *Type:* object

---

##### `PutPrimary` <a name="PutPrimary" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.putPrimary"></a>

```csharp
private void PutPrimary(DnsRecordSetRoutingPolicyPrimaryBackupPrimary Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.putPrimary.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimary">DnsRecordSetRoutingPolicyPrimaryBackupPrimary</a>

---

##### `ResetEnableGeoFencingForBackups` <a name="ResetEnableGeoFencingForBackups" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.resetEnableGeoFencingForBackups"></a>

```csharp
private void ResetEnableGeoFencingForBackups()
```

##### `ResetTrickleRatio` <a name="ResetTrickleRatio" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.resetTrickleRatio"></a>

```csharp
private void ResetTrickleRatio()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.backupGeo">BackupGeo</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList">DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.primary">Primary</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference">DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.backupGeoInput">BackupGeoInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.enableGeoFencingForBackupsInput">EnableGeoFencingForBackupsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.primaryInput">PrimaryInput</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimary">DnsRecordSetRoutingPolicyPrimaryBackupPrimary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.trickleRatioInput">TrickleRatioInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.enableGeoFencingForBackups">EnableGeoFencingForBackups</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.trickleRatio">TrickleRatio</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackup">DnsRecordSetRoutingPolicyPrimaryBackup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupGeo`<sup>Required</sup> <a name="BackupGeo" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.backupGeo"></a>

```csharp
public DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList BackupGeo { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList">DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList</a>

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.primary"></a>

```csharp
public DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference Primary { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference">DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference</a>

---

##### `BackupGeoInput`<sup>Optional</sup> <a name="BackupGeoInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.backupGeoInput"></a>

```csharp
public object BackupGeoInput { get; }
```

- *Type:* object

---

##### `EnableGeoFencingForBackupsInput`<sup>Optional</sup> <a name="EnableGeoFencingForBackupsInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.enableGeoFencingForBackupsInput"></a>

```csharp
public object EnableGeoFencingForBackupsInput { get; }
```

- *Type:* object

---

##### `PrimaryInput`<sup>Optional</sup> <a name="PrimaryInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.primaryInput"></a>

```csharp
public DnsRecordSetRoutingPolicyPrimaryBackupPrimary PrimaryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimary">DnsRecordSetRoutingPolicyPrimaryBackupPrimary</a>

---

##### `TrickleRatioInput`<sup>Optional</sup> <a name="TrickleRatioInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.trickleRatioInput"></a>

```csharp
public double TrickleRatioInput { get; }
```

- *Type:* double

---

##### `EnableGeoFencingForBackups`<sup>Required</sup> <a name="EnableGeoFencingForBackups" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.enableGeoFencingForBackups"></a>

```csharp
public object EnableGeoFencingForBackups { get; }
```

- *Type:* object

---

##### `TrickleRatio`<sup>Required</sup> <a name="TrickleRatio" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.trickleRatio"></a>

```csharp
public double TrickleRatio { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.internalValue"></a>

```csharp
public DnsRecordSetRoutingPolicyPrimaryBackup InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackup">DnsRecordSetRoutingPolicyPrimaryBackup</a>

---


### DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList <a name="DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.get"></a>

```csharp
private DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference <a name="DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.ipProtocolInput">IpProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.loadBalancerTypeInput">LoadBalancerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.networkUrlInput">NetworkUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.portInput">PortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.ipProtocol">IpProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.loadBalancerType">LoadBalancerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.networkUrl">NetworkUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.port">Port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.ipAddressInput"></a>

```csharp
public string IpAddressInput { get; }
```

- *Type:* string

---

##### `IpProtocolInput`<sup>Optional</sup> <a name="IpProtocolInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.ipProtocolInput"></a>

```csharp
public string IpProtocolInput { get; }
```

- *Type:* string

---

##### `LoadBalancerTypeInput`<sup>Optional</sup> <a name="LoadBalancerTypeInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.loadBalancerTypeInput"></a>

```csharp
public string LoadBalancerTypeInput { get; }
```

- *Type:* string

---

##### `NetworkUrlInput`<sup>Optional</sup> <a name="NetworkUrlInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.networkUrlInput"></a>

```csharp
public string NetworkUrlInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.portInput"></a>

```csharp
public string PortInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.ipProtocol"></a>

```csharp
public string IpProtocol { get; }
```

- *Type:* string

---

##### `LoadBalancerType`<sup>Required</sup> <a name="LoadBalancerType" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.loadBalancerType"></a>

```csharp
public string LoadBalancerType { get; }
```

- *Type:* string

---

##### `NetworkUrl`<sup>Required</sup> <a name="NetworkUrl" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.networkUrl"></a>

```csharp
public string NetworkUrl { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.port"></a>

```csharp
public string Port { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference <a name="DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.putInternalLoadBalancers">PutInternalLoadBalancers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInternalLoadBalancers` <a name="PutInternalLoadBalancers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.putInternalLoadBalancers"></a>

```csharp
private void PutInternalLoadBalancers(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.putInternalLoadBalancers.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.internalLoadBalancers">InternalLoadBalancers</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList">DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.internalLoadBalancersInput">InternalLoadBalancersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimary">DnsRecordSetRoutingPolicyPrimaryBackupPrimary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalLoadBalancers`<sup>Required</sup> <a name="InternalLoadBalancers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.internalLoadBalancers"></a>

```csharp
public DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList InternalLoadBalancers { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList">DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList</a>

---

##### `InternalLoadBalancersInput`<sup>Optional</sup> <a name="InternalLoadBalancersInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.internalLoadBalancersInput"></a>

```csharp
public object InternalLoadBalancersInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.internalValue"></a>

```csharp
public DnsRecordSetRoutingPolicyPrimaryBackupPrimary InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyPrimaryBackupPrimary">DnsRecordSetRoutingPolicyPrimaryBackupPrimary</a>

---


### DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList <a name="DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.get"></a>

```csharp
private DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference <a name="DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocolInput">IpProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerTypeInput">LoadBalancerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrlInput">NetworkUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.portInput">PortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocol">IpProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerType">LoadBalancerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrl">NetworkUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.port">Port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddressInput"></a>

```csharp
public string IpAddressInput { get; }
```

- *Type:* string

---

##### `IpProtocolInput`<sup>Optional</sup> <a name="IpProtocolInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocolInput"></a>

```csharp
public string IpProtocolInput { get; }
```

- *Type:* string

---

##### `LoadBalancerTypeInput`<sup>Optional</sup> <a name="LoadBalancerTypeInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerTypeInput"></a>

```csharp
public string LoadBalancerTypeInput { get; }
```

- *Type:* string

---

##### `NetworkUrlInput`<sup>Optional</sup> <a name="NetworkUrlInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrlInput"></a>

```csharp
public string NetworkUrlInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.portInput"></a>

```csharp
public string PortInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocol"></a>

```csharp
public string IpProtocol { get; }
```

- *Type:* string

---

##### `LoadBalancerType`<sup>Required</sup> <a name="LoadBalancerType" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerType"></a>

```csharp
public string LoadBalancerType { get; }
```

- *Type:* string

---

##### `NetworkUrl`<sup>Required</sup> <a name="NetworkUrl" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrl"></a>

```csharp
public string NetworkUrl { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.port"></a>

```csharp
public string Port { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference <a name="DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.putInternalLoadBalancers">PutInternalLoadBalancers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInternalLoadBalancers` <a name="PutInternalLoadBalancers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.putInternalLoadBalancers"></a>

```csharp
private void PutInternalLoadBalancers(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.putInternalLoadBalancers.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.internalLoadBalancers">InternalLoadBalancers</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList">DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.internalLoadBalancersInput">InternalLoadBalancersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargets">DnsRecordSetRoutingPolicyWrrHealthCheckedTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalLoadBalancers`<sup>Required</sup> <a name="InternalLoadBalancers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.internalLoadBalancers"></a>

```csharp
public DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList InternalLoadBalancers { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList">DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList</a>

---

##### `InternalLoadBalancersInput`<sup>Optional</sup> <a name="InternalLoadBalancersInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.internalLoadBalancersInput"></a>

```csharp
public object InternalLoadBalancersInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.internalValue"></a>

```csharp
public DnsRecordSetRoutingPolicyWrrHealthCheckedTargets InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargets">DnsRecordSetRoutingPolicyWrrHealthCheckedTargets</a>

---


### DnsRecordSetRoutingPolicyWrrList <a name="DnsRecordSetRoutingPolicyWrrList" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DnsRecordSetRoutingPolicyWrrList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList.get"></a>

```csharp
private DnsRecordSetRoutingPolicyWrrOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DnsRecordSetRoutingPolicyWrrOutputReference <a name="DnsRecordSetRoutingPolicyWrrOutputReference" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DnsRecordSetRoutingPolicyWrrOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.putHealthCheckedTargets">PutHealthCheckedTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.resetHealthCheckedTargets">ResetHealthCheckedTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.resetRrdatas">ResetRrdatas</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHealthCheckedTargets` <a name="PutHealthCheckedTargets" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.putHealthCheckedTargets"></a>

```csharp
private void PutHealthCheckedTargets(DnsRecordSetRoutingPolicyWrrHealthCheckedTargets Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.putHealthCheckedTargets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargets">DnsRecordSetRoutingPolicyWrrHealthCheckedTargets</a>

---

##### `ResetHealthCheckedTargets` <a name="ResetHealthCheckedTargets" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.resetHealthCheckedTargets"></a>

```csharp
private void ResetHealthCheckedTargets()
```

##### `ResetRrdatas` <a name="ResetRrdatas" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.resetRrdatas"></a>

```csharp
private void ResetRrdatas()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.property.healthCheckedTargets">HealthCheckedTargets</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference">DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.property.healthCheckedTargetsInput">HealthCheckedTargetsInput</a></code> | <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargets">DnsRecordSetRoutingPolicyWrrHealthCheckedTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.property.rrdatasInput">RrdatasInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.property.rrdatas">Rrdatas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HealthCheckedTargets`<sup>Required</sup> <a name="HealthCheckedTargets" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.property.healthCheckedTargets"></a>

```csharp
public DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference HealthCheckedTargets { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference">DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference</a>

---

##### `HealthCheckedTargetsInput`<sup>Optional</sup> <a name="HealthCheckedTargetsInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.property.healthCheckedTargetsInput"></a>

```csharp
public DnsRecordSetRoutingPolicyWrrHealthCheckedTargets HealthCheckedTargetsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrHealthCheckedTargets">DnsRecordSetRoutingPolicyWrrHealthCheckedTargets</a>

---

##### `RrdatasInput`<sup>Optional</sup> <a name="RrdatasInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.property.rrdatasInput"></a>

```csharp
public string[] RrdatasInput { get; }
```

- *Type:* string[]

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `Rrdatas`<sup>Required</sup> <a name="Rrdatas" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.property.rrdatas"></a>

```csharp
public string[] Rrdatas { get; }
```

- *Type:* string[]

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsRecordSet.DnsRecordSetRoutingPolicyWrrOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



