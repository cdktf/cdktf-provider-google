# `dataGoogleCloudIdentityGroupMemberships` Submodule <a name="`dataGoogleCloudIdentityGroupMemberships` Submodule" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCloudIdentityGroupMemberships <a name="DataGoogleCloudIdentityGroupMemberships" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/data-sources/cloud_identity_group_memberships google_cloud_identity_group_memberships}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudIdentityGroupMemberships(Construct Scope, string Id, DataGoogleCloudIdentityGroupMembershipsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsConfig">DataGoogleCloudIdentityGroupMembershipsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsConfig">DataGoogleCloudIdentityGroupMembershipsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleCloudIdentityGroupMemberships resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleCloudIdentityGroupMemberships.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleCloudIdentityGroupMemberships.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleCloudIdentityGroupMemberships.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleCloudIdentityGroupMemberships.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleCloudIdentityGroupMemberships resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleCloudIdentityGroupMemberships to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleCloudIdentityGroupMemberships that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/data-sources/cloud_identity_group_memberships#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleCloudIdentityGroupMemberships to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.memberships">Memberships</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList">DataGoogleCloudIdentityGroupMembershipsMembershipsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.groupInput">GroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.group">Group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Memberships`<sup>Required</sup> <a name="Memberships" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.memberships"></a>

```csharp
public DataGoogleCloudIdentityGroupMembershipsMembershipsList Memberships { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList">DataGoogleCloudIdentityGroupMembershipsMembershipsList</a>

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.groupInput"></a>

```csharp
public string GroupInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.group"></a>

```csharp
public string Group { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMemberships.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCloudIdentityGroupMembershipsConfig <a name="DataGoogleCloudIdentityGroupMembershipsConfig" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudIdentityGroupMembershipsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Group,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsConfig.property.group">Group</a></code> | <code>string</code> | The name of the Group to get memberships from. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/data-sources/cloud_identity_group_memberships#id DataGoogleCloudIdentityGroupMemberships#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsConfig.property.group"></a>

```csharp
public string Group { get; set; }
```

- *Type:* string

The name of the Group to get memberships from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/data-sources/cloud_identity_group_memberships#group DataGoogleCloudIdentityGroupMemberships#group}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/data-sources/cloud_identity_group_memberships#id DataGoogleCloudIdentityGroupMemberships#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleCloudIdentityGroupMembershipsMemberships <a name="DataGoogleCloudIdentityGroupMembershipsMemberships" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMemberships"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMemberships.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudIdentityGroupMembershipsMemberships {

};
```


### DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKey <a name="DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKey" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKey {

};
```


### DataGoogleCloudIdentityGroupMembershipsMembershipsRoles <a name="DataGoogleCloudIdentityGroupMembershipsMembershipsRoles" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRoles.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudIdentityGroupMembershipsMembershipsRoles {

};
```


### DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetail <a name="DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetail" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetail.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetail {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCloudIdentityGroupMembershipsMembershipsList <a name="DataGoogleCloudIdentityGroupMembershipsMembershipsList" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudIdentityGroupMembershipsMembershipsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList.get"></a>

```csharp
private DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference <a name="DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.property.group">Group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.property.preferredMemberKey">PreferredMemberKey</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList">DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.property.roles">Roles</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList">DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMemberships">DataGoogleCloudIdentityGroupMembershipsMemberships</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.property.group"></a>

```csharp
public string Group { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PreferredMemberKey`<sup>Required</sup> <a name="PreferredMemberKey" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.property.preferredMemberKey"></a>

```csharp
public DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList PreferredMemberKey { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList">DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList</a>

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.property.roles"></a>

```csharp
public DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList Roles { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList">DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudIdentityGroupMembershipsMemberships InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMemberships">DataGoogleCloudIdentityGroupMembershipsMemberships</a>

---


### DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList <a name="DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList.get"></a>

```csharp
private DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference <a name="DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKey">DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKeyOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKey InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKey">DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKey</a>

---


### DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList <a name="DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList.get"></a>

```csharp
private DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference <a name="DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.property.expireTime">ExpireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetail">DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetail</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.property.expireTime"></a>

```csharp
public string ExpireTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetail InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetail">DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetail</a>

---


### DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList <a name="DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList.get"></a>

```csharp
private DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference <a name="DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.property.expiryDetail">ExpiryDetail</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList">DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRoles">DataGoogleCloudIdentityGroupMembershipsMembershipsRoles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpiryDetail`<sup>Required</sup> <a name="ExpiryDetail" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.property.expiryDetail"></a>

```csharp
public DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList ExpiryDetail { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList">DataGoogleCloudIdentityGroupMembershipsMembershipsRolesExpiryDetailList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRolesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudIdentityGroupMembershipsMembershipsRoles InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupMemberships.DataGoogleCloudIdentityGroupMembershipsMembershipsRoles">DataGoogleCloudIdentityGroupMembershipsMembershipsRoles</a>

---



