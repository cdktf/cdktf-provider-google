# `google_compute_global_forwarding_rule`

Refer to the Terraform Registory for docs: [`google_compute_global_forwarding_rule`](https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_global_forwarding_rule).

# `computeGlobalForwardingRule` Submodule <a name="`computeGlobalForwardingRule` Submodule" id="@cdktf/provider-google.computeGlobalForwardingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeGlobalForwardingRule <a name="ComputeGlobalForwardingRule" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_global_forwarding_rule google_compute_global_forwarding_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer"></a>

```typescript
import { computeGlobalForwardingRule } from '@cdktf/provider-google'

new computeGlobalForwardingRule.ComputeGlobalForwardingRule(scope: Construct, id: string, config: ComputeGlobalForwardingRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig">ComputeGlobalForwardingRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig">ComputeGlobalForwardingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.putMetadataFilters">putMetadataFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetIpProtocol">resetIpProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetIpVersion">resetIpVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetLoadBalancingScheme">resetLoadBalancingScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetMetadataFilters">resetMetadataFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetPortRange">resetPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putMetadataFilters` <a name="putMetadataFilters" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.putMetadataFilters"></a>

```typescript
public putMetadataFilters(value: IResolvable | ComputeGlobalForwardingRuleMetadataFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.putMetadataFilters.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFilters">ComputeGlobalForwardingRuleMetadataFilters</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeGlobalForwardingRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeouts">ComputeGlobalForwardingRuleTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```

##### `resetIpProtocol` <a name="resetIpProtocol" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetIpProtocol"></a>

```typescript
public resetIpProtocol(): void
```

##### `resetIpVersion` <a name="resetIpVersion" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetIpVersion"></a>

```typescript
public resetIpVersion(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLoadBalancingScheme` <a name="resetLoadBalancingScheme" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetLoadBalancingScheme"></a>

```typescript
public resetLoadBalancingScheme(): void
```

##### `resetMetadataFilters` <a name="resetMetadataFilters" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetMetadataFilters"></a>

```typescript
public resetMetadataFilters(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetPortRange` <a name="resetPortRange" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetPortRange"></a>

```typescript
public resetPortRange(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.isConstruct"></a>

```typescript
import { computeGlobalForwardingRule } from '@cdktf/provider-google'

computeGlobalForwardingRule.ComputeGlobalForwardingRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.isTerraformElement"></a>

```typescript
import { computeGlobalForwardingRule } from '@cdktf/provider-google'

computeGlobalForwardingRule.ComputeGlobalForwardingRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.isTerraformResource"></a>

```typescript
import { computeGlobalForwardingRule } from '@cdktf/provider-google'

computeGlobalForwardingRule.ComputeGlobalForwardingRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.labelFingerprint">labelFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.metadataFilters">metadataFilters</a></code> | <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList">ComputeGlobalForwardingRuleMetadataFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.pscConnectionId">pscConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.pscConnectionStatus">pscConnectionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference">ComputeGlobalForwardingRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.ipProtocolInput">ipProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.ipVersionInput">ipVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.loadBalancingSchemeInput">loadBalancingSchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.metadataFiltersInput">metadataFiltersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFilters">ComputeGlobalForwardingRuleMetadataFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.portRangeInput">portRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeouts">ComputeGlobalForwardingRuleTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.ipVersion">ipVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.loadBalancingScheme">loadBalancingScheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.portRange">portRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.target">target</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `labelFingerprint`<sup>Required</sup> <a name="labelFingerprint" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.labelFingerprint"></a>

```typescript
public readonly labelFingerprint: string;
```

- *Type:* string

---

##### `metadataFilters`<sup>Required</sup> <a name="metadataFilters" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.metadataFilters"></a>

```typescript
public readonly metadataFilters: ComputeGlobalForwardingRuleMetadataFiltersList;
```

- *Type:* <a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList">ComputeGlobalForwardingRuleMetadataFiltersList</a>

---

##### `pscConnectionId`<sup>Required</sup> <a name="pscConnectionId" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.pscConnectionId"></a>

```typescript
public readonly pscConnectionId: string;
```

- *Type:* string

---

##### `pscConnectionStatus`<sup>Required</sup> <a name="pscConnectionStatus" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.pscConnectionStatus"></a>

```typescript
public readonly pscConnectionStatus: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeGlobalForwardingRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference">ComputeGlobalForwardingRuleTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `ipProtocolInput`<sup>Optional</sup> <a name="ipProtocolInput" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.ipProtocolInput"></a>

```typescript
public readonly ipProtocolInput: string;
```

- *Type:* string

---

##### `ipVersionInput`<sup>Optional</sup> <a name="ipVersionInput" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.ipVersionInput"></a>

```typescript
public readonly ipVersionInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `loadBalancingSchemeInput`<sup>Optional</sup> <a name="loadBalancingSchemeInput" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.loadBalancingSchemeInput"></a>

```typescript
public readonly loadBalancingSchemeInput: string;
```

- *Type:* string

---

##### `metadataFiltersInput`<sup>Optional</sup> <a name="metadataFiltersInput" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.metadataFiltersInput"></a>

```typescript
public readonly metadataFiltersInput: IResolvable | ComputeGlobalForwardingRuleMetadataFilters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFilters">ComputeGlobalForwardingRuleMetadataFilters</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `portRangeInput`<sup>Optional</sup> <a name="portRangeInput" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.portRangeInput"></a>

```typescript
public readonly portRangeInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: ComputeGlobalForwardingRuleTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeouts">ComputeGlobalForwardingRuleTimeouts</a> | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

---

##### `ipVersion`<sup>Required</sup> <a name="ipVersion" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.ipVersion"></a>

```typescript
public readonly ipVersion: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `loadBalancingScheme`<sup>Required</sup> <a name="loadBalancingScheme" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.loadBalancingScheme"></a>

```typescript
public readonly loadBalancingScheme: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `portRange`<sup>Required</sup> <a name="portRange" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.portRange"></a>

```typescript
public readonly portRange: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeGlobalForwardingRuleConfig <a name="ComputeGlobalForwardingRuleConfig" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.Initializer"></a>

```typescript
import { computeGlobalForwardingRule } from '@cdktf/provider-google'

const computeGlobalForwardingRuleConfig: computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.name">name</a></code> | <code>string</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.target">target</a></code> | <code>string</code> | The URL of the target resource to receive the matched traffic. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_global_forwarding_rule#id ComputeGlobalForwardingRule#id}. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.ipAddress">ipAddress</a></code> | <code>string</code> | IP address that this forwarding rule serves. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | The IP protocol to which this rule applies. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.ipVersion">ipVersion</a></code> | <code>string</code> | The IP Version that will be used by this forwarding rule. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels to apply to this rule. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.loadBalancingScheme">loadBalancingScheme</a></code> | <code>string</code> | Specifies the forwarding rule type. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.metadataFilters">metadataFilters</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFilters">ComputeGlobalForwardingRuleMetadataFilters</a>[]</code> | metadata_filters block. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.network">network</a></code> | <code>string</code> | This field is not used for external load balancing. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.portRange">portRange</a></code> | <code>string</code> | When the load balancing scheme is `EXTERNAL`, `INTERNAL_SELF_MANAGED` and `INTERNAL_MANAGED`, you can specify a `port_range`. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.project">project</a></code> | <code>string</code> | The project this resource belongs in. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeouts">ComputeGlobalForwardingRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource;

provided by the client when the resource is created. The name must be 1-63 characters long, and comply with [RFC1035](https://www.ietf.org/rfc/rfc1035.txt). Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_global_forwarding_rule#name ComputeGlobalForwardingRule#name}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

The URL of the target resource to receive the matched traffic.

For regional forwarding rules, this target must live in the same region as the forwarding rule. For global forwarding rules, this target must be a global load balancing resource. The forwarded traffic must be of a type appropriate to the target object. For `INTERNAL_SELF_MANAGED` load balancing, only `targetHttpProxy` is valid, not `targetHttpsProxy`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_global_forwarding_rule#target ComputeGlobalForwardingRule#target}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_global_forwarding_rule#description ComputeGlobalForwardingRule#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_global_forwarding_rule#id ComputeGlobalForwardingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

IP address that this forwarding rule serves.

When a client sends traffic to this IP address, the forwarding rule directs the traffic to the target that you specify in the forwarding rule. If you don't specify a reserved IP address, an ephemeral IP address is assigned. Methods for specifying an IP address: * IPv4 dotted decimal, as in `100.1.2.3` * Full URL, as in `https://www.googleapis.com/compute/v1/projects/project_id/regions/region/addresses/address-name` * Partial URL or by name, as in: * `projects/project_id/regions/region/addresses/address-name` * `regions/region/addresses/address-name` * `global/addresses/address-name` * `address-name` The loadBalancingScheme and the forwarding rule's target determine the type of IP address that you can use. For detailed information, refer to [IP address specifications](/load-balancing/docs/forwarding-rule-concepts#ip_address_specifications).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_global_forwarding_rule#ip_address ComputeGlobalForwardingRule#ip_address}

---

##### `ipProtocol`<sup>Optional</sup> <a name="ipProtocol" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

The IP protocol to which this rule applies.

For protocol forwarding, valid options are `TCP`, `UDP`, `ESP`, `AH`, `SCTP` or `ICMP`. For Internal TCP/UDP Load Balancing, the load balancing scheme is `INTERNAL`, and one of `TCP` or `UDP` are valid. For Traffic Director, the load balancing scheme is `INTERNAL_SELF_MANAGED`, and only `TCP`is valid. For Internal HTTP(S) Load Balancing, the load balancing scheme is `INTERNAL_MANAGED`, and only `TCP` is valid. For HTTP(S), SSL Proxy, and TCP Proxy Load Balancing, the load balancing scheme is `EXTERNAL` and only `TCP` is valid. For Network TCP/UDP Load Balancing, the load balancing scheme is `EXTERNAL`, and one of `TCP` or `UDP` is valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_global_forwarding_rule#ip_protocol ComputeGlobalForwardingRule#ip_protocol}

---

##### `ipVersion`<sup>Optional</sup> <a name="ipVersion" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.ipVersion"></a>

```typescript
public readonly ipVersion: string;
```

- *Type:* string

The IP Version that will be used by this forwarding rule.

Valid options are `IPV4` or `IPV6`. This can only be specified for an external global forwarding rule. Possible values: UNSPECIFIED_VERSION, IPV4, IPV6

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_global_forwarding_rule#ip_version ComputeGlobalForwardingRule#ip_version}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels to apply to this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_global_forwarding_rule#labels ComputeGlobalForwardingRule#labels}

---

##### `loadBalancingScheme`<sup>Optional</sup> <a name="loadBalancingScheme" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.loadBalancingScheme"></a>

```typescript
public readonly loadBalancingScheme: string;
```

- *Type:* string

Specifies the forwarding rule type.

`EXTERNAL` is used for:
  Classic Cloud VPN gateways
  Protocol forwarding to VMs from an external IP address
  The following load balancers: HTTP(S), SSL Proxy, TCP Proxy, and Network TCP/UDP
`INTERNAL` is used for:
  Protocol forwarding to VMs from an internal IP address
  Internal TCP/UDP load balancers
`INTERNAL_MANAGED` is used for:
  Internal HTTP(S) load balancers
`INTERNAL_SELF_MANAGED` is used for:
  Traffic Director
`EXTERNAL_MANAGED` is used for:
  Global external HTTP(S) load balancers 

For more information about forwarding rules, refer to [Forwarding rule concepts](/load-balancing/docs/forwarding-rule-concepts). Possible values: INVALID, INTERNAL, INTERNAL_MANAGED, INTERNAL_SELF_MANAGED, EXTERNAL, EXTERNAL_MANAGED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_global_forwarding_rule#load_balancing_scheme ComputeGlobalForwardingRule#load_balancing_scheme}

---

##### `metadataFilters`<sup>Optional</sup> <a name="metadataFilters" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.metadataFilters"></a>

```typescript
public readonly metadataFilters: IResolvable | ComputeGlobalForwardingRuleMetadataFilters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFilters">ComputeGlobalForwardingRuleMetadataFilters</a>[]

metadata_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_global_forwarding_rule#metadata_filters ComputeGlobalForwardingRule#metadata_filters}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

This field is not used for external load balancing.

For `INTERNAL` and `INTERNAL_SELF_MANAGED` load balancing, this field identifies the network that the load balanced IP should belong to for this Forwarding Rule. If this field is not specified, the default network will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_global_forwarding_rule#network ComputeGlobalForwardingRule#network}

---

##### `portRange`<sup>Optional</sup> <a name="portRange" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.portRange"></a>

```typescript
public readonly portRange: string;
```

- *Type:* string

When the load balancing scheme is `EXTERNAL`, `INTERNAL_SELF_MANAGED` and `INTERNAL_MANAGED`, you can specify a `port_range`.

Use with a forwarding rule that points to a target proxy or a target pool. Do not use with a forwarding rule that points to a backend service. This field is used along with the `target` field for TargetHttpProxy, TargetHttpsProxy, TargetSslProxy, TargetTcpProxy, TargetVpnGateway, TargetPool, TargetInstance. Applicable only when `IPProtocol` is `TCP`, `UDP`, or `SCTP`, only packets addressed to ports in the specified range will be forwarded to `target`. Forwarding rules with the same `[IPAddress, IPProtocol]` pair must have disjoint port ranges. Some types of forwarding target have constraints on the acceptable ports:

TargetHttpProxy: 80, 8080
TargetHttpsProxy: 443
TargetTcpProxy: 25, 43, 110, 143, 195, 443, 465, 587, 700, 993, 995, 1688, 1883, 5222
TargetSslProxy: 25, 43, 110, 143, 195, 443, 465, 587, 700, 993, 995, 1688, 1883, 5222
TargetVpnGateway: 500, 4500

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The project this resource belongs in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_global_forwarding_rule#project ComputeGlobalForwardingRule#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeGlobalForwardingRuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeouts">ComputeGlobalForwardingRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_global_forwarding_rule#timeouts ComputeGlobalForwardingRule#timeouts}

---

### ComputeGlobalForwardingRuleMetadataFilters <a name="ComputeGlobalForwardingRuleMetadataFilters" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFilters.Initializer"></a>

```typescript
import { computeGlobalForwardingRule } from '@cdktf/provider-google'

const computeGlobalForwardingRuleMetadataFilters: computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFilters.property.filterLabels">filterLabels</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabels">ComputeGlobalForwardingRuleMetadataFiltersFilterLabels</a>[]</code> | filter_labels block. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFilters.property.filterMatchCriteria">filterMatchCriteria</a></code> | <code>string</code> | Specifies how individual `filterLabel` matches within the list of `filterLabel`s contribute towards the overall `metadataFilter` match. |

---

##### `filterLabels`<sup>Required</sup> <a name="filterLabels" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFilters.property.filterLabels"></a>

```typescript
public readonly filterLabels: IResolvable | ComputeGlobalForwardingRuleMetadataFiltersFilterLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabels">ComputeGlobalForwardingRuleMetadataFiltersFilterLabels</a>[]

filter_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_global_forwarding_rule#filter_labels ComputeGlobalForwardingRule#filter_labels}

---

##### `filterMatchCriteria`<sup>Required</sup> <a name="filterMatchCriteria" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFilters.property.filterMatchCriteria"></a>

```typescript
public readonly filterMatchCriteria: string;
```

- *Type:* string

Specifies how individual `filterLabel` matches within the list of `filterLabel`s contribute towards the overall `metadataFilter` match.

Supported values are:

MATCH_ANY: At least one of the `filterLabels` must have a matching label in the provided metadata.
MATCH_ALL: All `filterLabels` must have matching labels in the provided metadata. Possible values: NOT_SET, MATCH_ALL, MATCH_ANY

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_global_forwarding_rule#filter_match_criteria ComputeGlobalForwardingRule#filter_match_criteria}

---

### ComputeGlobalForwardingRuleMetadataFiltersFilterLabels <a name="ComputeGlobalForwardingRuleMetadataFiltersFilterLabels" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabels.Initializer"></a>

```typescript
import { computeGlobalForwardingRule } from '@cdktf/provider-google'

const computeGlobalForwardingRuleMetadataFiltersFilterLabels: computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabels = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabels.property.name">name</a></code> | <code>string</code> | Name of metadata label. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabels.property.value">value</a></code> | <code>string</code> | The value of the label must match the specified value. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabels.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of metadata label.

The name can have a maximum length of 1024 characters and must be at least 1 character long.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_global_forwarding_rule#name ComputeGlobalForwardingRule#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabels.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the label must match the specified value.

value can have a maximum length of 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_global_forwarding_rule#value ComputeGlobalForwardingRule#value}

---

### ComputeGlobalForwardingRuleTimeouts <a name="ComputeGlobalForwardingRuleTimeouts" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeouts.Initializer"></a>

```typescript
import { computeGlobalForwardingRule } from '@cdktf/provider-google'

const computeGlobalForwardingRuleTimeouts: computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_global_forwarding_rule#create ComputeGlobalForwardingRule#create}. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_global_forwarding_rule#delete ComputeGlobalForwardingRule#delete}. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_global_forwarding_rule#update ComputeGlobalForwardingRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_global_forwarding_rule#create ComputeGlobalForwardingRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_global_forwarding_rule#delete ComputeGlobalForwardingRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_global_forwarding_rule#update ComputeGlobalForwardingRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList <a name="ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.Initializer"></a>

```typescript
import { computeGlobalForwardingRule } from '@cdktf/provider-google'

new computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.get"></a>

```typescript
public get(index: number): ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabels">ComputeGlobalForwardingRuleMetadataFiltersFilterLabels</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeGlobalForwardingRuleMetadataFiltersFilterLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabels">ComputeGlobalForwardingRuleMetadataFiltersFilterLabels</a>[]

---


### ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference <a name="ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer"></a>

```typescript
import { computeGlobalForwardingRule } from '@cdktf/provider-google'

new computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabels">ComputeGlobalForwardingRuleMetadataFiltersFilterLabels</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeGlobalForwardingRuleMetadataFiltersFilterLabels | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabels">ComputeGlobalForwardingRuleMetadataFiltersFilterLabels</a> | cdktf.IResolvable

---


### ComputeGlobalForwardingRuleMetadataFiltersList <a name="ComputeGlobalForwardingRuleMetadataFiltersList" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList.Initializer"></a>

```typescript
import { computeGlobalForwardingRule } from '@cdktf/provider-google'

new computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList.get"></a>

```typescript
public get(index: number): ComputeGlobalForwardingRuleMetadataFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFilters">ComputeGlobalForwardingRuleMetadataFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeGlobalForwardingRuleMetadataFilters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFilters">ComputeGlobalForwardingRuleMetadataFilters</a>[]

---


### ComputeGlobalForwardingRuleMetadataFiltersOutputReference <a name="ComputeGlobalForwardingRuleMetadataFiltersOutputReference" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer"></a>

```typescript
import { computeGlobalForwardingRule } from '@cdktf/provider-google'

new computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.putFilterLabels">putFilterLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilterLabels` <a name="putFilterLabels" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.putFilterLabels"></a>

```typescript
public putFilterLabels(value: IResolvable | ComputeGlobalForwardingRuleMetadataFiltersFilterLabels[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.putFilterLabels.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabels">ComputeGlobalForwardingRuleMetadataFiltersFilterLabels</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.filterLabels">filterLabels</a></code> | <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList">ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.filterLabelsInput">filterLabelsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabels">ComputeGlobalForwardingRuleMetadataFiltersFilterLabels</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.filterMatchCriteriaInput">filterMatchCriteriaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.filterMatchCriteria">filterMatchCriteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFilters">ComputeGlobalForwardingRuleMetadataFilters</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filterLabels`<sup>Required</sup> <a name="filterLabels" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.filterLabels"></a>

```typescript
public readonly filterLabels: ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList;
```

- *Type:* <a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList">ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList</a>

---

##### `filterLabelsInput`<sup>Optional</sup> <a name="filterLabelsInput" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.filterLabelsInput"></a>

```typescript
public readonly filterLabelsInput: IResolvable | ComputeGlobalForwardingRuleMetadataFiltersFilterLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabels">ComputeGlobalForwardingRuleMetadataFiltersFilterLabels</a>[]

---

##### `filterMatchCriteriaInput`<sup>Optional</sup> <a name="filterMatchCriteriaInput" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.filterMatchCriteriaInput"></a>

```typescript
public readonly filterMatchCriteriaInput: string;
```

- *Type:* string

---

##### `filterMatchCriteria`<sup>Required</sup> <a name="filterMatchCriteria" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.filterMatchCriteria"></a>

```typescript
public readonly filterMatchCriteria: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeGlobalForwardingRuleMetadataFilters | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFilters">ComputeGlobalForwardingRuleMetadataFilters</a> | cdktf.IResolvable

---


### ComputeGlobalForwardingRuleTimeoutsOutputReference <a name="ComputeGlobalForwardingRuleTimeoutsOutputReference" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeGlobalForwardingRule } from '@cdktf/provider-google'

new computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeouts">ComputeGlobalForwardingRuleTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeGlobalForwardingRuleTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeouts">ComputeGlobalForwardingRuleTimeouts</a> | cdktf.IResolvable

---



