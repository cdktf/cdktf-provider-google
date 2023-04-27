# `google_storage_object_acl`

Refer to the Terraform Registory for docs: [`google_storage_object_acl`](https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/storage_object_acl).

# `storageObjectAcl` Submodule <a name="`storageObjectAcl` Submodule" id="@cdktf/provider-google.storageObjectAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageObjectAcl <a name="StorageObjectAcl" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/storage_object_acl google_storage_object_acl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageObjectAcl(Construct Scope, string Id, StorageObjectAclConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig">StorageObjectAclConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig">StorageObjectAclConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.resetPredefinedAcl">ResetPredefinedAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.resetRoleEntity">ResetRoleEntity</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPredefinedAcl` <a name="ResetPredefinedAcl" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.resetPredefinedAcl"></a>

```csharp
private void ResetPredefinedAcl()
```

##### `ResetRoleEntity` <a name="ResetRoleEntity" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.resetRoleEntity"></a>

```csharp
private void ResetRoleEntity()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

StorageObjectAcl.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

StorageObjectAcl.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

StorageObjectAcl.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.objectInput">ObjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.predefinedAclInput">PredefinedAclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.roleEntityInput">RoleEntityInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.object">Object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.predefinedAcl">PredefinedAcl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.roleEntity">RoleEntity</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.objectInput"></a>

```csharp
public string ObjectInput { get; }
```

- *Type:* string

---

##### `PredefinedAclInput`<sup>Optional</sup> <a name="PredefinedAclInput" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.predefinedAclInput"></a>

```csharp
public string PredefinedAclInput { get; }
```

- *Type:* string

---

##### `RoleEntityInput`<sup>Optional</sup> <a name="RoleEntityInput" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.roleEntityInput"></a>

```csharp
public string[] RoleEntityInput { get; }
```

- *Type:* string[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.object"></a>

```csharp
public string Object { get; }
```

- *Type:* string

---

##### `PredefinedAcl`<sup>Required</sup> <a name="PredefinedAcl" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.predefinedAcl"></a>

```csharp
public string PredefinedAcl { get; }
```

- *Type:* string

---

##### `RoleEntity`<sup>Required</sup> <a name="RoleEntity" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.roleEntity"></a>

```csharp
public string[] RoleEntity { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageObjectAclConfig <a name="StorageObjectAclConfig" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageObjectAclConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Bucket,
    string Object,
    string Id = null,
    string PredefinedAcl = null,
    string[] RoleEntity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/storage_object_acl#bucket StorageObjectAcl#bucket}. |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.object">Object</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/storage_object_acl#object StorageObjectAcl#object}. |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/storage_object_acl#id StorageObjectAcl#id}. |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.predefinedAcl">PredefinedAcl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/storage_object_acl#predefined_acl StorageObjectAcl#predefined_acl}. |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.roleEntity">RoleEntity</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/storage_object_acl#role_entity StorageObjectAcl#role_entity}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/storage_object_acl#bucket StorageObjectAcl#bucket}.

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.object"></a>

```csharp
public string Object { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/storage_object_acl#object StorageObjectAcl#object}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/storage_object_acl#id StorageObjectAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PredefinedAcl`<sup>Optional</sup> <a name="PredefinedAcl" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.predefinedAcl"></a>

```csharp
public string PredefinedAcl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/storage_object_acl#predefined_acl StorageObjectAcl#predefined_acl}.

---

##### `RoleEntity`<sup>Optional</sup> <a name="RoleEntity" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.roleEntity"></a>

```csharp
public string[] RoleEntity { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/storage_object_acl#role_entity StorageObjectAcl#role_entity}.

---



