# `dataGoogleComputeGlobalForwardingRule` Submodule <a name="`dataGoogleComputeGlobalForwardingRule` Submodule" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeGlobalForwardingRule <a name="DataGoogleComputeGlobalForwardingRule" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/d/compute_global_forwarding_rule google_compute_global_forwarding_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeglobalforwardingrule"

datagooglecomputeglobalforwardingrule.NewDataGoogleComputeGlobalForwardingRule(scope Construct, id *string, config DataGoogleComputeGlobalForwardingRuleConfig) DataGoogleComputeGlobalForwardingRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig">DataGoogleComputeGlobalForwardingRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig">DataGoogleComputeGlobalForwardingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeglobalforwardingrule"

datagooglecomputeglobalforwardingrule.DataGoogleComputeGlobalForwardingRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeglobalforwardingrule"

datagooglecomputeglobalforwardingrule.DataGoogleComputeGlobalForwardingRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeglobalforwardingrule"

datagooglecomputeglobalforwardingrule.DataGoogleComputeGlobalForwardingRule_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.ipProtocol">IpProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.ipVersion">IpVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.labelFingerprint">LabelFingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.labels">Labels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.loadBalancingScheme">LoadBalancingScheme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.metadataFilters">MetadataFilters</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList">DataGoogleComputeGlobalForwardingRuleMetadataFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.portRange">PortRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.pscConnectionId">PscConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.pscConnectionStatus">PscConnectionStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.ipProtocol"></a>

```go
func IpProtocol() *string
```

- *Type:* *string

---

##### `IpVersion`<sup>Required</sup> <a name="IpVersion" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.ipVersion"></a>

```go
func IpVersion() *string
```

- *Type:* *string

---

##### `LabelFingerprint`<sup>Required</sup> <a name="LabelFingerprint" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.labelFingerprint"></a>

```go
func LabelFingerprint() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.labels"></a>

```go
func Labels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `LoadBalancingScheme`<sup>Required</sup> <a name="LoadBalancingScheme" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.loadBalancingScheme"></a>

```go
func LoadBalancingScheme() *string
```

- *Type:* *string

---

##### `MetadataFilters`<sup>Required</sup> <a name="MetadataFilters" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.metadataFilters"></a>

```go
func MetadataFilters() DataGoogleComputeGlobalForwardingRuleMetadataFiltersList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList">DataGoogleComputeGlobalForwardingRuleMetadataFiltersList</a>

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `PortRange`<sup>Required</sup> <a name="PortRange" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.portRange"></a>

```go
func PortRange() *string
```

- *Type:* *string

---

##### `PscConnectionId`<sup>Required</sup> <a name="PscConnectionId" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.pscConnectionId"></a>

```go
func PscConnectionId() *string
```

- *Type:* *string

---

##### `PscConnectionStatus`<sup>Required</sup> <a name="PscConnectionStatus" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.pscConnectionStatus"></a>

```go
func PscConnectionStatus() *string
```

- *Type:* *string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeGlobalForwardingRuleConfig <a name="DataGoogleComputeGlobalForwardingRuleConfig" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeglobalforwardingrule"

&datagooglecomputeglobalforwardingrule.DataGoogleComputeGlobalForwardingRuleConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_global_forwarding_rule#id DataGoogleComputeGlobalForwardingRule#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.project">Project</a></code> | <code>*string</code> | The project this resource belongs in. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource;

provided by the client when the resource is created. The name must be 1-63 characters long, and comply with [RFC1035](https://www.ietf.org/rfc/rfc1035.txt). Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_global_forwarding_rule#name DataGoogleComputeGlobalForwardingRule#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_global_forwarding_rule#id DataGoogleComputeGlobalForwardingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The project this resource belongs in.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_global_forwarding_rule#project DataGoogleComputeGlobalForwardingRule#project}

---

### DataGoogleComputeGlobalForwardingRuleMetadataFilters <a name="DataGoogleComputeGlobalForwardingRuleMetadataFilters" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFilters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeglobalforwardingrule"

&datagooglecomputeglobalforwardingrule.DataGoogleComputeGlobalForwardingRuleMetadataFilters {

}
```


### DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels <a name="DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeglobalforwardingrule"

&datagooglecomputeglobalforwardingrule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList <a name="DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeglobalforwardingrule"

datagooglecomputeglobalforwardingrule.NewDataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.get"></a>

```go
func Get(index *f64) DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference <a name="DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeglobalforwardingrule"

datagooglecomputeglobalforwardingrule.NewDataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels">DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels">DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels</a>

---


### DataGoogleComputeGlobalForwardingRuleMetadataFiltersList <a name="DataGoogleComputeGlobalForwardingRuleMetadataFiltersList" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeglobalforwardingrule"

datagooglecomputeglobalforwardingrule.NewDataGoogleComputeGlobalForwardingRuleMetadataFiltersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeGlobalForwardingRuleMetadataFiltersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.get"></a>

```go
func Get(index *f64) DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference <a name="DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeglobalforwardingrule"

datagooglecomputeglobalforwardingrule.NewDataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.filterLabels">FilterLabels</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList">DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.filterMatchCriteria">FilterMatchCriteria</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFilters">DataGoogleComputeGlobalForwardingRuleMetadataFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FilterLabels`<sup>Required</sup> <a name="FilterLabels" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.filterLabels"></a>

```go
func FilterLabels() DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList">DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList</a>

---

##### `FilterMatchCriteria`<sup>Required</sup> <a name="FilterMatchCriteria" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.filterMatchCriteria"></a>

```go
func FilterMatchCriteria() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeGlobalForwardingRuleMetadataFilters
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFilters">DataGoogleComputeGlobalForwardingRuleMetadataFilters</a>

---



