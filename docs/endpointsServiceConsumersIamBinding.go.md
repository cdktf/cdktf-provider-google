# `endpointsServiceConsumersIamBinding` Submodule <a name="`endpointsServiceConsumersIamBinding` Submodule" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EndpointsServiceConsumersIamBinding <a name="EndpointsServiceConsumersIamBinding" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/endpoints_service_consumers_iam_binding google_endpoints_service_consumers_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/endpointsserviceconsumersiambinding"

endpointsserviceconsumersiambinding.NewEndpointsServiceConsumersIamBinding(scope Construct, id *string, config EndpointsServiceConsumersIamBindingConfig) EndpointsServiceConsumersIamBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig">EndpointsServiceConsumersIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig">EndpointsServiceConsumersIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.putCondition"></a>

```go
func PutCondition(value EndpointsServiceConsumersIamBindingCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingCondition">EndpointsServiceConsumersIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/endpointsserviceconsumersiambinding"

endpointsserviceconsumersiambinding.EndpointsServiceConsumersIamBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/endpointsserviceconsumersiambinding"

endpointsserviceconsumersiambinding.EndpointsServiceConsumersIamBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/endpointsserviceconsumersiambinding"

endpointsserviceconsumersiambinding.EndpointsServiceConsumersIamBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference">EndpointsServiceConsumersIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingCondition">EndpointsServiceConsumersIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.consumerProjectInput">ConsumerProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.membersInput">MembersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.serviceNameInput">ServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.consumerProject">ConsumerProject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.members">Members</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.condition"></a>

```go
func Condition() EndpointsServiceConsumersIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference">EndpointsServiceConsumersIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.conditionInput"></a>

```go
func ConditionInput() EndpointsServiceConsumersIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingCondition">EndpointsServiceConsumersIamBindingCondition</a>

---

##### `ConsumerProjectInput`<sup>Optional</sup> <a name="ConsumerProjectInput" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.consumerProjectInput"></a>

```go
func ConsumerProjectInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.membersInput"></a>

```go
func MembersInput() *[]*string
```

- *Type:* *[]*string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.serviceNameInput"></a>

```go
func ServiceNameInput() *string
```

- *Type:* *string

---

##### `ConsumerProject`<sup>Required</sup> <a name="ConsumerProject" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.consumerProject"></a>

```go
func ConsumerProject() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.members"></a>

```go
func Members() *[]*string
```

- *Type:* *[]*string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EndpointsServiceConsumersIamBindingCondition <a name="EndpointsServiceConsumersIamBindingCondition" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/endpointsserviceconsumersiambinding"

&endpointsserviceconsumersiambinding.EndpointsServiceConsumersIamBindingCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/endpoints_service_consumers_iam_binding#expression EndpointsServiceConsumersIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/endpoints_service_consumers_iam_binding#title EndpointsServiceConsumersIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/endpoints_service_consumers_iam_binding#description EndpointsServiceConsumersIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/endpoints_service_consumers_iam_binding#expression EndpointsServiceConsumersIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/endpoints_service_consumers_iam_binding#title EndpointsServiceConsumersIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/endpoints_service_consumers_iam_binding#description EndpointsServiceConsumersIamBinding#description}.

---

### EndpointsServiceConsumersIamBindingConfig <a name="EndpointsServiceConsumersIamBindingConfig" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/endpointsserviceconsumersiambinding"

&endpointsserviceconsumersiambinding.EndpointsServiceConsumersIamBindingConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ConsumerProject: *string,
	Members: *[]*string,
	Role: *string,
	ServiceName: *string,
	Condition: github.com/cdktf/cdktf-provider-google-go/google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingCondition,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.consumerProject">ConsumerProject</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/endpoints_service_consumers_iam_binding#consumer_project EndpointsServiceConsumersIamBinding#consumer_project}. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.members">Members</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/endpoints_service_consumers_iam_binding#members EndpointsServiceConsumersIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/endpoints_service_consumers_iam_binding#role EndpointsServiceConsumersIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.serviceName">ServiceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/endpoints_service_consumers_iam_binding#service_name EndpointsServiceConsumersIamBinding#service_name}. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingCondition">EndpointsServiceConsumersIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/endpoints_service_consumers_iam_binding#id EndpointsServiceConsumersIamBinding#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConsumerProject`<sup>Required</sup> <a name="ConsumerProject" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.consumerProject"></a>

```go
ConsumerProject *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/endpoints_service_consumers_iam_binding#consumer_project EndpointsServiceConsumersIamBinding#consumer_project}.

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.members"></a>

```go
Members *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/endpoints_service_consumers_iam_binding#members EndpointsServiceConsumersIamBinding#members}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/endpoints_service_consumers_iam_binding#role EndpointsServiceConsumersIamBinding#role}.

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.serviceName"></a>

```go
ServiceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/endpoints_service_consumers_iam_binding#service_name EndpointsServiceConsumersIamBinding#service_name}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.condition"></a>

```go
Condition EndpointsServiceConsumersIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingCondition">EndpointsServiceConsumersIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/endpoints_service_consumers_iam_binding#condition EndpointsServiceConsumersIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/endpoints_service_consumers_iam_binding#id EndpointsServiceConsumersIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### EndpointsServiceConsumersIamBindingConditionOutputReference <a name="EndpointsServiceConsumersIamBindingConditionOutputReference" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/endpointsserviceconsumersiambinding"

endpointsserviceconsumersiambinding.NewEndpointsServiceConsumersIamBindingConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EndpointsServiceConsumersIamBindingConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingCondition">EndpointsServiceConsumersIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() EndpointsServiceConsumersIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingCondition">EndpointsServiceConsumersIamBindingCondition</a>

---



