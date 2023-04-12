# `cloudfunctionsFunctionIamBinding` Submodule <a name="`cloudfunctionsFunctionIamBinding` Submodule" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfunctionsFunctionIamBinding <a name="CloudfunctionsFunctionIamBinding" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function_iam_binding google_cloudfunctions_function_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctionsfunctioniambinding"

cloudfunctionsfunctioniambinding.NewCloudfunctionsFunctionIamBinding(scope Construct, id *string, config CloudfunctionsFunctionIamBindingConfig) CloudfunctionsFunctionIamBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConfig">CloudfunctionsFunctionIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConfig">CloudfunctionsFunctionIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.putCondition"></a>

```go
func PutCondition(value CloudfunctionsFunctionIamBindingCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingCondition">CloudfunctionsFunctionIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctionsfunctioniambinding"

cloudfunctionsfunctioniambinding.CloudfunctionsFunctionIamBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctionsfunctioniambinding"

cloudfunctionsfunctioniambinding.CloudfunctionsFunctionIamBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctionsfunctioniambinding"

cloudfunctionsfunctioniambinding.CloudfunctionsFunctionIamBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference">CloudfunctionsFunctionIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.cloudFunctionInput">CloudFunctionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingCondition">CloudfunctionsFunctionIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.membersInput">MembersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.cloudFunction">CloudFunction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.members">Members</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.condition"></a>

```go
func Condition() CloudfunctionsFunctionIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference">CloudfunctionsFunctionIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `CloudFunctionInput`<sup>Optional</sup> <a name="CloudFunctionInput" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.cloudFunctionInput"></a>

```go
func CloudFunctionInput() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.conditionInput"></a>

```go
func ConditionInput() CloudfunctionsFunctionIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingCondition">CloudfunctionsFunctionIamBindingCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.membersInput"></a>

```go
func MembersInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `CloudFunction`<sup>Required</sup> <a name="CloudFunction" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.cloudFunction"></a>

```go
func CloudFunction() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.members"></a>

```go
func Members() *[]*string
```

- *Type:* *[]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfunctionsFunctionIamBindingCondition <a name="CloudfunctionsFunctionIamBindingCondition" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctionsfunctioniambinding"

&cloudfunctionsfunctioniambinding.CloudfunctionsFunctionIamBindingCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function_iam_binding#expression CloudfunctionsFunctionIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function_iam_binding#title CloudfunctionsFunctionIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function_iam_binding#description CloudfunctionsFunctionIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function_iam_binding#expression CloudfunctionsFunctionIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function_iam_binding#title CloudfunctionsFunctionIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function_iam_binding#description CloudfunctionsFunctionIamBinding#description}.

---

### CloudfunctionsFunctionIamBindingConfig <a name="CloudfunctionsFunctionIamBindingConfig" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctionsfunctioniambinding"

&cloudfunctionsfunctioniambinding.CloudfunctionsFunctionIamBindingConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CloudFunction: *string,
	Members: *[]*string,
	Role: *string,
	Condition: github.com/cdktf/cdktf-provider-google-go/google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingCondition,
	Id: *string,
	Project: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConfig.property.cloudFunction">CloudFunction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function_iam_binding#cloud_function CloudfunctionsFunctionIamBinding#cloud_function}. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConfig.property.members">Members</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function_iam_binding#members CloudfunctionsFunctionIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function_iam_binding#role CloudfunctionsFunctionIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingCondition">CloudfunctionsFunctionIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function_iam_binding#id CloudfunctionsFunctionIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function_iam_binding#project CloudfunctionsFunctionIamBinding#project}. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function_iam_binding#region CloudfunctionsFunctionIamBinding#region}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CloudFunction`<sup>Required</sup> <a name="CloudFunction" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConfig.property.cloudFunction"></a>

```go
CloudFunction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function_iam_binding#cloud_function CloudfunctionsFunctionIamBinding#cloud_function}.

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConfig.property.members"></a>

```go
Members *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function_iam_binding#members CloudfunctionsFunctionIamBinding#members}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function_iam_binding#role CloudfunctionsFunctionIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConfig.property.condition"></a>

```go
Condition CloudfunctionsFunctionIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingCondition">CloudfunctionsFunctionIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function_iam_binding#condition CloudfunctionsFunctionIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function_iam_binding#id CloudfunctionsFunctionIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function_iam_binding#project CloudfunctionsFunctionIamBinding#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function_iam_binding#region CloudfunctionsFunctionIamBinding#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfunctionsFunctionIamBindingConditionOutputReference <a name="CloudfunctionsFunctionIamBindingConditionOutputReference" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctionsfunctioniambinding"

cloudfunctionsfunctioniambinding.NewCloudfunctionsFunctionIamBindingConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfunctionsFunctionIamBindingConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingCondition">CloudfunctionsFunctionIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudfunctionsFunctionIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunctionIamBinding.CloudfunctionsFunctionIamBindingCondition">CloudfunctionsFunctionIamBindingCondition</a>

---



