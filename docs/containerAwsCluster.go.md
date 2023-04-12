# `containerAwsCluster` Submodule <a name="`containerAwsCluster` Submodule" id="@cdktf/provider-google.containerAwsCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerAwsCluster <a name="ContainerAwsCluster" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster google_container_aws_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerawscluster"

containerawscluster.NewContainerAwsCluster(scope Construct, id *string, config ContainerAwsClusterConfig) ContainerAwsCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig">ContainerAwsClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig">ContainerAwsClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putAuthorization">PutAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putControlPlane">PutControlPlane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putFleet">PutFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putNetworking">PutNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAuthorization` <a name="PutAuthorization" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putAuthorization"></a>

```go
func PutAuthorization(value ContainerAwsClusterAuthorization)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorization">ContainerAwsClusterAuthorization</a>

---

##### `PutControlPlane` <a name="PutControlPlane" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putControlPlane"></a>

```go
func PutControlPlane(value ContainerAwsClusterControlPlane)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putControlPlane.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane">ContainerAwsClusterControlPlane</a>

---

##### `PutFleet` <a name="PutFleet" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putFleet"></a>

```go
func PutFleet(value ContainerAwsClusterFleet)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putFleet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleet">ContainerAwsClusterFleet</a>

---

##### `PutNetworking` <a name="PutNetworking" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putNetworking"></a>

```go
func PutNetworking(value ContainerAwsClusterNetworking)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putNetworking.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking">ContainerAwsClusterNetworking</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putTimeouts"></a>

```go
func PutTimeouts(value ContainerAwsClusterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts">ContainerAwsClusterTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerawscluster"

containerawscluster.ContainerAwsCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerawscluster"

containerawscluster.ContainerAwsCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerawscluster"

containerawscluster.ContainerAwsCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.authorization">Authorization</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference">ContainerAwsClusterAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.controlPlane">ControlPlane</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference">ContainerAwsClusterControlPlaneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.fleet">Fleet</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference">ContainerAwsClusterFleetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.networking">Networking</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference">ContainerAwsClusterNetworkingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.reconciling">Reconciling</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference">ContainerAwsClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.workloadIdentityConfig">WorkloadIdentityConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList">ContainerAwsClusterWorkloadIdentityConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.authorizationInput">AuthorizationInput</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorization">ContainerAwsClusterAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.awsRegionInput">AwsRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.controlPlaneInput">ControlPlaneInput</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane">ContainerAwsClusterControlPlane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.fleetInput">FleetInput</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleet">ContainerAwsClusterFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.networkingInput">NetworkingInput</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking">ContainerAwsClusterNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.awsRegion">AwsRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.authorization"></a>

```go
func Authorization() ContainerAwsClusterAuthorizationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference">ContainerAwsClusterAuthorizationOutputReference</a>

---

##### `ControlPlane`<sup>Required</sup> <a name="ControlPlane" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.controlPlane"></a>

```go
func ControlPlane() ContainerAwsClusterControlPlaneOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference">ContainerAwsClusterControlPlaneOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Fleet`<sup>Required</sup> <a name="Fleet" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.fleet"></a>

```go
func Fleet() ContainerAwsClusterFleetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference">ContainerAwsClusterFleetOutputReference</a>

---

##### `Networking`<sup>Required</sup> <a name="Networking" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.networking"></a>

```go
func Networking() ContainerAwsClusterNetworkingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference">ContainerAwsClusterNetworkingOutputReference</a>

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.reconciling"></a>

```go
func Reconciling() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.timeouts"></a>

```go
func Timeouts() ContainerAwsClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference">ContainerAwsClusterTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `WorkloadIdentityConfig`<sup>Required</sup> <a name="WorkloadIdentityConfig" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.workloadIdentityConfig"></a>

```go
func WorkloadIdentityConfig() ContainerAwsClusterWorkloadIdentityConfigList
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList">ContainerAwsClusterWorkloadIdentityConfigList</a>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.authorizationInput"></a>

```go
func AuthorizationInput() ContainerAwsClusterAuthorization
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorization">ContainerAwsClusterAuthorization</a>

---

##### `AwsRegionInput`<sup>Optional</sup> <a name="AwsRegionInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.awsRegionInput"></a>

```go
func AwsRegionInput() *string
```

- *Type:* *string

---

##### `ControlPlaneInput`<sup>Optional</sup> <a name="ControlPlaneInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.controlPlaneInput"></a>

```go
func ControlPlaneInput() ContainerAwsClusterControlPlane
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane">ContainerAwsClusterControlPlane</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FleetInput`<sup>Optional</sup> <a name="FleetInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.fleetInput"></a>

```go
func FleetInput() ContainerAwsClusterFleet
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleet">ContainerAwsClusterFleet</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkingInput`<sup>Optional</sup> <a name="NetworkingInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.networkingInput"></a>

```go
func NetworkingInput() ContainerAwsClusterNetworking
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking">ContainerAwsClusterNetworking</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.awsRegion"></a>

```go
func AwsRegion() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerAwsClusterAuthorization <a name="ContainerAwsClusterAuthorization" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorization.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerawscluster"

&containerawscluster.ContainerAwsClusterAuthorization {
	AdminUsers: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorization.property.adminUsers">AdminUsers</a></code> | <code>interface{}</code> | admin_users block. |

---

##### `AdminUsers`<sup>Required</sup> <a name="AdminUsers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorization.property.adminUsers"></a>

```go
AdminUsers interface{}
```

- *Type:* interface{}

admin_users block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#admin_users ContainerAwsCluster#admin_users}

---

### ContainerAwsClusterAuthorizationAdminUsers <a name="ContainerAwsClusterAuthorizationAdminUsers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerawscluster"

&containerawscluster.ContainerAwsClusterAuthorizationAdminUsers {
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsers.property.username">Username</a></code> | <code>*string</code> | The name of the user, e.g. `my-gcp-id@gmail.com`. |

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsers.property.username"></a>

```go
Username *string
```

- *Type:* *string

The name of the user, e.g. `my-gcp-id@gmail.com`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#username ContainerAwsCluster#username}

---

### ContainerAwsClusterConfig <a name="ContainerAwsClusterConfig" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerawscluster"

&containerawscluster.ContainerAwsClusterConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Authorization: github.com/cdktf/cdktf-provider-google-go/google.containerAwsCluster.ContainerAwsClusterAuthorization,
	AwsRegion: *string,
	ControlPlane: github.com/cdktf/cdktf-provider-google-go/google.containerAwsCluster.ContainerAwsClusterControlPlane,
	Fleet: github.com/cdktf/cdktf-provider-google-go/google.containerAwsCluster.ContainerAwsClusterFleet,
	Location: *string,
	Name: *string,
	Networking: github.com/cdktf/cdktf-provider-google-go/google.containerAwsCluster.ContainerAwsClusterNetworking,
	Annotations: *map[string]*string,
	Description: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.containerAwsCluster.ContainerAwsClusterTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.authorization">Authorization</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorization">ContainerAwsClusterAuthorization</a></code> | authorization block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.awsRegion">AwsRegion</a></code> | <code>*string</code> | The AWS region where the cluster runs. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.controlPlane">ControlPlane</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane">ContainerAwsClusterControlPlane</a></code> | control_plane block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.fleet">Fleet</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleet">ContainerAwsClusterFleet</a></code> | fleet block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.location">Location</a></code> | <code>*string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.name">Name</a></code> | <code>*string</code> | The name of this resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.networking">Networking</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking">ContainerAwsClusterNetworking</a></code> | networking block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.description">Description</a></code> | <code>*string</code> | Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#id ContainerAwsCluster#id}. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.project">Project</a></code> | <code>*string</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts">ContainerAwsClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.authorization"></a>

```go
Authorization ContainerAwsClusterAuthorization
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorization">ContainerAwsClusterAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#authorization ContainerAwsCluster#authorization}

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.awsRegion"></a>

```go
AwsRegion *string
```

- *Type:* *string

The AWS region where the cluster runs.

Each Google Cloud region supports a subset of nearby AWS regions. You can call to list all supported AWS regions within a given Google Cloud region.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#aws_region ContainerAwsCluster#aws_region}

---

##### `ControlPlane`<sup>Required</sup> <a name="ControlPlane" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.controlPlane"></a>

```go
ControlPlane ContainerAwsClusterControlPlane
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane">ContainerAwsClusterControlPlane</a>

control_plane block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#control_plane ContainerAwsCluster#control_plane}

---

##### `Fleet`<sup>Required</sup> <a name="Fleet" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.fleet"></a>

```go
Fleet ContainerAwsClusterFleet
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleet">ContainerAwsClusterFleet</a>

fleet block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#fleet ContainerAwsCluster#fleet}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#location ContainerAwsCluster#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of this resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#name ContainerAwsCluster#name}

---

##### `Networking`<sup>Required</sup> <a name="Networking" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.networking"></a>

```go
Networking ContainerAwsClusterNetworking
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking">ContainerAwsClusterNetworking</a>

networking block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#networking ContainerAwsCluster#networking}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Optional.

Annotations on the cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#annotations ContainerAwsCluster#annotations}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#description ContainerAwsCluster#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#id ContainerAwsCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The project for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#project ContainerAwsCluster#project}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterConfig.property.timeouts"></a>

```go
Timeouts ContainerAwsClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts">ContainerAwsClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#timeouts ContainerAwsCluster#timeouts}

---

### ContainerAwsClusterControlPlane <a name="ContainerAwsClusterControlPlane" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerawscluster"

&containerawscluster.ContainerAwsClusterControlPlane {
	AwsServicesAuthentication: github.com/cdktf/cdktf-provider-google-go/google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication,
	ConfigEncryption: github.com/cdktf/cdktf-provider-google-go/google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryption,
	DatabaseEncryption: github.com/cdktf/cdktf-provider-google-go/google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryption,
	IamInstanceProfile: *string,
	SubnetIds: *[]*string,
	Version: *string,
	InstanceType: *string,
	MainVolume: github.com/cdktf/cdktf-provider-google-go/google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume,
	ProxyConfig: github.com/cdktf/cdktf-provider-google-go/google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig,
	RootVolume: github.com/cdktf/cdktf-provider-google-go/google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume,
	SecurityGroupIds: *[]*string,
	SshConfig: github.com/cdktf/cdktf-provider-google-go/google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfig,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.awsServicesAuthentication">AwsServicesAuthentication</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication">ContainerAwsClusterControlPlaneAwsServicesAuthentication</a></code> | aws_services_authentication block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.configEncryption">ConfigEncryption</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryption">ContainerAwsClusterControlPlaneConfigEncryption</a></code> | config_encryption block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.databaseEncryption">DatabaseEncryption</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryption">ContainerAwsClusterControlPlaneDatabaseEncryption</a></code> | database_encryption block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.iamInstanceProfile">IamInstanceProfile</a></code> | <code>*string</code> | The name of the AWS IAM instance pofile to assign to each control plane replica. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | The list of subnets where control plane replicas will run. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.version">Version</a></code> | <code>*string</code> | The Kubernetes version to run on control plane replicas (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling . |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.instanceType">InstanceType</a></code> | <code>*string</code> | Optional. The AWS instance type. When unspecified, it defaults to `m5.large`. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.mainVolume">MainVolume</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume">ContainerAwsClusterControlPlaneMainVolume</a></code> | main_volume block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.proxyConfig">ProxyConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig">ContainerAwsClusterControlPlaneProxyConfig</a></code> | proxy_config block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.rootVolume">RootVolume</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume">ContainerAwsClusterControlPlaneRootVolume</a></code> | root_volume block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.sshConfig">SshConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfig">ContainerAwsClusterControlPlaneSshConfig</a></code> | ssh_config block. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Optional. |

---

##### `AwsServicesAuthentication`<sup>Required</sup> <a name="AwsServicesAuthentication" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.awsServicesAuthentication"></a>

```go
AwsServicesAuthentication ContainerAwsClusterControlPlaneAwsServicesAuthentication
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication">ContainerAwsClusterControlPlaneAwsServicesAuthentication</a>

aws_services_authentication block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#aws_services_authentication ContainerAwsCluster#aws_services_authentication}

---

##### `ConfigEncryption`<sup>Required</sup> <a name="ConfigEncryption" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.configEncryption"></a>

```go
ConfigEncryption ContainerAwsClusterControlPlaneConfigEncryption
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryption">ContainerAwsClusterControlPlaneConfigEncryption</a>

config_encryption block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#config_encryption ContainerAwsCluster#config_encryption}

---

##### `DatabaseEncryption`<sup>Required</sup> <a name="DatabaseEncryption" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.databaseEncryption"></a>

```go
DatabaseEncryption ContainerAwsClusterControlPlaneDatabaseEncryption
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryption">ContainerAwsClusterControlPlaneDatabaseEncryption</a>

database_encryption block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#database_encryption ContainerAwsCluster#database_encryption}

---

##### `IamInstanceProfile`<sup>Required</sup> <a name="IamInstanceProfile" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.iamInstanceProfile"></a>

```go
IamInstanceProfile *string
```

- *Type:* *string

The name of the AWS IAM instance pofile to assign to each control plane replica.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#iam_instance_profile ContainerAwsCluster#iam_instance_profile}

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

The list of subnets where control plane replicas will run.

A replica will be provisioned on each subnet and up to three values can be provided. Each subnet must be in a different AWS Availability Zone (AZ).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#subnet_ids ContainerAwsCluster#subnet_ids}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.version"></a>

```go
Version *string
```

- *Type:* *string

The Kubernetes version to run on control plane replicas (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling .

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#version ContainerAwsCluster#version}

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.instanceType"></a>

```go
InstanceType *string
```

- *Type:* *string

Optional. The AWS instance type. When unspecified, it defaults to `m5.large`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#instance_type ContainerAwsCluster#instance_type}

---

##### `MainVolume`<sup>Optional</sup> <a name="MainVolume" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.mainVolume"></a>

```go
MainVolume ContainerAwsClusterControlPlaneMainVolume
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume">ContainerAwsClusterControlPlaneMainVolume</a>

main_volume block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#main_volume ContainerAwsCluster#main_volume}

---

##### `ProxyConfig`<sup>Optional</sup> <a name="ProxyConfig" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.proxyConfig"></a>

```go
ProxyConfig ContainerAwsClusterControlPlaneProxyConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig">ContainerAwsClusterControlPlaneProxyConfig</a>

proxy_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#proxy_config ContainerAwsCluster#proxy_config}

---

##### `RootVolume`<sup>Optional</sup> <a name="RootVolume" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.rootVolume"></a>

```go
RootVolume ContainerAwsClusterControlPlaneRootVolume
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume">ContainerAwsClusterControlPlaneRootVolume</a>

root_volume block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#root_volume ContainerAwsCluster#root_volume}

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

Optional.

The IDs of additional security groups to add to control plane replicas. The Anthos Multi-Cloud API will automatically create and manage security groups with the minimum rules needed for a functioning cluster.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#security_group_ids ContainerAwsCluster#security_group_ids}

---

##### `SshConfig`<sup>Optional</sup> <a name="SshConfig" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.sshConfig"></a>

```go
SshConfig ContainerAwsClusterControlPlaneSshConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfig">ContainerAwsClusterControlPlaneSshConfig</a>

ssh_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#ssh_config ContainerAwsCluster#ssh_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Optional.

A set of AWS resource tags to propagate to all underlying managed AWS resources. Specify at most 50 pairs containing alphanumerics, spaces, and symbols (.+-=_:@/). Keys can be up to 127 Unicode characters. Values can be up to 255 Unicode characters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#tags ContainerAwsCluster#tags}

---

### ContainerAwsClusterControlPlaneAwsServicesAuthentication <a name="ContainerAwsClusterControlPlaneAwsServicesAuthentication" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerawscluster"

&containerawscluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication {
	RoleArn: *string,
	RoleSessionName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication.property.roleArn">RoleArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the role that the Anthos Multi-Cloud API will assume when managing AWS resources on your account. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication.property.roleSessionName">RoleSessionName</a></code> | <code>*string</code> | Optional. An identifier for the assumed role session. When unspecified, it defaults to `multicloud-service-agent`. |

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the role that the Anthos Multi-Cloud API will assume when managing AWS resources on your account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#role_arn ContainerAwsCluster#role_arn}

---

##### `RoleSessionName`<sup>Optional</sup> <a name="RoleSessionName" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication.property.roleSessionName"></a>

```go
RoleSessionName *string
```

- *Type:* *string

Optional. An identifier for the assumed role session. When unspecified, it defaults to `multicloud-service-agent`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#role_session_name ContainerAwsCluster#role_session_name}

---

### ContainerAwsClusterControlPlaneConfigEncryption <a name="ContainerAwsClusterControlPlaneConfigEncryption" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryption.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerawscluster"

&containerawscluster.ContainerAwsClusterControlPlaneConfigEncryption {
	KmsKeyArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryption.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | The ARN of the AWS KMS key used to encrypt cluster configuration. |

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryption.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

The ARN of the AWS KMS key used to encrypt cluster configuration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#kms_key_arn ContainerAwsCluster#kms_key_arn}

---

### ContainerAwsClusterControlPlaneDatabaseEncryption <a name="ContainerAwsClusterControlPlaneDatabaseEncryption" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryption.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerawscluster"

&containerawscluster.ContainerAwsClusterControlPlaneDatabaseEncryption {
	KmsKeyArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryption.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | The ARN of the AWS KMS key used to encrypt cluster secrets. |

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryption.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

The ARN of the AWS KMS key used to encrypt cluster secrets.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#kms_key_arn ContainerAwsCluster#kms_key_arn}

---

### ContainerAwsClusterControlPlaneMainVolume <a name="ContainerAwsClusterControlPlaneMainVolume" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerawscluster"

&containerawscluster.ContainerAwsClusterControlPlaneMainVolume {
	Iops: *f64,
	KmsKeyArn: *string,
	SizeGib: *f64,
	VolumeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume.property.iops">Iops</a></code> | <code>*f64</code> | Optional. The number of I/O operations per second (IOPS) to provision for GP3 volume. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume.property.sizeGib">SizeGib</a></code> | <code>*f64</code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume.property.volumeType">VolumeType</a></code> | <code>*string</code> | Optional. Type of the EBS volume. When unspecified, it defaults to GP2 volume. Possible values: VOLUME_TYPE_UNSPECIFIED, GP2, GP3. |

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume.property.iops"></a>

```go
Iops *f64
```

- *Type:* *f64

Optional. The number of I/O operations per second (IOPS) to provision for GP3 volume.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#iops ContainerAwsCluster#iops}

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

Optional.

The Amazon Resource Name (ARN) of the Customer Managed Key (CMK) used to encrypt AWS EBS volumes. If not specified, the default Amazon managed key associated to the AWS region where this cluster runs will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#kms_key_arn ContainerAwsCluster#kms_key_arn}

---

##### `SizeGib`<sup>Optional</sup> <a name="SizeGib" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume.property.sizeGib"></a>

```go
SizeGib *f64
```

- *Type:* *f64

Optional.

The size of the volume, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#size_gib ContainerAwsCluster#size_gib}

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume.property.volumeType"></a>

```go
VolumeType *string
```

- *Type:* *string

Optional. Type of the EBS volume. When unspecified, it defaults to GP2 volume. Possible values: VOLUME_TYPE_UNSPECIFIED, GP2, GP3.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#volume_type ContainerAwsCluster#volume_type}

---

### ContainerAwsClusterControlPlaneProxyConfig <a name="ContainerAwsClusterControlPlaneProxyConfig" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerawscluster"

&containerawscluster.ContainerAwsClusterControlPlaneProxyConfig {
	SecretArn: *string,
	SecretVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig.property.secretArn">SecretArn</a></code> | <code>*string</code> | The ARN of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig.property.secretVersion">SecretVersion</a></code> | <code>*string</code> | The version string of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration. |

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig.property.secretArn"></a>

```go
SecretArn *string
```

- *Type:* *string

The ARN of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#secret_arn ContainerAwsCluster#secret_arn}

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig.property.secretVersion"></a>

```go
SecretVersion *string
```

- *Type:* *string

The version string of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#secret_version ContainerAwsCluster#secret_version}

---

### ContainerAwsClusterControlPlaneRootVolume <a name="ContainerAwsClusterControlPlaneRootVolume" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerawscluster"

&containerawscluster.ContainerAwsClusterControlPlaneRootVolume {
	Iops: *f64,
	KmsKeyArn: *string,
	SizeGib: *f64,
	VolumeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume.property.iops">Iops</a></code> | <code>*f64</code> | Optional. The number of I/O operations per second (IOPS) to provision for GP3 volume. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume.property.sizeGib">SizeGib</a></code> | <code>*f64</code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume.property.volumeType">VolumeType</a></code> | <code>*string</code> | Optional. Type of the EBS volume. When unspecified, it defaults to GP2 volume. Possible values: VOLUME_TYPE_UNSPECIFIED, GP2, GP3. |

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume.property.iops"></a>

```go
Iops *f64
```

- *Type:* *f64

Optional. The number of I/O operations per second (IOPS) to provision for GP3 volume.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#iops ContainerAwsCluster#iops}

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

Optional.

The Amazon Resource Name (ARN) of the Customer Managed Key (CMK) used to encrypt AWS EBS volumes. If not specified, the default Amazon managed key associated to the AWS region where this cluster runs will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#kms_key_arn ContainerAwsCluster#kms_key_arn}

---

##### `SizeGib`<sup>Optional</sup> <a name="SizeGib" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume.property.sizeGib"></a>

```go
SizeGib *f64
```

- *Type:* *f64

Optional.

The size of the volume, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#size_gib ContainerAwsCluster#size_gib}

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume.property.volumeType"></a>

```go
VolumeType *string
```

- *Type:* *string

Optional. Type of the EBS volume. When unspecified, it defaults to GP2 volume. Possible values: VOLUME_TYPE_UNSPECIFIED, GP2, GP3.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#volume_type ContainerAwsCluster#volume_type}

---

### ContainerAwsClusterControlPlaneSshConfig <a name="ContainerAwsClusterControlPlaneSshConfig" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerawscluster"

&containerawscluster.ContainerAwsClusterControlPlaneSshConfig {
	Ec2KeyPair: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfig.property.ec2KeyPair">Ec2KeyPair</a></code> | <code>*string</code> | The name of the EC2 key pair used to login into cluster machines. |

---

##### `Ec2KeyPair`<sup>Required</sup> <a name="Ec2KeyPair" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfig.property.ec2KeyPair"></a>

```go
Ec2KeyPair *string
```

- *Type:* *string

The name of the EC2 key pair used to login into cluster machines.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#ec2_key_pair ContainerAwsCluster#ec2_key_pair}

---

### ContainerAwsClusterFleet <a name="ContainerAwsClusterFleet" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerawscluster"

&containerawscluster.ContainerAwsClusterFleet {
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleet.property.project">Project</a></code> | <code>*string</code> | The number of the Fleet host project where this cluster will be registered. |

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleet.property.project"></a>

```go
Project *string
```

- *Type:* *string

The number of the Fleet host project where this cluster will be registered.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#project ContainerAwsCluster#project}

---

### ContainerAwsClusterNetworking <a name="ContainerAwsClusterNetworking" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerawscluster"

&containerawscluster.ContainerAwsClusterNetworking {
	PodAddressCidrBlocks: *[]*string,
	ServiceAddressCidrBlocks: *[]*string,
	VpcId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking.property.podAddressCidrBlocks">PodAddressCidrBlocks</a></code> | <code>*[]*string</code> | All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking.property.serviceAddressCidrBlocks">ServiceAddressCidrBlocks</a></code> | <code>*[]*string</code> | All services in the cluster are assigned an RFC1918 IPv4 address from these ranges. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking.property.vpcId">VpcId</a></code> | <code>*string</code> | The VPC associated with the cluster. |

---

##### `PodAddressCidrBlocks`<sup>Required</sup> <a name="PodAddressCidrBlocks" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking.property.podAddressCidrBlocks"></a>

```go
PodAddressCidrBlocks *[]*string
```

- *Type:* *[]*string

All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges.

Only a single range is supported. This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#pod_address_cidr_blocks ContainerAwsCluster#pod_address_cidr_blocks}

---

##### `ServiceAddressCidrBlocks`<sup>Required</sup> <a name="ServiceAddressCidrBlocks" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking.property.serviceAddressCidrBlocks"></a>

```go
ServiceAddressCidrBlocks *[]*string
```

- *Type:* *[]*string

All services in the cluster are assigned an RFC1918 IPv4 address from these ranges.

Only a single range is supported. This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#service_address_cidr_blocks ContainerAwsCluster#service_address_cidr_blocks}

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

The VPC associated with the cluster.

All component clusters (i.e. control plane and node pools) run on a single VPC. This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#vpc_id ContainerAwsCluster#vpc_id}

---

### ContainerAwsClusterTimeouts <a name="ContainerAwsClusterTimeouts" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerawscluster"

&containerawscluster.ContainerAwsClusterTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#create ContainerAwsCluster#create}. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#delete ContainerAwsCluster#delete}. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#update ContainerAwsCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#create ContainerAwsCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#delete ContainerAwsCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#update ContainerAwsCluster#update}.

---

### ContainerAwsClusterWorkloadIdentityConfig <a name="ContainerAwsClusterWorkloadIdentityConfig" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerawscluster"

&containerawscluster.ContainerAwsClusterWorkloadIdentityConfig {

}
```


## Classes <a name="Classes" id="Classes"></a>

### ContainerAwsClusterAuthorizationAdminUsersList <a name="ContainerAwsClusterAuthorizationAdminUsersList" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerawscluster"

containerawscluster.NewContainerAwsClusterAuthorizationAdminUsersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerAwsClusterAuthorizationAdminUsersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.get"></a>

```go
func Get(index *f64) ContainerAwsClusterAuthorizationAdminUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerAwsClusterAuthorizationAdminUsersOutputReference <a name="ContainerAwsClusterAuthorizationAdminUsersOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerawscluster"

containerawscluster.NewContainerAwsClusterAuthorizationAdminUsersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerAwsClusterAuthorizationAdminUsersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerAwsClusterAuthorizationOutputReference <a name="ContainerAwsClusterAuthorizationOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerawscluster"

containerawscluster.NewContainerAwsClusterAuthorizationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerAwsClusterAuthorizationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.putAdminUsers">PutAdminUsers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdminUsers` <a name="PutAdminUsers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.putAdminUsers"></a>

```go
func PutAdminUsers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.putAdminUsers.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.property.adminUsers">AdminUsers</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList">ContainerAwsClusterAuthorizationAdminUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.property.adminUsersInput">AdminUsersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorization">ContainerAwsClusterAuthorization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdminUsers`<sup>Required</sup> <a name="AdminUsers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.property.adminUsers"></a>

```go
func AdminUsers() ContainerAwsClusterAuthorizationAdminUsersList
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationAdminUsersList">ContainerAwsClusterAuthorizationAdminUsersList</a>

---

##### `AdminUsersInput`<sup>Optional</sup> <a name="AdminUsersInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.property.adminUsersInput"></a>

```go
func AdminUsersInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorizationOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerAwsClusterAuthorization
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterAuthorization">ContainerAwsClusterAuthorization</a>

---


### ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference <a name="ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerawscluster"

containerawscluster.NewContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.resetRoleSessionName">ResetRoleSessionName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRoleSessionName` <a name="ResetRoleSessionName" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.resetRoleSessionName"></a>

```go
func ResetRoleSessionName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.roleSessionNameInput">RoleSessionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.roleSessionName">RoleSessionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication">ContainerAwsClusterControlPlaneAwsServicesAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `RoleSessionNameInput`<sup>Optional</sup> <a name="RoleSessionNameInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.roleSessionNameInput"></a>

```go
func RoleSessionNameInput() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `RoleSessionName`<sup>Required</sup> <a name="RoleSessionName" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.roleSessionName"></a>

```go
func RoleSessionName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerAwsClusterControlPlaneAwsServicesAuthentication
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication">ContainerAwsClusterControlPlaneAwsServicesAuthentication</a>

---


### ContainerAwsClusterControlPlaneConfigEncryptionOutputReference <a name="ContainerAwsClusterControlPlaneConfigEncryptionOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerawscluster"

containerawscluster.NewContainerAwsClusterControlPlaneConfigEncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerAwsClusterControlPlaneConfigEncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryption">ContainerAwsClusterControlPlaneConfigEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerAwsClusterControlPlaneConfigEncryption
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryption">ContainerAwsClusterControlPlaneConfigEncryption</a>

---


### ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference <a name="ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerawscluster"

containerawscluster.NewContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryption">ContainerAwsClusterControlPlaneDatabaseEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerAwsClusterControlPlaneDatabaseEncryption
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryption">ContainerAwsClusterControlPlaneDatabaseEncryption</a>

---


### ContainerAwsClusterControlPlaneMainVolumeOutputReference <a name="ContainerAwsClusterControlPlaneMainVolumeOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerawscluster"

containerawscluster.NewContainerAwsClusterControlPlaneMainVolumeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerAwsClusterControlPlaneMainVolumeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resetSizeGib">ResetSizeGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIops` <a name="ResetIops" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resetIops"></a>

```go
func ResetIops()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```

##### `ResetSizeGib` <a name="ResetSizeGib" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resetSizeGib"></a>

```go
func ResetSizeGib()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.resetVolumeType"></a>

```go
func ResetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.iopsInput">IopsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.sizeGibInput">SizeGibInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.sizeGib">SizeGib</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.volumeType">VolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume">ContainerAwsClusterControlPlaneMainVolume</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.iopsInput"></a>

```go
func IopsInput() *f64
```

- *Type:* *f64

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `SizeGibInput`<sup>Optional</sup> <a name="SizeGibInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.sizeGibInput"></a>

```go
func SizeGibInput() *f64
```

- *Type:* *f64

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.volumeTypeInput"></a>

```go
func VolumeTypeInput() *string
```

- *Type:* *string

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `SizeGib`<sup>Required</sup> <a name="SizeGib" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.sizeGib"></a>

```go
func SizeGib() *f64
```

- *Type:* *f64

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.volumeType"></a>

```go
func VolumeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerAwsClusterControlPlaneMainVolume
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume">ContainerAwsClusterControlPlaneMainVolume</a>

---


### ContainerAwsClusterControlPlaneOutputReference <a name="ContainerAwsClusterControlPlaneOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerawscluster"

containerawscluster.NewContainerAwsClusterControlPlaneOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerAwsClusterControlPlaneOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putAwsServicesAuthentication">PutAwsServicesAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putConfigEncryption">PutConfigEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putDatabaseEncryption">PutDatabaseEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putMainVolume">PutMainVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putProxyConfig">PutProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putRootVolume">PutRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putSshConfig">PutSshConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetMainVolume">ResetMainVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetProxyConfig">ResetProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetRootVolume">ResetRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetSshConfig">ResetSshConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsServicesAuthentication` <a name="PutAwsServicesAuthentication" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putAwsServicesAuthentication"></a>

```go
func PutAwsServicesAuthentication(value ContainerAwsClusterControlPlaneAwsServicesAuthentication)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putAwsServicesAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication">ContainerAwsClusterControlPlaneAwsServicesAuthentication</a>

---

##### `PutConfigEncryption` <a name="PutConfigEncryption" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putConfigEncryption"></a>

```go
func PutConfigEncryption(value ContainerAwsClusterControlPlaneConfigEncryption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putConfigEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryption">ContainerAwsClusterControlPlaneConfigEncryption</a>

---

##### `PutDatabaseEncryption` <a name="PutDatabaseEncryption" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putDatabaseEncryption"></a>

```go
func PutDatabaseEncryption(value ContainerAwsClusterControlPlaneDatabaseEncryption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putDatabaseEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryption">ContainerAwsClusterControlPlaneDatabaseEncryption</a>

---

##### `PutMainVolume` <a name="PutMainVolume" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putMainVolume"></a>

```go
func PutMainVolume(value ContainerAwsClusterControlPlaneMainVolume)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putMainVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume">ContainerAwsClusterControlPlaneMainVolume</a>

---

##### `PutProxyConfig` <a name="PutProxyConfig" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putProxyConfig"></a>

```go
func PutProxyConfig(value ContainerAwsClusterControlPlaneProxyConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putProxyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig">ContainerAwsClusterControlPlaneProxyConfig</a>

---

##### `PutRootVolume` <a name="PutRootVolume" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putRootVolume"></a>

```go
func PutRootVolume(value ContainerAwsClusterControlPlaneRootVolume)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putRootVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume">ContainerAwsClusterControlPlaneRootVolume</a>

---

##### `PutSshConfig` <a name="PutSshConfig" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putSshConfig"></a>

```go
func PutSshConfig(value ContainerAwsClusterControlPlaneSshConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.putSshConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfig">ContainerAwsClusterControlPlaneSshConfig</a>

---

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetInstanceType"></a>

```go
func ResetInstanceType()
```

##### `ResetMainVolume` <a name="ResetMainVolume" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetMainVolume"></a>

```go
func ResetMainVolume()
```

##### `ResetProxyConfig` <a name="ResetProxyConfig" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetProxyConfig"></a>

```go
func ResetProxyConfig()
```

##### `ResetRootVolume` <a name="ResetRootVolume" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetRootVolume"></a>

```go
func ResetRootVolume()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetSshConfig` <a name="ResetSshConfig" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetSshConfig"></a>

```go
func ResetSshConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.resetTags"></a>

```go
func ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.awsServicesAuthentication">AwsServicesAuthentication</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference">ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.configEncryption">ConfigEncryption</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference">ContainerAwsClusterControlPlaneConfigEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.databaseEncryption">DatabaseEncryption</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference">ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.mainVolume">MainVolume</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference">ContainerAwsClusterControlPlaneMainVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.proxyConfig">ProxyConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference">ContainerAwsClusterControlPlaneProxyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.rootVolume">RootVolume</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference">ContainerAwsClusterControlPlaneRootVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.sshConfig">SshConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference">ContainerAwsClusterControlPlaneSshConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.awsServicesAuthenticationInput">AwsServicesAuthenticationInput</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication">ContainerAwsClusterControlPlaneAwsServicesAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.configEncryptionInput">ConfigEncryptionInput</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryption">ContainerAwsClusterControlPlaneConfigEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.databaseEncryptionInput">DatabaseEncryptionInput</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryption">ContainerAwsClusterControlPlaneDatabaseEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.iamInstanceProfileInput">IamInstanceProfileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.mainVolumeInput">MainVolumeInput</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume">ContainerAwsClusterControlPlaneMainVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.proxyConfigInput">ProxyConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig">ContainerAwsClusterControlPlaneProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.rootVolumeInput">RootVolumeInput</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume">ContainerAwsClusterControlPlaneRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.sshConfigInput">SshConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfig">ContainerAwsClusterControlPlaneSshConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.iamInstanceProfile">IamInstanceProfile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane">ContainerAwsClusterControlPlane</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsServicesAuthentication`<sup>Required</sup> <a name="AwsServicesAuthentication" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.awsServicesAuthentication"></a>

```go
func AwsServicesAuthentication() ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference">ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference</a>

---

##### `ConfigEncryption`<sup>Required</sup> <a name="ConfigEncryption" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.configEncryption"></a>

```go
func ConfigEncryption() ContainerAwsClusterControlPlaneConfigEncryptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryptionOutputReference">ContainerAwsClusterControlPlaneConfigEncryptionOutputReference</a>

---

##### `DatabaseEncryption`<sup>Required</sup> <a name="DatabaseEncryption" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.databaseEncryption"></a>

```go
func DatabaseEncryption() ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference">ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference</a>

---

##### `MainVolume`<sup>Required</sup> <a name="MainVolume" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.mainVolume"></a>

```go
func MainVolume() ContainerAwsClusterControlPlaneMainVolumeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolumeOutputReference">ContainerAwsClusterControlPlaneMainVolumeOutputReference</a>

---

##### `ProxyConfig`<sup>Required</sup> <a name="ProxyConfig" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.proxyConfig"></a>

```go
func ProxyConfig() ContainerAwsClusterControlPlaneProxyConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference">ContainerAwsClusterControlPlaneProxyConfigOutputReference</a>

---

##### `RootVolume`<sup>Required</sup> <a name="RootVolume" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.rootVolume"></a>

```go
func RootVolume() ContainerAwsClusterControlPlaneRootVolumeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference">ContainerAwsClusterControlPlaneRootVolumeOutputReference</a>

---

##### `SshConfig`<sup>Required</sup> <a name="SshConfig" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.sshConfig"></a>

```go
func SshConfig() ContainerAwsClusterControlPlaneSshConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference">ContainerAwsClusterControlPlaneSshConfigOutputReference</a>

---

##### `AwsServicesAuthenticationInput`<sup>Optional</sup> <a name="AwsServicesAuthenticationInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.awsServicesAuthenticationInput"></a>

```go
func AwsServicesAuthenticationInput() ContainerAwsClusterControlPlaneAwsServicesAuthentication
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneAwsServicesAuthentication">ContainerAwsClusterControlPlaneAwsServicesAuthentication</a>

---

##### `ConfigEncryptionInput`<sup>Optional</sup> <a name="ConfigEncryptionInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.configEncryptionInput"></a>

```go
func ConfigEncryptionInput() ContainerAwsClusterControlPlaneConfigEncryption
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneConfigEncryption">ContainerAwsClusterControlPlaneConfigEncryption</a>

---

##### `DatabaseEncryptionInput`<sup>Optional</sup> <a name="DatabaseEncryptionInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.databaseEncryptionInput"></a>

```go
func DatabaseEncryptionInput() ContainerAwsClusterControlPlaneDatabaseEncryption
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneDatabaseEncryption">ContainerAwsClusterControlPlaneDatabaseEncryption</a>

---

##### `IamInstanceProfileInput`<sup>Optional</sup> <a name="IamInstanceProfileInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.iamInstanceProfileInput"></a>

```go
func IamInstanceProfileInput() *string
```

- *Type:* *string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *string
```

- *Type:* *string

---

##### `MainVolumeInput`<sup>Optional</sup> <a name="MainVolumeInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.mainVolumeInput"></a>

```go
func MainVolumeInput() ContainerAwsClusterControlPlaneMainVolume
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneMainVolume">ContainerAwsClusterControlPlaneMainVolume</a>

---

##### `ProxyConfigInput`<sup>Optional</sup> <a name="ProxyConfigInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.proxyConfigInput"></a>

```go
func ProxyConfigInput() ContainerAwsClusterControlPlaneProxyConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig">ContainerAwsClusterControlPlaneProxyConfig</a>

---

##### `RootVolumeInput`<sup>Optional</sup> <a name="RootVolumeInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.rootVolumeInput"></a>

```go
func RootVolumeInput() ContainerAwsClusterControlPlaneRootVolume
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume">ContainerAwsClusterControlPlaneRootVolume</a>

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SshConfigInput`<sup>Optional</sup> <a name="SshConfigInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.sshConfigInput"></a>

```go
func SshConfigInput() ContainerAwsClusterControlPlaneSshConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfig">ContainerAwsClusterControlPlaneSshConfig</a>

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `IamInstanceProfile`<sup>Required</sup> <a name="IamInstanceProfile" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.iamInstanceProfile"></a>

```go
func IamInstanceProfile() *string
```

- *Type:* *string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerAwsClusterControlPlane
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlane">ContainerAwsClusterControlPlane</a>

---


### ContainerAwsClusterControlPlaneProxyConfigOutputReference <a name="ContainerAwsClusterControlPlaneProxyConfigOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerawscluster"

containerawscluster.NewContainerAwsClusterControlPlaneProxyConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerAwsClusterControlPlaneProxyConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.secretVersionInput">SecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.secretVersion">SecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig">ContainerAwsClusterControlPlaneProxyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.secretArnInput"></a>

```go
func SecretArnInput() *string
```

- *Type:* *string

---

##### `SecretVersionInput`<sup>Optional</sup> <a name="SecretVersionInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.secretVersionInput"></a>

```go
func SecretVersionInput() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.secretVersion"></a>

```go
func SecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerAwsClusterControlPlaneProxyConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneProxyConfig">ContainerAwsClusterControlPlaneProxyConfig</a>

---


### ContainerAwsClusterControlPlaneRootVolumeOutputReference <a name="ContainerAwsClusterControlPlaneRootVolumeOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerawscluster"

containerawscluster.NewContainerAwsClusterControlPlaneRootVolumeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerAwsClusterControlPlaneRootVolumeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resetSizeGib">ResetSizeGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIops` <a name="ResetIops" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resetIops"></a>

```go
func ResetIops()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```

##### `ResetSizeGib` <a name="ResetSizeGib" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resetSizeGib"></a>

```go
func ResetSizeGib()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.resetVolumeType"></a>

```go
func ResetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.iopsInput">IopsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.sizeGibInput">SizeGibInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.sizeGib">SizeGib</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.volumeType">VolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume">ContainerAwsClusterControlPlaneRootVolume</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.iopsInput"></a>

```go
func IopsInput() *f64
```

- *Type:* *f64

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `SizeGibInput`<sup>Optional</sup> <a name="SizeGibInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.sizeGibInput"></a>

```go
func SizeGibInput() *f64
```

- *Type:* *f64

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.volumeTypeInput"></a>

```go
func VolumeTypeInput() *string
```

- *Type:* *string

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `SizeGib`<sup>Required</sup> <a name="SizeGib" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.sizeGib"></a>

```go
func SizeGib() *f64
```

- *Type:* *f64

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.volumeType"></a>

```go
func VolumeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolumeOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerAwsClusterControlPlaneRootVolume
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneRootVolume">ContainerAwsClusterControlPlaneRootVolume</a>

---


### ContainerAwsClusterControlPlaneSshConfigOutputReference <a name="ContainerAwsClusterControlPlaneSshConfigOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerawscluster"

containerawscluster.NewContainerAwsClusterControlPlaneSshConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerAwsClusterControlPlaneSshConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.property.ec2KeyPairInput">Ec2KeyPairInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.property.ec2KeyPair">Ec2KeyPair</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfig">ContainerAwsClusterControlPlaneSshConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ec2KeyPairInput`<sup>Optional</sup> <a name="Ec2KeyPairInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.property.ec2KeyPairInput"></a>

```go
func Ec2KeyPairInput() *string
```

- *Type:* *string

---

##### `Ec2KeyPair`<sup>Required</sup> <a name="Ec2KeyPair" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.property.ec2KeyPair"></a>

```go
func Ec2KeyPair() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerAwsClusterControlPlaneSshConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterControlPlaneSshConfig">ContainerAwsClusterControlPlaneSshConfig</a>

---


### ContainerAwsClusterFleetOutputReference <a name="ContainerAwsClusterFleetOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerawscluster"

containerawscluster.NewContainerAwsClusterFleetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerAwsClusterFleetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.resetProject"></a>

```go
func ResetProject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.property.membership">Membership</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleet">ContainerAwsClusterFleet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Membership`<sup>Required</sup> <a name="Membership" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.property.membership"></a>

```go
func Membership() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleetOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerAwsClusterFleet
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterFleet">ContainerAwsClusterFleet</a>

---


### ContainerAwsClusterNetworkingOutputReference <a name="ContainerAwsClusterNetworkingOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerawscluster"

containerawscluster.NewContainerAwsClusterNetworkingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerAwsClusterNetworkingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.podAddressCidrBlocksInput">PodAddressCidrBlocksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.serviceAddressCidrBlocksInput">ServiceAddressCidrBlocksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.podAddressCidrBlocks">PodAddressCidrBlocks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.serviceAddressCidrBlocks">ServiceAddressCidrBlocks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking">ContainerAwsClusterNetworking</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PodAddressCidrBlocksInput`<sup>Optional</sup> <a name="PodAddressCidrBlocksInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.podAddressCidrBlocksInput"></a>

```go
func PodAddressCidrBlocksInput() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceAddressCidrBlocksInput`<sup>Optional</sup> <a name="ServiceAddressCidrBlocksInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.serviceAddressCidrBlocksInput"></a>

```go
func ServiceAddressCidrBlocksInput() *[]*string
```

- *Type:* *[]*string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `PodAddressCidrBlocks`<sup>Required</sup> <a name="PodAddressCidrBlocks" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.podAddressCidrBlocks"></a>

```go
func PodAddressCidrBlocks() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceAddressCidrBlocks`<sup>Required</sup> <a name="ServiceAddressCidrBlocks" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.serviceAddressCidrBlocks"></a>

```go
func ServiceAddressCidrBlocks() *[]*string
```

- *Type:* *[]*string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworkingOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerAwsClusterNetworking
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterNetworking">ContainerAwsClusterNetworking</a>

---


### ContainerAwsClusterTimeoutsOutputReference <a name="ContainerAwsClusterTimeoutsOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerawscluster"

containerawscluster.NewContainerAwsClusterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerAwsClusterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerAwsClusterWorkloadIdentityConfigList <a name="ContainerAwsClusterWorkloadIdentityConfigList" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerawscluster"

containerawscluster.NewContainerAwsClusterWorkloadIdentityConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerAwsClusterWorkloadIdentityConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.get"></a>

```go
func Get(index *f64) ContainerAwsClusterWorkloadIdentityConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ContainerAwsClusterWorkloadIdentityConfigOutputReference <a name="ContainerAwsClusterWorkloadIdentityConfigOutputReference" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containerawscluster"

containerawscluster.NewContainerAwsClusterWorkloadIdentityConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerAwsClusterWorkloadIdentityConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.property.identityProvider">IdentityProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.property.issuerUri">IssuerUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.property.workloadPool">WorkloadPool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfig">ContainerAwsClusterWorkloadIdentityConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentityProvider`<sup>Required</sup> <a name="IdentityProvider" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.property.identityProvider"></a>

```go
func IdentityProvider() *string
```

- *Type:* *string

---

##### `IssuerUri`<sup>Required</sup> <a name="IssuerUri" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.property.issuerUri"></a>

```go
func IssuerUri() *string
```

- *Type:* *string

---

##### `WorkloadPool`<sup>Required</sup> <a name="WorkloadPool" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.property.workloadPool"></a>

```go
func WorkloadPool() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerAwsClusterWorkloadIdentityConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsCluster.ContainerAwsClusterWorkloadIdentityConfig">ContainerAwsClusterWorkloadIdentityConfig</a>

---



