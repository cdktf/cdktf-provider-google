# `google_firestore_field`

Refer to the Terraform Registory for docs: [`google_firestore_field`](https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/firestore_field).

# `firestoreField` Submodule <a name="`firestoreField` Submodule" id="@cdktf/provider-google.firestoreField"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirestoreField <a name="FirestoreField" id="@cdktf/provider-google.firestoreField.FirestoreField"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/firestore_field google_firestore_field}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firestoreField.FirestoreField.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/firestorefield"

firestorefield.NewFirestoreField(scope Construct, id *string, config FirestoreFieldConfig) FirestoreField
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldConfig">FirestoreFieldConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.firestoreField.FirestoreField.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firestoreField.FirestoreField.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.firestoreField.FirestoreField.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.firestoreField.FirestoreFieldConfig">FirestoreFieldConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.firestoreField.FirestoreField.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.firestoreField.FirestoreField.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firestoreField.FirestoreField.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.firestoreField.FirestoreField.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.firestoreField.FirestoreField.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.firestoreField.FirestoreField.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.firestoreField.FirestoreField.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.firestoreField.FirestoreField.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firestoreField.FirestoreField.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreField.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firestoreField.FirestoreField.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreField.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firestoreField.FirestoreField.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreField.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firestoreField.FirestoreField.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreField.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firestoreField.FirestoreField.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreField.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firestoreField.FirestoreField.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreField.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firestoreField.FirestoreField.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreField.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firestoreField.FirestoreField.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreField.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firestoreField.FirestoreField.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreField.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firestoreField.FirestoreField.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreField.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutIndexConfig` <a name="PutIndexConfig" id="@cdktf/provider-google.firestoreField.FirestoreField.putIndexConfig"></a>

```go
func PutIndexConfig(value FirestoreFieldIndexConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firestoreField.FirestoreField.putIndexConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfig">FirestoreFieldIndexConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.firestoreField.FirestoreField.putTimeouts"></a>

```go
func PutTimeouts(value FirestoreFieldTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firestoreField.FirestoreField.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeouts">FirestoreFieldTimeouts</a>

---

##### `PutTtlConfig` <a name="PutTtlConfig" id="@cdktf/provider-google.firestoreField.FirestoreField.putTtlConfig"></a>

```go
func PutTtlConfig(value FirestoreFieldTtlConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firestoreField.FirestoreField.putTtlConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfig">FirestoreFieldTtlConfig</a>

---

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktf/provider-google.firestoreField.FirestoreField.resetDatabase"></a>

```go
func ResetDatabase()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.firestoreField.FirestoreField.resetId"></a>

```go
func ResetId()
```

##### `ResetIndexConfig` <a name="ResetIndexConfig" id="@cdktf/provider-google.firestoreField.FirestoreField.resetIndexConfig"></a>

```go
func ResetIndexConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.firestoreField.FirestoreField.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.firestoreField.FirestoreField.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTtlConfig` <a name="ResetTtlConfig" id="@cdktf/provider-google.firestoreField.FirestoreField.resetTtlConfig"></a>

```go
func ResetTtlConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.firestoreField.FirestoreField.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/firestorefield"

firestorefield.FirestoreField_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firestoreField.FirestoreField.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.firestoreField.FirestoreField.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/firestorefield"

firestorefield.FirestoreField_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firestoreField.FirestoreField.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.firestoreField.FirestoreField.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/firestorefield"

firestorefield.FirestoreField_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firestoreField.FirestoreField.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.indexConfig">IndexConfig</a></code> | <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference">FirestoreFieldIndexConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference">FirestoreFieldTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.ttlConfig">TtlConfig</a></code> | <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference">FirestoreFieldTtlConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.collectionInput">CollectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.fieldInput">FieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.indexConfigInput">IndexConfigInput</a></code> | <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfig">FirestoreFieldIndexConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.ttlConfigInput">TtlConfigInput</a></code> | <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfig">FirestoreFieldTtlConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.collection">Collection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.field">Field</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.firestoreField.FirestoreField.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.firestoreField.FirestoreField.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firestoreField.FirestoreField.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.firestoreField.FirestoreField.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.firestoreField.FirestoreField.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.firestoreField.FirestoreField.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.firestoreField.FirestoreField.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.firestoreField.FirestoreField.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.firestoreField.FirestoreField.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.firestoreField.FirestoreField.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.firestoreField.FirestoreField.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.firestoreField.FirestoreField.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.firestoreField.FirestoreField.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.firestoreField.FirestoreField.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IndexConfig`<sup>Required</sup> <a name="IndexConfig" id="@cdktf/provider-google.firestoreField.FirestoreField.property.indexConfig"></a>

```go
func IndexConfig() FirestoreFieldIndexConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference">FirestoreFieldIndexConfigOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.firestoreField.FirestoreField.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.firestoreField.FirestoreField.property.timeouts"></a>

```go
func Timeouts() FirestoreFieldTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference">FirestoreFieldTimeoutsOutputReference</a>

---

##### `TtlConfig`<sup>Required</sup> <a name="TtlConfig" id="@cdktf/provider-google.firestoreField.FirestoreField.property.ttlConfig"></a>

```go
func TtlConfig() FirestoreFieldTtlConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference">FirestoreFieldTtlConfigOutputReference</a>

---

##### `CollectionInput`<sup>Optional</sup> <a name="CollectionInput" id="@cdktf/provider-google.firestoreField.FirestoreField.property.collectionInput"></a>

```go
func CollectionInput() *string
```

- *Type:* *string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-google.firestoreField.FirestoreField.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktf/provider-google.firestoreField.FirestoreField.property.fieldInput"></a>

```go
func FieldInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.firestoreField.FirestoreField.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IndexConfigInput`<sup>Optional</sup> <a name="IndexConfigInput" id="@cdktf/provider-google.firestoreField.FirestoreField.property.indexConfigInput"></a>

```go
func IndexConfigInput() FirestoreFieldIndexConfig
```

- *Type:* <a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfig">FirestoreFieldIndexConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.firestoreField.FirestoreField.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.firestoreField.FirestoreField.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TtlConfigInput`<sup>Optional</sup> <a name="TtlConfigInput" id="@cdktf/provider-google.firestoreField.FirestoreField.property.ttlConfigInput"></a>

```go
func TtlConfigInput() FirestoreFieldTtlConfig
```

- *Type:* <a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfig">FirestoreFieldTtlConfig</a>

---

##### `Collection`<sup>Required</sup> <a name="Collection" id="@cdktf/provider-google.firestoreField.FirestoreField.property.collection"></a>

```go
func Collection() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-google.firestoreField.FirestoreField.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-google.firestoreField.FirestoreField.property.field"></a>

```go
func Field() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.firestoreField.FirestoreField.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.firestoreField.FirestoreField.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.firestoreField.FirestoreField.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FirestoreFieldConfig <a name="FirestoreFieldConfig" id="@cdktf/provider-google.firestoreField.FirestoreFieldConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firestoreField.FirestoreFieldConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/firestorefield"

&firestorefield.FirestoreFieldConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Collection: *string,
	Field: *string,
	Database: *string,
	Id: *string,
	IndexConfig: github.com/cdktf/cdktf-provider-google-go/google.firestoreField.FirestoreFieldIndexConfig,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.firestoreField.FirestoreFieldTimeouts,
	TtlConfig: github.com/cdktf/cdktf-provider-google-go/google.firestoreField.FirestoreFieldTtlConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.collection">Collection</a></code> | <code>*string</code> | The id of the collection group to configure. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.field">Field</a></code> | <code>*string</code> | The id of the field to configure. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.database">Database</a></code> | <code>*string</code> | The Firestore database id. Defaults to '"(default)"'. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/firestore_field#id FirestoreField#id}. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.indexConfig">IndexConfig</a></code> | <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfig">FirestoreFieldIndexConfig</a></code> | index_config block. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/firestore_field#project FirestoreField#project}. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeouts">FirestoreFieldTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.ttlConfig">TtlConfig</a></code> | <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfig">FirestoreFieldTtlConfig</a></code> | ttl_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Collection`<sup>Required</sup> <a name="Collection" id="@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.collection"></a>

```go
Collection *string
```

- *Type:* *string

The id of the collection group to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/firestore_field#collection FirestoreField#collection}

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.field"></a>

```go
Field *string
```

- *Type:* *string

The id of the field to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/firestore_field#field FirestoreField#field}

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.database"></a>

```go
Database *string
```

- *Type:* *string

The Firestore database id. Defaults to '"(default)"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/firestore_field#database FirestoreField#database}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/firestore_field#id FirestoreField#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IndexConfig`<sup>Optional</sup> <a name="IndexConfig" id="@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.indexConfig"></a>

```go
IndexConfig FirestoreFieldIndexConfig
```

- *Type:* <a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfig">FirestoreFieldIndexConfig</a>

index_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/firestore_field#index_config FirestoreField#index_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/firestore_field#project FirestoreField#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.timeouts"></a>

```go
Timeouts FirestoreFieldTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeouts">FirestoreFieldTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/firestore_field#timeouts FirestoreField#timeouts}

---

##### `TtlConfig`<sup>Optional</sup> <a name="TtlConfig" id="@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.ttlConfig"></a>

```go
TtlConfig FirestoreFieldTtlConfig
```

- *Type:* <a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfig">FirestoreFieldTtlConfig</a>

ttl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/firestore_field#ttl_config FirestoreField#ttl_config}

---

### FirestoreFieldIndexConfig <a name="FirestoreFieldIndexConfig" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/firestorefield"

&firestorefield.FirestoreFieldIndexConfig {
	Indexes: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfig.property.indexes">Indexes</a></code> | <code>interface{}</code> | indexes block. |

---

##### `Indexes`<sup>Optional</sup> <a name="Indexes" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfig.property.indexes"></a>

```go
Indexes interface{}
```

- *Type:* interface{}

indexes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/firestore_field#indexes FirestoreField#indexes}

---

### FirestoreFieldIndexConfigIndexes <a name="FirestoreFieldIndexConfigIndexes" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/firestorefield"

&firestorefield.FirestoreFieldIndexConfigIndexes {
	ArrayConfig: *string,
	Order: *string,
	QueryScope: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexes.property.arrayConfig">ArrayConfig</a></code> | <code>*string</code> | Indicates that this field supports operations on arrayValues. Only one of 'order' and 'arrayConfig' can be specified. Possible values: ["CONTAINS"]. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexes.property.order">Order</a></code> | <code>*string</code> | Indicates that this field supports ordering by the specified order or comparing using =, <, <=, >, >=, !=. Only one of 'order' and 'arrayConfig' can be specified. Possible values: ["ASCENDING", "DESCENDING"]. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexes.property.queryScope">QueryScope</a></code> | <code>*string</code> | The scope at which a query is run. |

---

##### `ArrayConfig`<sup>Optional</sup> <a name="ArrayConfig" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexes.property.arrayConfig"></a>

```go
ArrayConfig *string
```

- *Type:* *string

Indicates that this field supports operations on arrayValues. Only one of 'order' and 'arrayConfig' can be specified. Possible values: ["CONTAINS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/firestore_field#array_config FirestoreField#array_config}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexes.property.order"></a>

```go
Order *string
```

- *Type:* *string

Indicates that this field supports ordering by the specified order or comparing using =, <, <=, >, >=, !=. Only one of 'order' and 'arrayConfig' can be specified. Possible values: ["ASCENDING", "DESCENDING"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/firestore_field#order FirestoreField#order}

---

##### `QueryScope`<sup>Optional</sup> <a name="QueryScope" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexes.property.queryScope"></a>

```go
QueryScope *string
```

- *Type:* *string

The scope at which a query is run.

Collection scoped queries require you specify
the collection at query time. Collection group scope allows queries across all
collections with the same id. Default value: "COLLECTION" Possible values: ["COLLECTION", "COLLECTION_GROUP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/firestore_field#query_scope FirestoreField#query_scope}

---

### FirestoreFieldTimeouts <a name="FirestoreFieldTimeouts" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/firestorefield"

&firestorefield.FirestoreFieldTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/firestore_field#create FirestoreField#create}. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/firestore_field#delete FirestoreField#delete}. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/firestore_field#update FirestoreField#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/firestore_field#create FirestoreField#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/firestore_field#delete FirestoreField#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/firestore_field#update FirestoreField#update}.

---

### FirestoreFieldTtlConfig <a name="FirestoreFieldTtlConfig" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/firestorefield"

&firestorefield.FirestoreFieldTtlConfig {

}
```


## Classes <a name="Classes" id="Classes"></a>

### FirestoreFieldIndexConfigIndexesList <a name="FirestoreFieldIndexConfigIndexesList" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/firestorefield"

firestorefield.NewFirestoreFieldIndexConfigIndexesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FirestoreFieldIndexConfigIndexesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList.get"></a>

```go
func Get(index *f64) FirestoreFieldIndexConfigIndexesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FirestoreFieldIndexConfigIndexesOutputReference <a name="FirestoreFieldIndexConfigIndexesOutputReference" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/firestorefield"

firestorefield.NewFirestoreFieldIndexConfigIndexesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FirestoreFieldIndexConfigIndexesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArrayConfig` <a name="ResetArrayConfig" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.resetArrayConfig"></a>

```go
func ResetArrayConfig()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.resetOrder"></a>

```go
func ResetOrder()
```

##### `ResetQueryScope` <a name="ResetQueryScope" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.resetQueryScope"></a>

```go
func ResetQueryScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.property.arrayConfigInput">ArrayConfigInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.property.orderInput">OrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.property.queryScopeInput">QueryScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.property.arrayConfig">ArrayConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.property.order">Order</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.property.queryScope">QueryScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArrayConfigInput`<sup>Optional</sup> <a name="ArrayConfigInput" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.property.arrayConfigInput"></a>

```go
func ArrayConfigInput() *string
```

- *Type:* *string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.property.orderInput"></a>

```go
func OrderInput() *string
```

- *Type:* *string

---

##### `QueryScopeInput`<sup>Optional</sup> <a name="QueryScopeInput" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.property.queryScopeInput"></a>

```go
func QueryScopeInput() *string
```

- *Type:* *string

---

##### `ArrayConfig`<sup>Required</sup> <a name="ArrayConfig" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.property.arrayConfig"></a>

```go
func ArrayConfig() *string
```

- *Type:* *string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.property.order"></a>

```go
func Order() *string
```

- *Type:* *string

---

##### `QueryScope`<sup>Required</sup> <a name="QueryScope" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.property.queryScope"></a>

```go
func QueryScope() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FirestoreFieldIndexConfigOutputReference <a name="FirestoreFieldIndexConfigOutputReference" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/firestorefield"

firestorefield.NewFirestoreFieldIndexConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FirestoreFieldIndexConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIndexes` <a name="PutIndexes" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.putIndexes"></a>

```go
func PutIndexes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.putIndexes.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetIndexes` <a name="ResetIndexes" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.resetIndexes"></a>

```go
func ResetIndexes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.property.indexes">Indexes</a></code> | <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList">FirestoreFieldIndexConfigIndexesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.property.indexesInput">IndexesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfig">FirestoreFieldIndexConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Indexes`<sup>Required</sup> <a name="Indexes" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.property.indexes"></a>

```go
func Indexes() FirestoreFieldIndexConfigIndexesList
```

- *Type:* <a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList">FirestoreFieldIndexConfigIndexesList</a>

---

##### `IndexesInput`<sup>Optional</sup> <a name="IndexesInput" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.property.indexesInput"></a>

```go
func IndexesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() FirestoreFieldIndexConfig
```

- *Type:* <a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfig">FirestoreFieldIndexConfig</a>

---


### FirestoreFieldTimeoutsOutputReference <a name="FirestoreFieldTimeoutsOutputReference" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/firestorefield"

firestorefield.NewFirestoreFieldTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FirestoreFieldTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FirestoreFieldTtlConfigOutputReference <a name="FirestoreFieldTtlConfigOutputReference" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/firestorefield"

firestorefield.NewFirestoreFieldTtlConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FirestoreFieldTtlConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfig">FirestoreFieldTtlConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() FirestoreFieldTtlConfig
```

- *Type:* <a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfig">FirestoreFieldTtlConfig</a>

---



