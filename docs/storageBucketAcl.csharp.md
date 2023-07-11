# `google_storage_bucket_acl`

Refer to the Terraform Registory for docs: [`google_storage_bucket_acl`](https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/storage_bucket_acl).

# `storageBucketAcl` Submodule <a name="`storageBucketAcl` Submodule" id="@cdktf/provider-google.storageBucketAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageBucketAcl <a name="StorageBucketAcl" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/storage_bucket_acl google_storage_bucket_acl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBucketAcl(Construct Scope, string Id, StorageBucketAclConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAclConfig">StorageBucketAclConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAclConfig">StorageBucketAclConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.resetDefaultAcl">ResetDefaultAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.resetPredefinedAcl">ResetPredefinedAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.resetRoleEntity">ResetRoleEntity</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDefaultAcl` <a name="ResetDefaultAcl" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.resetDefaultAcl"></a>

```csharp
private void ResetDefaultAcl()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPredefinedAcl` <a name="ResetPredefinedAcl" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.resetPredefinedAcl"></a>

```csharp
private void ResetPredefinedAcl()
```

##### `ResetRoleEntity` <a name="ResetRoleEntity" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.resetRoleEntity"></a>

```csharp
private void ResetRoleEntity()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

StorageBucketAcl.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

StorageBucketAcl.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

StorageBucketAcl.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.defaultAclInput">DefaultAclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.predefinedAclInput">PredefinedAclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.roleEntityInput">RoleEntityInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.defaultAcl">DefaultAcl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.predefinedAcl">PredefinedAcl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.roleEntity">RoleEntity</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `DefaultAclInput`<sup>Optional</sup> <a name="DefaultAclInput" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.defaultAclInput"></a>

```csharp
public string DefaultAclInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PredefinedAclInput`<sup>Optional</sup> <a name="PredefinedAclInput" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.predefinedAclInput"></a>

```csharp
public string PredefinedAclInput { get; }
```

- *Type:* string

---

##### `RoleEntityInput`<sup>Optional</sup> <a name="RoleEntityInput" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.roleEntityInput"></a>

```csharp
public string[] RoleEntityInput { get; }
```

- *Type:* string[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `DefaultAcl`<sup>Required</sup> <a name="DefaultAcl" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.defaultAcl"></a>

```csharp
public string DefaultAcl { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PredefinedAcl`<sup>Required</sup> <a name="PredefinedAcl" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.predefinedAcl"></a>

```csharp
public string PredefinedAcl { get; }
```

- *Type:* string

---

##### `RoleEntity`<sup>Required</sup> <a name="RoleEntity" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.roleEntity"></a>

```csharp
public string[] RoleEntity { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAcl.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageBucketAclConfig <a name="StorageBucketAclConfig" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAclConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageBucketAclConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Bucket,
    string DefaultAcl = null,
    string Id = null,
    string PredefinedAcl = null,
    string[] RoleEntity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAclConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAclConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAclConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAclConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAclConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAclConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAclConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAclConfig.property.bucket">Bucket</a></code> | <code>string</code> | The name of the bucket it applies to. |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAclConfig.property.defaultAcl">DefaultAcl</a></code> | <code>string</code> | Configure this ACL to be the default ACL. |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAclConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/storage_bucket_acl#id StorageBucketAcl#id}. |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAclConfig.property.predefinedAcl">PredefinedAcl</a></code> | <code>string</code> | The canned GCS ACL to apply. Must be set if role_entity is not. |
| <code><a href="#@cdktf/provider-google.storageBucketAcl.StorageBucketAclConfig.property.roleEntity">RoleEntity</a></code> | <code>string[]</code> | List of role/entity pairs in the form ROLE:entity. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAclConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAclConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAclConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAclConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAclConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAclConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAclConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAclConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

The name of the bucket it applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/storage_bucket_acl#bucket StorageBucketAcl#bucket}

---

##### `DefaultAcl`<sup>Optional</sup> <a name="DefaultAcl" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAclConfig.property.defaultAcl"></a>

```csharp
public string DefaultAcl { get; set; }
```

- *Type:* string

Configure this ACL to be the default ACL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/storage_bucket_acl#default_acl StorageBucketAcl#default_acl}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAclConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/storage_bucket_acl#id StorageBucketAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PredefinedAcl`<sup>Optional</sup> <a name="PredefinedAcl" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAclConfig.property.predefinedAcl"></a>

```csharp
public string PredefinedAcl { get; set; }
```

- *Type:* string

The canned GCS ACL to apply. Must be set if role_entity is not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/storage_bucket_acl#predefined_acl StorageBucketAcl#predefined_acl}

---

##### `RoleEntity`<sup>Optional</sup> <a name="RoleEntity" id="@cdktf/provider-google.storageBucketAcl.StorageBucketAclConfig.property.roleEntity"></a>

```csharp
public string[] RoleEntity { get; set; }
```

- *Type:* string[]

List of role/entity pairs in the form ROLE:entity.

See GCS Bucket ACL documentation  for more details. Must be set if predefined_acl is not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/storage_bucket_acl#role_entity StorageBucketAcl#role_entity}

---



