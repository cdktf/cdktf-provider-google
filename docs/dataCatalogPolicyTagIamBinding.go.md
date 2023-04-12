# `dataCatalogPolicyTagIamBinding` Submodule <a name="`dataCatalogPolicyTagIamBinding` Submodule" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCatalogPolicyTagIamBinding <a name="DataCatalogPolicyTagIamBinding" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/data_catalog_policy_tag_iam_binding google_data_catalog_policy_tag_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogpolicytagiambinding"

datacatalogpolicytagiambinding.NewDataCatalogPolicyTagIamBinding(scope Construct, id *string, config DataCatalogPolicyTagIamBindingConfig) DataCatalogPolicyTagIamBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig">DataCatalogPolicyTagIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig">DataCatalogPolicyTagIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.putCondition"></a>

```go
func PutCondition(value DataCatalogPolicyTagIamBindingCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingCondition">DataCatalogPolicyTagIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogpolicytagiambinding"

datacatalogpolicytagiambinding.DataCatalogPolicyTagIamBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogpolicytagiambinding"

datacatalogpolicytagiambinding.DataCatalogPolicyTagIamBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogpolicytagiambinding"

datacatalogpolicytagiambinding.DataCatalogPolicyTagIamBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference">DataCatalogPolicyTagIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingCondition">DataCatalogPolicyTagIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.membersInput">MembersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.policyTagInput">PolicyTagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.members">Members</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.policyTag">PolicyTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.condition"></a>

```go
func Condition() DataCatalogPolicyTagIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference">DataCatalogPolicyTagIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.conditionInput"></a>

```go
func ConditionInput() DataCatalogPolicyTagIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingCondition">DataCatalogPolicyTagIamBindingCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.membersInput"></a>

```go
func MembersInput() *[]*string
```

- *Type:* *[]*string

---

##### `PolicyTagInput`<sup>Optional</sup> <a name="PolicyTagInput" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.policyTagInput"></a>

```go
func PolicyTagInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.members"></a>

```go
func Members() *[]*string
```

- *Type:* *[]*string

---

##### `PolicyTag`<sup>Required</sup> <a name="PolicyTag" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.policyTag"></a>

```go
func PolicyTag() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCatalogPolicyTagIamBindingCondition <a name="DataCatalogPolicyTagIamBindingCondition" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogpolicytagiambinding"

&datacatalogpolicytagiambinding.DataCatalogPolicyTagIamBindingCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_policy_tag_iam_binding#expression DataCatalogPolicyTagIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_policy_tag_iam_binding#title DataCatalogPolicyTagIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_policy_tag_iam_binding#description DataCatalogPolicyTagIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_policy_tag_iam_binding#expression DataCatalogPolicyTagIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_policy_tag_iam_binding#title DataCatalogPolicyTagIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_policy_tag_iam_binding#description DataCatalogPolicyTagIamBinding#description}.

---

### DataCatalogPolicyTagIamBindingConfig <a name="DataCatalogPolicyTagIamBindingConfig" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogpolicytagiambinding"

&datacatalogpolicytagiambinding.DataCatalogPolicyTagIamBindingConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Members: *[]*string,
	PolicyTag: *string,
	Role: *string,
	Condition: github.com/cdktf/cdktf-provider-google-go/google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingCondition,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.property.members">Members</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_policy_tag_iam_binding#members DataCatalogPolicyTagIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.property.policyTag">PolicyTag</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_policy_tag_iam_binding#policy_tag DataCatalogPolicyTagIamBinding#policy_tag}. |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_policy_tag_iam_binding#role DataCatalogPolicyTagIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingCondition">DataCatalogPolicyTagIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_policy_tag_iam_binding#id DataCatalogPolicyTagIamBinding#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.property.members"></a>

```go
Members *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_policy_tag_iam_binding#members DataCatalogPolicyTagIamBinding#members}.

---

##### `PolicyTag`<sup>Required</sup> <a name="PolicyTag" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.property.policyTag"></a>

```go
PolicyTag *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_policy_tag_iam_binding#policy_tag DataCatalogPolicyTagIamBinding#policy_tag}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_policy_tag_iam_binding#role DataCatalogPolicyTagIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.property.condition"></a>

```go
Condition DataCatalogPolicyTagIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingCondition">DataCatalogPolicyTagIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_policy_tag_iam_binding#condition DataCatalogPolicyTagIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_policy_tag_iam_binding#id DataCatalogPolicyTagIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataCatalogPolicyTagIamBindingConditionOutputReference <a name="DataCatalogPolicyTagIamBindingConditionOutputReference" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogpolicytagiambinding"

datacatalogpolicytagiambinding.NewDataCatalogPolicyTagIamBindingConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCatalogPolicyTagIamBindingConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingCondition">DataCatalogPolicyTagIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCatalogPolicyTagIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingCondition">DataCatalogPolicyTagIamBindingCondition</a>

---



