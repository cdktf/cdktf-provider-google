# `containerAzureNodePool` Submodule <a name="`containerAzureNodePool` Submodule" id="@cdktf/provider-google.containerAzureNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerAzureNodePool <a name="ContainerAzureNodePool" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool google_container_azure_node_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerazurenodepool"

containerazurenodepool.NewContainerAzureNodePool(scope Construct, id *string, config ContainerAzureNodePoolConfig) ContainerAzureNodePool
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig">ContainerAzureNodePoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig">ContainerAzureNodePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.putAutoscaling">PutAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.putMaxPodsConstraint">PutMaxPodsConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.resetAzureAvailabilityZone">ResetAzureAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAutoscaling` <a name="PutAutoscaling" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.putAutoscaling"></a>

```go
func PutAutoscaling(value ContainerAzureNodePoolAutoscaling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.putAutoscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscaling">ContainerAzureNodePoolAutoscaling</a>

---

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.putConfig"></a>

```go
func PutConfig(value ContainerAzureNodePoolConfigA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigA">ContainerAzureNodePoolConfigA</a>

---

##### `PutMaxPodsConstraint` <a name="PutMaxPodsConstraint" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.putMaxPodsConstraint"></a>

```go
func PutMaxPodsConstraint(value ContainerAzureNodePoolMaxPodsConstraint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.putMaxPodsConstraint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraint">ContainerAzureNodePoolMaxPodsConstraint</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.putTimeouts"></a>

```go
func PutTimeouts(value ContainerAzureNodePoolTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeouts">ContainerAzureNodePoolTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetAzureAvailabilityZone` <a name="ResetAzureAvailabilityZone" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.resetAzureAvailabilityZone"></a>

```go
func ResetAzureAvailabilityZone()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerazurenodepool"

containerazurenodepool.ContainerAzureNodePool_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerazurenodepool"

containerazurenodepool.ContainerAzureNodePool_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerazurenodepool"

containerazurenodepool.ContainerAzureNodePool_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.autoscaling">Autoscaling</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference">ContainerAzureNodePoolAutoscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference">ContainerAzureNodePoolConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.maxPodsConstraint">MaxPodsConstraint</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference">ContainerAzureNodePoolMaxPodsConstraintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.reconciling">Reconciling</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference">ContainerAzureNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.autoscalingInput">AutoscalingInput</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscaling">ContainerAzureNodePoolAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.azureAvailabilityZoneInput">AzureAvailabilityZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.clusterInput">ClusterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigA">ContainerAzureNodePoolConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.maxPodsConstraintInput">MaxPodsConstraintInput</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraint">ContainerAzureNodePoolMaxPodsConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.azureAvailabilityZone">AzureAvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.cluster">Cluster</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.version">Version</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Autoscaling`<sup>Required</sup> <a name="Autoscaling" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.autoscaling"></a>

```go
func Autoscaling() ContainerAzureNodePoolAutoscalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference">ContainerAzureNodePoolAutoscalingOutputReference</a>

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.config"></a>

```go
func Config() ContainerAzureNodePoolConfigAOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference">ContainerAzureNodePoolConfigAOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `MaxPodsConstraint`<sup>Required</sup> <a name="MaxPodsConstraint" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.maxPodsConstraint"></a>

```go
func MaxPodsConstraint() ContainerAzureNodePoolMaxPodsConstraintOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference">ContainerAzureNodePoolMaxPodsConstraintOutputReference</a>

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.reconciling"></a>

```go
func Reconciling() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.timeouts"></a>

```go
func Timeouts() ContainerAzureNodePoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference">ContainerAzureNodePoolTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AutoscalingInput`<sup>Optional</sup> <a name="AutoscalingInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.autoscalingInput"></a>

```go
func AutoscalingInput() ContainerAzureNodePoolAutoscaling
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscaling">ContainerAzureNodePoolAutoscaling</a>

---

##### `AzureAvailabilityZoneInput`<sup>Optional</sup> <a name="AzureAvailabilityZoneInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.azureAvailabilityZoneInput"></a>

```go
func AzureAvailabilityZoneInput() *string
```

- *Type:* *string

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.clusterInput"></a>

```go
func ClusterInput() *string
```

- *Type:* *string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.configInput"></a>

```go
func ConfigInput() ContainerAzureNodePoolConfigA
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigA">ContainerAzureNodePoolConfigA</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MaxPodsConstraintInput`<sup>Optional</sup> <a name="MaxPodsConstraintInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.maxPodsConstraintInput"></a>

```go
func MaxPodsConstraintInput() ContainerAzureNodePoolMaxPodsConstraint
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraint">ContainerAzureNodePoolMaxPodsConstraint</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AzureAvailabilityZone`<sup>Required</sup> <a name="AzureAvailabilityZone" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.azureAvailabilityZone"></a>

```go
func AzureAvailabilityZone() *string
```

- *Type:* *string

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.cluster"></a>

```go
func Cluster() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePool.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerAzureNodePoolAutoscaling <a name="ContainerAzureNodePoolAutoscaling" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscaling.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerazurenodepool"

&containerazurenodepool.ContainerAzureNodePoolAutoscaling {
	MaxNodeCount: *f64,
	MinNodeCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscaling.property.maxNodeCount">MaxNodeCount</a></code> | <code>*f64</code> | Maximum number of nodes in the node pool. Must be >= min_node_count. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscaling.property.minNodeCount">MinNodeCount</a></code> | <code>*f64</code> | Minimum number of nodes in the node pool. Must be >= 1 and <= max_node_count. |

---

##### `MaxNodeCount`<sup>Required</sup> <a name="MaxNodeCount" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscaling.property.maxNodeCount"></a>

```go
MaxNodeCount *f64
```

- *Type:* *f64

Maximum number of nodes in the node pool. Must be >= min_node_count.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#max_node_count ContainerAzureNodePool#max_node_count}

---

##### `MinNodeCount`<sup>Required</sup> <a name="MinNodeCount" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscaling.property.minNodeCount"></a>

```go
MinNodeCount *f64
```

- *Type:* *f64

Minimum number of nodes in the node pool. Must be >= 1 and <= max_node_count.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#min_node_count ContainerAzureNodePool#min_node_count}

---

### ContainerAzureNodePoolConfig <a name="ContainerAzureNodePoolConfig" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerazurenodepool"

&containerazurenodepool.ContainerAzureNodePoolConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Autoscaling: github.com/cdktf/cdktf-provider-google-go/google.containerAzureNodePool.ContainerAzureNodePoolAutoscaling,
	Cluster: *string,
	Config: github.com/cdktf/cdktf-provider-google-go/google.containerAzureNodePool.ContainerAzureNodePoolConfigA,
	Location: *string,
	MaxPodsConstraint: github.com/cdktf/cdktf-provider-google-go/google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraint,
	Name: *string,
	SubnetId: *string,
	Version: *string,
	Annotations: *map[string]*string,
	AzureAvailabilityZone: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.containerAzureNodePool.ContainerAzureNodePoolTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.autoscaling">Autoscaling</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscaling">ContainerAzureNodePoolAutoscaling</a></code> | autoscaling block. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.cluster">Cluster</a></code> | <code>*string</code> | The azureCluster for the resource. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigA">ContainerAzureNodePoolConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.location">Location</a></code> | <code>*string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.maxPodsConstraint">MaxPodsConstraint</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraint">ContainerAzureNodePoolMaxPodsConstraint</a></code> | max_pods_constraint block. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.name">Name</a></code> | <code>*string</code> | The name of this resource. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.subnetId">SubnetId</a></code> | <code>*string</code> | The ARM ID of the subnet where the node pool VMs run. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.version">Version</a></code> | <code>*string</code> | The Kubernetes version (e.g. `1.19.10-gke.1000`) running on this node pool. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.azureAvailabilityZone">AzureAvailabilityZone</a></code> | <code>*string</code> | Optional. The Azure availability zone of the nodes in this nodepool. When unspecified, it defaults to `1`. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#id ContainerAzureNodePool#id}. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.project">Project</a></code> | <code>*string</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeouts">ContainerAzureNodePoolTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Autoscaling`<sup>Required</sup> <a name="Autoscaling" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.autoscaling"></a>

```go
Autoscaling ContainerAzureNodePoolAutoscaling
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscaling">ContainerAzureNodePoolAutoscaling</a>

autoscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#autoscaling ContainerAzureNodePool#autoscaling}

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.cluster"></a>

```go
Cluster *string
```

- *Type:* *string

The azureCluster for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#cluster ContainerAzureNodePool#cluster}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.config"></a>

```go
Config ContainerAzureNodePoolConfigA
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigA">ContainerAzureNodePoolConfigA</a>

config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#config ContainerAzureNodePool#config}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#location ContainerAzureNodePool#location}

---

##### `MaxPodsConstraint`<sup>Required</sup> <a name="MaxPodsConstraint" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.maxPodsConstraint"></a>

```go
MaxPodsConstraint ContainerAzureNodePoolMaxPodsConstraint
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraint">ContainerAzureNodePoolMaxPodsConstraint</a>

max_pods_constraint block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#max_pods_constraint ContainerAzureNodePool#max_pods_constraint}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of this resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#name ContainerAzureNodePool#name}

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

The ARM ID of the subnet where the node pool VMs run.

Make sure it's a subnet under the virtual network in the cluster configuration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#subnet_id ContainerAzureNodePool#subnet_id}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

The Kubernetes version (e.g. `1.19.10-gke.1000`) running on this node pool.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#version ContainerAzureNodePool#version}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Optional.

Annotations on the node pool. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Keys can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#annotations ContainerAzureNodePool#annotations}

---

##### `AzureAvailabilityZone`<sup>Optional</sup> <a name="AzureAvailabilityZone" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.azureAvailabilityZone"></a>

```go
AzureAvailabilityZone *string
```

- *Type:* *string

Optional. The Azure availability zone of the nodes in this nodepool. When unspecified, it defaults to `1`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#azure_availability_zone ContainerAzureNodePool#azure_availability_zone}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#id ContainerAzureNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The project for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#project ContainerAzureNodePool#project}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfig.property.timeouts"></a>

```go
Timeouts ContainerAzureNodePoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeouts">ContainerAzureNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#timeouts ContainerAzureNodePool#timeouts}

---

### ContainerAzureNodePoolConfigA <a name="ContainerAzureNodePoolConfigA" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerazurenodepool"

&containerazurenodepool.ContainerAzureNodePoolConfigA {
	SshConfig: github.com/cdktf/cdktf-provider-google-go/google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfig,
	ProxyConfig: github.com/cdktf/cdktf-provider-google-go/google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfig,
	RootVolume: github.com/cdktf/cdktf-provider-google-go/google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolume,
	Tags: *map[string]*string,
	VmSize: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigA.property.sshConfig">SshConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfig">ContainerAzureNodePoolConfigSshConfig</a></code> | ssh_config block. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigA.property.proxyConfig">ProxyConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfig">ContainerAzureNodePoolConfigProxyConfig</a></code> | proxy_config block. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigA.property.rootVolume">RootVolume</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolume">ContainerAzureNodePoolConfigRootVolume</a></code> | root_volume block. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigA.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigA.property.vmSize">VmSize</a></code> | <code>*string</code> | Optional. The Azure VM size name. Example: `Standard_DS2_v2`. See (/anthos/clusters/docs/azure/reference/supported-vms) for options. When unspecified, it defaults to `Standard_DS2_v2`. |

---

##### `SshConfig`<sup>Required</sup> <a name="SshConfig" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigA.property.sshConfig"></a>

```go
SshConfig ContainerAzureNodePoolConfigSshConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfig">ContainerAzureNodePoolConfigSshConfig</a>

ssh_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#ssh_config ContainerAzureNodePool#ssh_config}

---

##### `ProxyConfig`<sup>Optional</sup> <a name="ProxyConfig" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigA.property.proxyConfig"></a>

```go
ProxyConfig ContainerAzureNodePoolConfigProxyConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfig">ContainerAzureNodePoolConfigProxyConfig</a>

proxy_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#proxy_config ContainerAzureNodePool#proxy_config}

---

##### `RootVolume`<sup>Optional</sup> <a name="RootVolume" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigA.property.rootVolume"></a>

```go
RootVolume ContainerAzureNodePoolConfigRootVolume
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolume">ContainerAzureNodePoolConfigRootVolume</a>

root_volume block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#root_volume ContainerAzureNodePool#root_volume}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigA.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Optional.

A set of tags to apply to all underlying Azure resources for this node pool. This currently only includes Virtual Machine Scale Sets. Specify at most 50 pairs containing alphanumerics, spaces, and symbols (.+-=_:@/). Keys can be up to 127 Unicode characters. Values can be up to 255 Unicode characters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#tags ContainerAzureNodePool#tags}

---

##### `VmSize`<sup>Optional</sup> <a name="VmSize" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigA.property.vmSize"></a>

```go
VmSize *string
```

- *Type:* *string

Optional. The Azure VM size name. Example: `Standard_DS2_v2`. See (/anthos/clusters/docs/azure/reference/supported-vms) for options. When unspecified, it defaults to `Standard_DS2_v2`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#vm_size ContainerAzureNodePool#vm_size}

---

### ContainerAzureNodePoolConfigProxyConfig <a name="ContainerAzureNodePoolConfigProxyConfig" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerazurenodepool"

&containerazurenodepool.ContainerAzureNodePoolConfigProxyConfig {
	ResourceGroupId: *string,
	SecretId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfig.property.resourceGroupId">ResourceGroupId</a></code> | <code>*string</code> | The ARM ID the of the resource group containing proxy keyvault. Resource group ids are formatted as `/subscriptions/<subscription-id>/resourceGroups/<resource-group-name>`. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfig.property.secretId">SecretId</a></code> | <code>*string</code> | The URL the of the proxy setting secret with its version. Secret ids are formatted as `https:<key-vault-name>.vault.azure.net/secrets/<secret-name>/<secret-version>`. |

---

##### `ResourceGroupId`<sup>Required</sup> <a name="ResourceGroupId" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfig.property.resourceGroupId"></a>

```go
ResourceGroupId *string
```

- *Type:* *string

The ARM ID the of the resource group containing proxy keyvault. Resource group ids are formatted as `/subscriptions/<subscription-id>/resourceGroups/<resource-group-name>`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#resource_group_id ContainerAzureNodePool#resource_group_id}

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfig.property.secretId"></a>

```go
SecretId *string
```

- *Type:* *string

The URL the of the proxy setting secret with its version. Secret ids are formatted as `https:<key-vault-name>.vault.azure.net/secrets/<secret-name>/<secret-version>`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#secret_id ContainerAzureNodePool#secret_id}

---

### ContainerAzureNodePoolConfigRootVolume <a name="ContainerAzureNodePoolConfigRootVolume" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolume.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerazurenodepool"

&containerazurenodepool.ContainerAzureNodePoolConfigRootVolume {
	SizeGib: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolume.property.sizeGib">SizeGib</a></code> | <code>*f64</code> | Optional. |

---

##### `SizeGib`<sup>Optional</sup> <a name="SizeGib" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolume.property.sizeGib"></a>

```go
SizeGib *f64
```

- *Type:* *f64

Optional.

The size of the disk, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#size_gib ContainerAzureNodePool#size_gib}

---

### ContainerAzureNodePoolConfigSshConfig <a name="ContainerAzureNodePoolConfigSshConfig" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerazurenodepool"

&containerazurenodepool.ContainerAzureNodePoolConfigSshConfig {
	AuthorizedKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfig.property.authorizedKey">AuthorizedKey</a></code> | <code>*string</code> | The SSH public key data for VMs managed by Anthos. |

---

##### `AuthorizedKey`<sup>Required</sup> <a name="AuthorizedKey" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfig.property.authorizedKey"></a>

```go
AuthorizedKey *string
```

- *Type:* *string

The SSH public key data for VMs managed by Anthos.

This accepts the authorized_keys file format used in OpenSSH according to the sshd(8) manual page.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#authorized_key ContainerAzureNodePool#authorized_key}

---

### ContainerAzureNodePoolMaxPodsConstraint <a name="ContainerAzureNodePoolMaxPodsConstraint" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerazurenodepool"

&containerazurenodepool.ContainerAzureNodePoolMaxPodsConstraint {
	MaxPodsPerNode: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraint.property.maxPodsPerNode">MaxPodsPerNode</a></code> | <code>*f64</code> | The maximum number of pods to schedule on a single node. |

---

##### `MaxPodsPerNode`<sup>Required</sup> <a name="MaxPodsPerNode" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraint.property.maxPodsPerNode"></a>

```go
MaxPodsPerNode *f64
```

- *Type:* *f64

The maximum number of pods to schedule on a single node.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#max_pods_per_node ContainerAzureNodePool#max_pods_per_node}

---

### ContainerAzureNodePoolTimeouts <a name="ContainerAzureNodePoolTimeouts" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerazurenodepool"

&containerazurenodepool.ContainerAzureNodePoolTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#create ContainerAzureNodePool#create}. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#delete ContainerAzureNodePool#delete}. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#update ContainerAzureNodePool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#create ContainerAzureNodePool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#delete ContainerAzureNodePool#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#update ContainerAzureNodePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerAzureNodePoolAutoscalingOutputReference <a name="ContainerAzureNodePoolAutoscalingOutputReference" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerazurenodepool"

containerazurenodepool.NewContainerAzureNodePoolAutoscalingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerAzureNodePoolAutoscalingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.property.maxNodeCountInput">MaxNodeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.property.minNodeCountInput">MinNodeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.property.maxNodeCount">MaxNodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.property.minNodeCount">MinNodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscaling">ContainerAzureNodePoolAutoscaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxNodeCountInput`<sup>Optional</sup> <a name="MaxNodeCountInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.property.maxNodeCountInput"></a>

```go
func MaxNodeCountInput() *f64
```

- *Type:* *f64

---

##### `MinNodeCountInput`<sup>Optional</sup> <a name="MinNodeCountInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.property.minNodeCountInput"></a>

```go
func MinNodeCountInput() *f64
```

- *Type:* *f64

---

##### `MaxNodeCount`<sup>Required</sup> <a name="MaxNodeCount" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.property.maxNodeCount"></a>

```go
func MaxNodeCount() *f64
```

- *Type:* *f64

---

##### `MinNodeCount`<sup>Required</sup> <a name="MinNodeCount" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.property.minNodeCount"></a>

```go
func MinNodeCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscalingOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerAzureNodePoolAutoscaling
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolAutoscaling">ContainerAzureNodePoolAutoscaling</a>

---


### ContainerAzureNodePoolConfigAOutputReference <a name="ContainerAzureNodePoolConfigAOutputReference" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerazurenodepool"

containerazurenodepool.NewContainerAzureNodePoolConfigAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerAzureNodePoolConfigAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.putProxyConfig">PutProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.putRootVolume">PutRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.putSshConfig">PutSshConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.resetProxyConfig">ResetProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.resetRootVolume">ResetRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.resetVmSize">ResetVmSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProxyConfig` <a name="PutProxyConfig" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.putProxyConfig"></a>

```go
func PutProxyConfig(value ContainerAzureNodePoolConfigProxyConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.putProxyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfig">ContainerAzureNodePoolConfigProxyConfig</a>

---

##### `PutRootVolume` <a name="PutRootVolume" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.putRootVolume"></a>

```go
func PutRootVolume(value ContainerAzureNodePoolConfigRootVolume)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.putRootVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolume">ContainerAzureNodePoolConfigRootVolume</a>

---

##### `PutSshConfig` <a name="PutSshConfig" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.putSshConfig"></a>

```go
func PutSshConfig(value ContainerAzureNodePoolConfigSshConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.putSshConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfig">ContainerAzureNodePoolConfigSshConfig</a>

---

##### `ResetProxyConfig` <a name="ResetProxyConfig" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.resetProxyConfig"></a>

```go
func ResetProxyConfig()
```

##### `ResetRootVolume` <a name="ResetRootVolume" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.resetRootVolume"></a>

```go
func ResetRootVolume()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.resetTags"></a>

```go
func ResetTags()
```

##### `ResetVmSize` <a name="ResetVmSize" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.resetVmSize"></a>

```go
func ResetVmSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.proxyConfig">ProxyConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference">ContainerAzureNodePoolConfigProxyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.rootVolume">RootVolume</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference">ContainerAzureNodePoolConfigRootVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.sshConfig">SshConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference">ContainerAzureNodePoolConfigSshConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.proxyConfigInput">ProxyConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfig">ContainerAzureNodePoolConfigProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.rootVolumeInput">RootVolumeInput</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolume">ContainerAzureNodePoolConfigRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.sshConfigInput">SshConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfig">ContainerAzureNodePoolConfigSshConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.vmSizeInput">VmSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.vmSize">VmSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigA">ContainerAzureNodePoolConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProxyConfig`<sup>Required</sup> <a name="ProxyConfig" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.proxyConfig"></a>

```go
func ProxyConfig() ContainerAzureNodePoolConfigProxyConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference">ContainerAzureNodePoolConfigProxyConfigOutputReference</a>

---

##### `RootVolume`<sup>Required</sup> <a name="RootVolume" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.rootVolume"></a>

```go
func RootVolume() ContainerAzureNodePoolConfigRootVolumeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference">ContainerAzureNodePoolConfigRootVolumeOutputReference</a>

---

##### `SshConfig`<sup>Required</sup> <a name="SshConfig" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.sshConfig"></a>

```go
func SshConfig() ContainerAzureNodePoolConfigSshConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference">ContainerAzureNodePoolConfigSshConfigOutputReference</a>

---

##### `ProxyConfigInput`<sup>Optional</sup> <a name="ProxyConfigInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.proxyConfigInput"></a>

```go
func ProxyConfigInput() ContainerAzureNodePoolConfigProxyConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfig">ContainerAzureNodePoolConfigProxyConfig</a>

---

##### `RootVolumeInput`<sup>Optional</sup> <a name="RootVolumeInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.rootVolumeInput"></a>

```go
func RootVolumeInput() ContainerAzureNodePoolConfigRootVolume
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolume">ContainerAzureNodePoolConfigRootVolume</a>

---

##### `SshConfigInput`<sup>Optional</sup> <a name="SshConfigInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.sshConfigInput"></a>

```go
func SshConfigInput() ContainerAzureNodePoolConfigSshConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfig">ContainerAzureNodePoolConfigSshConfig</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VmSizeInput`<sup>Optional</sup> <a name="VmSizeInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.vmSizeInput"></a>

```go
func VmSizeInput() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.vmSize"></a>

```go
func VmSize() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigAOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerAzureNodePoolConfigA
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigA">ContainerAzureNodePoolConfigA</a>

---


### ContainerAzureNodePoolConfigProxyConfigOutputReference <a name="ContainerAzureNodePoolConfigProxyConfigOutputReference" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerazurenodepool"

containerazurenodepool.NewContainerAzureNodePoolConfigProxyConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerAzureNodePoolConfigProxyConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.property.resourceGroupIdInput">ResourceGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.property.secretIdInput">SecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.property.resourceGroupId">ResourceGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.property.secretId">SecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfig">ContainerAzureNodePoolConfigProxyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceGroupIdInput`<sup>Optional</sup> <a name="ResourceGroupIdInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.property.resourceGroupIdInput"></a>

```go
func ResourceGroupIdInput() *string
```

- *Type:* *string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.property.secretIdInput"></a>

```go
func SecretIdInput() *string
```

- *Type:* *string

---

##### `ResourceGroupId`<sup>Required</sup> <a name="ResourceGroupId" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.property.resourceGroupId"></a>

```go
func ResourceGroupId() *string
```

- *Type:* *string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.property.secretId"></a>

```go
func SecretId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerAzureNodePoolConfigProxyConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigProxyConfig">ContainerAzureNodePoolConfigProxyConfig</a>

---


### ContainerAzureNodePoolConfigRootVolumeOutputReference <a name="ContainerAzureNodePoolConfigRootVolumeOutputReference" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerazurenodepool"

containerazurenodepool.NewContainerAzureNodePoolConfigRootVolumeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerAzureNodePoolConfigRootVolumeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.resetSizeGib">ResetSizeGib</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSizeGib` <a name="ResetSizeGib" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.resetSizeGib"></a>

```go
func ResetSizeGib()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.property.sizeGibInput">SizeGibInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.property.sizeGib">SizeGib</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolume">ContainerAzureNodePoolConfigRootVolume</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SizeGibInput`<sup>Optional</sup> <a name="SizeGibInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.property.sizeGibInput"></a>

```go
func SizeGibInput() *f64
```

- *Type:* *f64

---

##### `SizeGib`<sup>Required</sup> <a name="SizeGib" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.property.sizeGib"></a>

```go
func SizeGib() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolumeOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerAzureNodePoolConfigRootVolume
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigRootVolume">ContainerAzureNodePoolConfigRootVolume</a>

---


### ContainerAzureNodePoolConfigSshConfigOutputReference <a name="ContainerAzureNodePoolConfigSshConfigOutputReference" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerazurenodepool"

containerazurenodepool.NewContainerAzureNodePoolConfigSshConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerAzureNodePoolConfigSshConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.property.authorizedKeyInput">AuthorizedKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.property.authorizedKey">AuthorizedKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfig">ContainerAzureNodePoolConfigSshConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizedKeyInput`<sup>Optional</sup> <a name="AuthorizedKeyInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.property.authorizedKeyInput"></a>

```go
func AuthorizedKeyInput() *string
```

- *Type:* *string

---

##### `AuthorizedKey`<sup>Required</sup> <a name="AuthorizedKey" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.property.authorizedKey"></a>

```go
func AuthorizedKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerAzureNodePoolConfigSshConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolConfigSshConfig">ContainerAzureNodePoolConfigSshConfig</a>

---


### ContainerAzureNodePoolMaxPodsConstraintOutputReference <a name="ContainerAzureNodePoolMaxPodsConstraintOutputReference" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerazurenodepool"

containerazurenodepool.NewContainerAzureNodePoolMaxPodsConstraintOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerAzureNodePoolMaxPodsConstraintOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.property.maxPodsPerNodeInput">MaxPodsPerNodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.property.maxPodsPerNode">MaxPodsPerNode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraint">ContainerAzureNodePoolMaxPodsConstraint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxPodsPerNodeInput`<sup>Optional</sup> <a name="MaxPodsPerNodeInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.property.maxPodsPerNodeInput"></a>

```go
func MaxPodsPerNodeInput() *f64
```

- *Type:* *f64

---

##### `MaxPodsPerNode`<sup>Required</sup> <a name="MaxPodsPerNode" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.property.maxPodsPerNode"></a>

```go
func MaxPodsPerNode() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraintOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerAzureNodePoolMaxPodsConstraint
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolMaxPodsConstraint">ContainerAzureNodePoolMaxPodsConstraint</a>

---


### ContainerAzureNodePoolTimeoutsOutputReference <a name="ContainerAzureNodePoolTimeoutsOutputReference" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerazurenodepool"

containerazurenodepool.NewContainerAzureNodePoolTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerAzureNodePoolTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAzureNodePool.ContainerAzureNodePoolTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



