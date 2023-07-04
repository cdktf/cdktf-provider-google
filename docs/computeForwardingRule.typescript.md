# `google_compute_forwarding_rule`

Refer to the Terraform Registory for docs: [`google_compute_forwarding_rule`](https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_forwarding_rule).

# `computeForwardingRule` Submodule <a name="`computeForwardingRule` Submodule" id="@cdktf/provider-google.computeForwardingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeForwardingRule <a name="ComputeForwardingRule" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_forwarding_rule google_compute_forwarding_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer"></a>

```typescript
import { computeForwardingRule } from '@cdktf/provider-google'

new computeForwardingRule.ComputeForwardingRule(scope: Construct, id: string, config: ComputeForwardingRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig">ComputeForwardingRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig">ComputeForwardingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.putServiceDirectoryRegistrations">putServiceDirectoryRegistrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetAllowGlobalAccess">resetAllowGlobalAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetAllowPscGlobalAccess">resetAllowPscGlobalAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetAllPorts">resetAllPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetBackendService">resetBackendService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetIpProtocol">resetIpProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetIsMirroringCollector">resetIsMirroringCollector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetLoadBalancingScheme">resetLoadBalancingScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetNetworkTier">resetNetworkTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetPortRange">resetPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetPorts">resetPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetServiceDirectoryRegistrations">resetServiceDirectoryRegistrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetServiceLabel">resetServiceLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetSourceIpRanges">resetSourceIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetSubnetwork">resetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetTarget">resetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putServiceDirectoryRegistrations` <a name="putServiceDirectoryRegistrations" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.putServiceDirectoryRegistrations"></a>

```typescript
public putServiceDirectoryRegistrations(value: ComputeForwardingRuleServiceDirectoryRegistrations): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.putServiceDirectoryRegistrations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrations">ComputeForwardingRuleServiceDirectoryRegistrations</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeForwardingRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeouts">ComputeForwardingRuleTimeouts</a>

---

##### `resetAllowGlobalAccess` <a name="resetAllowGlobalAccess" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetAllowGlobalAccess"></a>

```typescript
public resetAllowGlobalAccess(): void
```

##### `resetAllowPscGlobalAccess` <a name="resetAllowPscGlobalAccess" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetAllowPscGlobalAccess"></a>

```typescript
public resetAllowPscGlobalAccess(): void
```

##### `resetAllPorts` <a name="resetAllPorts" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetAllPorts"></a>

```typescript
public resetAllPorts(): void
```

##### `resetBackendService` <a name="resetBackendService" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetBackendService"></a>

```typescript
public resetBackendService(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```

##### `resetIpProtocol` <a name="resetIpProtocol" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetIpProtocol"></a>

```typescript
public resetIpProtocol(): void
```

##### `resetIsMirroringCollector` <a name="resetIsMirroringCollector" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetIsMirroringCollector"></a>

```typescript
public resetIsMirroringCollector(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLoadBalancingScheme` <a name="resetLoadBalancingScheme" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetLoadBalancingScheme"></a>

```typescript
public resetLoadBalancingScheme(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetNetworkTier` <a name="resetNetworkTier" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetNetworkTier"></a>

```typescript
public resetNetworkTier(): void
```

##### `resetPortRange` <a name="resetPortRange" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetPortRange"></a>

```typescript
public resetPortRange(): void
```

##### `resetPorts` <a name="resetPorts" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetPorts"></a>

```typescript
public resetPorts(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetServiceDirectoryRegistrations` <a name="resetServiceDirectoryRegistrations" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetServiceDirectoryRegistrations"></a>

```typescript
public resetServiceDirectoryRegistrations(): void
```

##### `resetServiceLabel` <a name="resetServiceLabel" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetServiceLabel"></a>

```typescript
public resetServiceLabel(): void
```

##### `resetSourceIpRanges` <a name="resetSourceIpRanges" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetSourceIpRanges"></a>

```typescript
public resetSourceIpRanges(): void
```

##### `resetSubnetwork` <a name="resetSubnetwork" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetSubnetwork"></a>

```typescript
public resetSubnetwork(): void
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetTarget"></a>

```typescript
public resetTarget(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.isConstruct"></a>

```typescript
import { computeForwardingRule } from '@cdktf/provider-google'

computeForwardingRule.ComputeForwardingRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.isTerraformElement"></a>

```typescript
import { computeForwardingRule } from '@cdktf/provider-google'

computeForwardingRule.ComputeForwardingRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.isTerraformResource"></a>

```typescript
import { computeForwardingRule } from '@cdktf/provider-google'

computeForwardingRule.ComputeForwardingRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.baseForwardingRule">baseForwardingRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.labelFingerprint">labelFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.pscConnectionId">pscConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.pscConnectionStatus">pscConnectionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.serviceDirectoryRegistrations">serviceDirectoryRegistrations</a></code> | <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference">ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference">ComputeForwardingRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.allowGlobalAccessInput">allowGlobalAccessInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.allowPscGlobalAccessInput">allowPscGlobalAccessInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.allPortsInput">allPortsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.backendServiceInput">backendServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.ipProtocolInput">ipProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.isMirroringCollectorInput">isMirroringCollectorInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.loadBalancingSchemeInput">loadBalancingSchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.networkTierInput">networkTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.portRangeInput">portRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.portsInput">portsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.serviceDirectoryRegistrationsInput">serviceDirectoryRegistrationsInput</a></code> | <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrations">ComputeForwardingRuleServiceDirectoryRegistrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.serviceLabelInput">serviceLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.sourceIpRangesInput">sourceIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.subnetworkInput">subnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeouts">ComputeForwardingRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.allowGlobalAccess">allowGlobalAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.allowPscGlobalAccess">allowPscGlobalAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.allPorts">allPorts</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.backendService">backendService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.isMirroringCollector">isMirroringCollector</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.loadBalancingScheme">loadBalancingScheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.networkTier">networkTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.portRange">portRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.ports">ports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.serviceLabel">serviceLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.sourceIpRanges">sourceIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.subnetwork">subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.target">target</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `baseForwardingRule`<sup>Required</sup> <a name="baseForwardingRule" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.baseForwardingRule"></a>

```typescript
public readonly baseForwardingRule: string;
```

- *Type:* string

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `labelFingerprint`<sup>Required</sup> <a name="labelFingerprint" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.labelFingerprint"></a>

```typescript
public readonly labelFingerprint: string;
```

- *Type:* string

---

##### `pscConnectionId`<sup>Required</sup> <a name="pscConnectionId" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.pscConnectionId"></a>

```typescript
public readonly pscConnectionId: string;
```

- *Type:* string

---

##### `pscConnectionStatus`<sup>Required</sup> <a name="pscConnectionStatus" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.pscConnectionStatus"></a>

```typescript
public readonly pscConnectionStatus: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `serviceDirectoryRegistrations`<sup>Required</sup> <a name="serviceDirectoryRegistrations" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.serviceDirectoryRegistrations"></a>

```typescript
public readonly serviceDirectoryRegistrations: ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference">ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference</a>

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeForwardingRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference">ComputeForwardingRuleTimeoutsOutputReference</a>

---

##### `allowGlobalAccessInput`<sup>Optional</sup> <a name="allowGlobalAccessInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.allowGlobalAccessInput"></a>

```typescript
public readonly allowGlobalAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowPscGlobalAccessInput`<sup>Optional</sup> <a name="allowPscGlobalAccessInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.allowPscGlobalAccessInput"></a>

```typescript
public readonly allowPscGlobalAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allPortsInput`<sup>Optional</sup> <a name="allPortsInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.allPortsInput"></a>

```typescript
public readonly allPortsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `backendServiceInput`<sup>Optional</sup> <a name="backendServiceInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.backendServiceInput"></a>

```typescript
public readonly backendServiceInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `ipProtocolInput`<sup>Optional</sup> <a name="ipProtocolInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.ipProtocolInput"></a>

```typescript
public readonly ipProtocolInput: string;
```

- *Type:* string

---

##### `isMirroringCollectorInput`<sup>Optional</sup> <a name="isMirroringCollectorInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.isMirroringCollectorInput"></a>

```typescript
public readonly isMirroringCollectorInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `loadBalancingSchemeInput`<sup>Optional</sup> <a name="loadBalancingSchemeInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.loadBalancingSchemeInput"></a>

```typescript
public readonly loadBalancingSchemeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `networkTierInput`<sup>Optional</sup> <a name="networkTierInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.networkTierInput"></a>

```typescript
public readonly networkTierInput: string;
```

- *Type:* string

---

##### `portRangeInput`<sup>Optional</sup> <a name="portRangeInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.portRangeInput"></a>

```typescript
public readonly portRangeInput: string;
```

- *Type:* string

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.portsInput"></a>

```typescript
public readonly portsInput: string[];
```

- *Type:* string[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `serviceDirectoryRegistrationsInput`<sup>Optional</sup> <a name="serviceDirectoryRegistrationsInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.serviceDirectoryRegistrationsInput"></a>

```typescript
public readonly serviceDirectoryRegistrationsInput: ComputeForwardingRuleServiceDirectoryRegistrations;
```

- *Type:* <a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrations">ComputeForwardingRuleServiceDirectoryRegistrations</a>

---

##### `serviceLabelInput`<sup>Optional</sup> <a name="serviceLabelInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.serviceLabelInput"></a>

```typescript
public readonly serviceLabelInput: string;
```

- *Type:* string

---

##### `sourceIpRangesInput`<sup>Optional</sup> <a name="sourceIpRangesInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.sourceIpRangesInput"></a>

```typescript
public readonly sourceIpRangesInput: string[];
```

- *Type:* string[]

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.subnetworkInput"></a>

```typescript
public readonly subnetworkInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeForwardingRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeouts">ComputeForwardingRuleTimeouts</a>

---

##### `allowGlobalAccess`<sup>Required</sup> <a name="allowGlobalAccess" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.allowGlobalAccess"></a>

```typescript
public readonly allowGlobalAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowPscGlobalAccess`<sup>Required</sup> <a name="allowPscGlobalAccess" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.allowPscGlobalAccess"></a>

```typescript
public readonly allowPscGlobalAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allPorts`<sup>Required</sup> <a name="allPorts" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.allPorts"></a>

```typescript
public readonly allPorts: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `backendService`<sup>Required</sup> <a name="backendService" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.backendService"></a>

```typescript
public readonly backendService: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

---

##### `isMirroringCollector`<sup>Required</sup> <a name="isMirroringCollector" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.isMirroringCollector"></a>

```typescript
public readonly isMirroringCollector: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `loadBalancingScheme`<sup>Required</sup> <a name="loadBalancingScheme" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.loadBalancingScheme"></a>

```typescript
public readonly loadBalancingScheme: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `networkTier`<sup>Required</sup> <a name="networkTier" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.networkTier"></a>

```typescript
public readonly networkTier: string;
```

- *Type:* string

---

##### `portRange`<sup>Required</sup> <a name="portRange" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.portRange"></a>

```typescript
public readonly portRange: string;
```

- *Type:* string

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.ports"></a>

```typescript
public readonly ports: string[];
```

- *Type:* string[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `serviceLabel`<sup>Required</sup> <a name="serviceLabel" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.serviceLabel"></a>

```typescript
public readonly serviceLabel: string;
```

- *Type:* string

---

##### `sourceIpRanges`<sup>Required</sup> <a name="sourceIpRanges" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.sourceIpRanges"></a>

```typescript
public readonly sourceIpRanges: string[];
```

- *Type:* string[]

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeForwardingRuleConfig <a name="ComputeForwardingRuleConfig" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.Initializer"></a>

```typescript
import { computeForwardingRule } from '@cdktf/provider-google'

const computeForwardingRuleConfig: computeForwardingRule.ComputeForwardingRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.name">name</a></code> | <code>string</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.allowGlobalAccess">allowGlobalAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | This field is used along with the 'backend_service' field for internal load balancing or with the 'target' field for internal TargetInstance. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.allowPscGlobalAccess">allowPscGlobalAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | This is used in PSC consumer ForwardingRule to control whether the PSC endpoint can be accessed from another region. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.allPorts">allPorts</a></code> | <code>boolean \| cdktf.IResolvable</code> | This field can only be used: If 'IPProtocol' is one of TCP, UDP, or SCTP. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.backendService">backendService</a></code> | <code>string</code> | Identifies the backend service to which the forwarding rule sends traffic. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_forwarding_rule#id ComputeForwardingRule#id}. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.ipAddress">ipAddress</a></code> | <code>string</code> | IP address for which this forwarding rule accepts traffic. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | The IP protocol to which this rule applies. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.isMirroringCollector">isMirroringCollector</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether or not this load balancer can be used as a collector for packet mirroring. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels to apply to this forwarding rule.  A list of key->value pairs. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.loadBalancingScheme">loadBalancingScheme</a></code> | <code>string</code> | Specifies the forwarding rule type. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.network">network</a></code> | <code>string</code> | This field is not used for external load balancing. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.networkTier">networkTier</a></code> | <code>string</code> | This signifies the networking tier used for configuring this load balancer and can only take the following values: 'PREMIUM', 'STANDARD'. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.portRange">portRange</a></code> | <code>string</code> | This field can only be used:. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.ports">ports</a></code> | <code>string[]</code> | This field can only be used:. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_forwarding_rule#project ComputeForwardingRule#project}. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.region">region</a></code> | <code>string</code> | A reference to the region where the regional forwarding rule resides. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.serviceDirectoryRegistrations">serviceDirectoryRegistrations</a></code> | <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrations">ComputeForwardingRuleServiceDirectoryRegistrations</a></code> | service_directory_registrations block. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.serviceLabel">serviceLabel</a></code> | <code>string</code> | An optional prefix to the service name for this Forwarding Rule. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.sourceIpRanges">sourceIpRanges</a></code> | <code>string[]</code> | If not empty, this Forwarding Rule will only forward the traffic when the source IP address matches one of the IP addresses or CIDR ranges set here. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.subnetwork">subnetwork</a></code> | <code>string</code> | This field identifies the subnetwork that the load balanced IP should belong to for this Forwarding Rule, used in internal load balancing and network load balancing with IPv6. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.target">target</a></code> | <code>string</code> | The URL of the target resource to receive the matched traffic. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeouts">ComputeForwardingRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource;

provided by the client when the resource is created.
The name must be 1-63 characters long, and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt).

Specifically, the name must be 1-63 characters long and match the regular
expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the first
character must be a lowercase letter, and all following characters must
be a dash, lowercase letter, or digit, except the last character, which
cannot be a dash.

For Private Service Connect forwarding rules that forward traffic to Google
APIs, the forwarding rule name must be a 1-20 characters string with
lowercase letters and numbers and must start with a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_forwarding_rule#name ComputeForwardingRule#name}

---

##### `allowGlobalAccess`<sup>Optional</sup> <a name="allowGlobalAccess" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.allowGlobalAccess"></a>

```typescript
public readonly allowGlobalAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

This field is used along with the 'backend_service' field for internal load balancing or with the 'target' field for internal TargetInstance.

If the field is set to 'TRUE', clients can access ILB from all
regions.

Otherwise only allows access from clients in the same region as the
internal load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_forwarding_rule#allow_global_access ComputeForwardingRule#allow_global_access}

---

##### `allowPscGlobalAccess`<sup>Optional</sup> <a name="allowPscGlobalAccess" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.allowPscGlobalAccess"></a>

```typescript
public readonly allowPscGlobalAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

This is used in PSC consumer ForwardingRule to control whether the PSC endpoint can be accessed from another region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_forwarding_rule#allow_psc_global_access ComputeForwardingRule#allow_psc_global_access}

---

##### `allPorts`<sup>Optional</sup> <a name="allPorts" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.allPorts"></a>

```typescript
public readonly allPorts: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

This field can only be used: If 'IPProtocol' is one of TCP, UDP, or SCTP.

By internal TCP/UDP load balancers, backend service-based network load
balancers, and internal and external protocol forwarding.


Set this field to true to allow packets addressed to any port or packets
lacking destination port information (for example, UDP fragments after the
first fragment) to be forwarded to the backends configured with this
forwarding rule.

The 'ports', 'port_range', and
'allPorts' fields are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_forwarding_rule#all_ports ComputeForwardingRule#all_ports}

---

##### `backendService`<sup>Optional</sup> <a name="backendService" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.backendService"></a>

```typescript
public readonly backendService: string;
```

- *Type:* string

Identifies the backend service to which the forwarding rule sends traffic.

Required for Internal TCP/UDP Load Balancing and Network Load Balancing;
must be omitted for all other load balancer types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_forwarding_rule#backend_service ComputeForwardingRule#backend_service}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_forwarding_rule#description ComputeForwardingRule#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_forwarding_rule#id ComputeForwardingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

IP address for which this forwarding rule accepts traffic.

When a client
sends traffic to this IP address, the forwarding rule directs the traffic
to the referenced 'target' or 'backendService'.

While creating a forwarding rule, specifying an 'IPAddress' is
required under the following circumstances:

When the 'target' is set to 'targetGrpcProxy' and
'validateForProxyless' is set to 'true', the
'IPAddress' should be set to '0.0.0.0'.
When the 'target' is a Private Service Connect Google APIs
bundle, you must specify an 'IPAddress'.


Otherwise, you can optionally specify an IP address that references an
existing static (reserved) IP address resource. When omitted, Google Cloud
assigns an ephemeral IP address.

Use one of the following formats to specify an IP address while creating a
forwarding rule:

IP address number, as in '100.1.2.3'
IPv6 address range, as in '2600:1234::/96'
Full resource URL, as in
'https://www.googleapis.com/compute/v1/projects/project_id/regions/region/addresses/address-name'
Partial URL or by name, as in:
'projects/project_id/regions/region/addresses/address-name'
'regions/region/addresses/address-name'
'global/addresses/address-name'
'address-name'


The forwarding rule's 'target' or 'backendService',
and in most cases, also the 'loadBalancingScheme', determine the
type of IP address that you can use. For detailed information, see
[IP address
specifications](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts#ip_address_specifications).

When reading an 'IPAddress', the API always returns the IP
address number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_forwarding_rule#ip_address ComputeForwardingRule#ip_address}

---

##### `ipProtocol`<sup>Optional</sup> <a name="ipProtocol" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

The IP protocol to which this rule applies.

For protocol forwarding, valid
options are 'TCP', 'UDP', 'ESP',
'AH', 'SCTP', 'ICMP' and
'L3_DEFAULT'.

The valid IP protocols are different for different load balancing products
as described in [Load balancing
features](https://cloud.google.com/load-balancing/docs/features#protocols_from_the_load_balancer_to_the_backends). Possible values: ["TCP", "UDP", "ESP", "AH", "SCTP", "ICMP", "L3_DEFAULT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_forwarding_rule#ip_protocol ComputeForwardingRule#ip_protocol}

---

##### `isMirroringCollector`<sup>Optional</sup> <a name="isMirroringCollector" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.isMirroringCollector"></a>

```typescript
public readonly isMirroringCollector: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether or not this load balancer can be used as a collector for packet mirroring.

To prevent mirroring loops, instances behind this
load balancer will not have their traffic mirrored even if a
'PacketMirroring' rule applies to them.

This can only be set to true for load balancers that have their
'loadBalancingScheme' set to 'INTERNAL'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_forwarding_rule#is_mirroring_collector ComputeForwardingRule#is_mirroring_collector}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels to apply to this forwarding rule.  A list of key->value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_forwarding_rule#labels ComputeForwardingRule#labels}

---

##### `loadBalancingScheme`<sup>Optional</sup> <a name="loadBalancingScheme" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.loadBalancingScheme"></a>

```typescript
public readonly loadBalancingScheme: string;
```

- *Type:* string

Specifies the forwarding rule type.

For more information about forwarding rules, refer to
[Forwarding rule concepts](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts). Default value: "EXTERNAL" Possible values: ["EXTERNAL", "EXTERNAL_MANAGED", "INTERNAL", "INTERNAL_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_forwarding_rule#load_balancing_scheme ComputeForwardingRule#load_balancing_scheme}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

This field is not used for external load balancing.

For Internal TCP/UDP Load Balancing, this field identifies the network that
the load balanced IP should belong to for this Forwarding Rule.
If the subnetwork is specified, the network of the subnetwork will be used.
If neither subnetwork nor this field is specified, the default network will
be used.

For Private Service Connect forwarding rules that forward traffic to Google
APIs, a network must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_forwarding_rule#network ComputeForwardingRule#network}

---

##### `networkTier`<sup>Optional</sup> <a name="networkTier" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.networkTier"></a>

```typescript
public readonly networkTier: string;
```

- *Type:* string

This signifies the networking tier used for configuring this load balancer and can only take the following values: 'PREMIUM', 'STANDARD'.

For regional ForwardingRule, the valid values are 'PREMIUM' and
'STANDARD'. For GlobalForwardingRule, the valid value is
'PREMIUM'.

If this field is not specified, it is assumed to be 'PREMIUM'.
If 'IPAddress' is specified, this value must be equal to the
networkTier of the Address. Possible values: ["PREMIUM", "STANDARD"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_forwarding_rule#network_tier ComputeForwardingRule#network_tier}

---

##### `portRange`<sup>Optional</sup> <a name="portRange" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.portRange"></a>

```typescript
public readonly portRange: string;
```

- *Type:* string

This field can only be used:.

If 'IPProtocol' is one of TCP, UDP, or SCTP.
By backend service-based network load balancers, target pool-based
network load balancers, internal proxy load balancers, external proxy load
balancers, Traffic Director, external protocol forwarding, and Classic VPN.
Some products have restrictions on what ports can be used. See
[port specifications](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts#port_specifications)
for details.


Only packets addressed to ports in the specified range will be forwarded to
the backends configured with this forwarding rule.

The 'ports' and 'port_range' fields are mutually exclusive.

For external forwarding rules, two or more forwarding rules cannot use the
same '[IPAddress, IPProtocol]' pair, and cannot have
overlapping 'portRange's.

For internal forwarding rules within the same VPC network, two or more
forwarding rules cannot use the same '[IPAddress, IPProtocol]'
pair, and cannot have overlapping 'portRange's.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_forwarding_rule#port_range ComputeForwardingRule#port_range}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.ports"></a>

```typescript
public readonly ports: string[];
```

- *Type:* string[]

This field can only be used:.

If 'IPProtocol' is one of TCP, UDP, or SCTP.
By internal TCP/UDP load balancers, backend service-based network load
balancers, and internal protocol forwarding.


You can specify a list of up to five ports by number, separated by commas.
The ports can be contiguous or discontiguous. Only packets addressed to
these ports will be forwarded to the backends configured with this
forwarding rule.

For external forwarding rules, two or more forwarding rules cannot use the
same '[IPAddress, IPProtocol]' pair, and cannot share any values
defined in 'ports'.

For internal forwarding rules within the same VPC network, two or more
forwarding rules cannot use the same '[IPAddress, IPProtocol]'
pair, and cannot share any values defined in 'ports'.

The 'ports' and 'port_range' fields are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_forwarding_rule#ports ComputeForwardingRule#ports}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_forwarding_rule#project ComputeForwardingRule#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

A reference to the region where the regional forwarding rule resides.

This field is not applicable to global forwarding rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_forwarding_rule#region ComputeForwardingRule#region}

---

##### `serviceDirectoryRegistrations`<sup>Optional</sup> <a name="serviceDirectoryRegistrations" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.serviceDirectoryRegistrations"></a>

```typescript
public readonly serviceDirectoryRegistrations: ComputeForwardingRuleServiceDirectoryRegistrations;
```

- *Type:* <a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrations">ComputeForwardingRuleServiceDirectoryRegistrations</a>

service_directory_registrations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_forwarding_rule#service_directory_registrations ComputeForwardingRule#service_directory_registrations}

---

##### `serviceLabel`<sup>Optional</sup> <a name="serviceLabel" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.serviceLabel"></a>

```typescript
public readonly serviceLabel: string;
```

- *Type:* string

An optional prefix to the service name for this Forwarding Rule.

If specified, will be the first label of the fully qualified service
name.

The label must be 1-63 characters long, and comply with RFC1035.
Specifically, the label must be 1-63 characters long and match the
regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the first
character must be a lowercase letter, and all following characters
must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

This field is only used for INTERNAL load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_forwarding_rule#service_label ComputeForwardingRule#service_label}

---

##### `sourceIpRanges`<sup>Optional</sup> <a name="sourceIpRanges" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.sourceIpRanges"></a>

```typescript
public readonly sourceIpRanges: string[];
```

- *Type:* string[]

If not empty, this Forwarding Rule will only forward the traffic when the source IP address matches one of the IP addresses or CIDR ranges set here.

Note that a Forwarding Rule can only have up to 64 source IP ranges, and this field can only be used with a regional Forwarding Rule whose scheme is EXTERNAL. Each sourceIpRange entry should be either an IP address (for example, 1.2.3.4) or a CIDR range (for example, 1.2.3.0/24).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_forwarding_rule#source_ip_ranges ComputeForwardingRule#source_ip_ranges}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

This field identifies the subnetwork that the load balanced IP should belong to for this Forwarding Rule, used in internal load balancing and network load balancing with IPv6.

If the network specified is in auto subnet mode, this field is optional.
However, a subnetwork must be specified if the network is in custom subnet
mode or when creating external forwarding rule with IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_forwarding_rule#subnetwork ComputeForwardingRule#subnetwork}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

The URL of the target resource to receive the matched traffic.

For
regional forwarding rules, this target must be in the same region as the
forwarding rule. For global forwarding rules, this target must be a global
load balancing resource.

The forwarded traffic must be of a type appropriate to the target object.
For load balancers, see the "Target" column in [Port specifications](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts#ip_address_specifications).
For Private Service Connect forwarding rules that forward traffic to Google APIs, provide the name of a supported Google API bundle:
 'vpc-sc' - [ APIs that support VPC Service Controls](https://cloud.google.com/vpc-service-controls/docs/supported-products).
 'all-apis' - [All supported Google APIs](https://cloud.google.com/vpc/docs/private-service-connect#supported-apis).


For Private Service Connect forwarding rules that forward traffic to managed services, the target must be a service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_forwarding_rule#target ComputeForwardingRule#target}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeForwardingRuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeouts">ComputeForwardingRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_forwarding_rule#timeouts ComputeForwardingRule#timeouts}

---

### ComputeForwardingRuleServiceDirectoryRegistrations <a name="ComputeForwardingRuleServiceDirectoryRegistrations" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrations.Initializer"></a>

```typescript
import { computeForwardingRule } from '@cdktf/provider-google'

const computeForwardingRuleServiceDirectoryRegistrations: computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrations.property.namespace">namespace</a></code> | <code>string</code> | Service Directory namespace to register the forwarding rule under. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrations.property.service">service</a></code> | <code>string</code> | Service Directory service to register the forwarding rule under. |

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrations.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Service Directory namespace to register the forwarding rule under.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_forwarding_rule#namespace ComputeForwardingRule#namespace}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrations.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Service Directory service to register the forwarding rule under.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_forwarding_rule#service ComputeForwardingRule#service}

---

### ComputeForwardingRuleTimeouts <a name="ComputeForwardingRuleTimeouts" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeouts.Initializer"></a>

```typescript
import { computeForwardingRule } from '@cdktf/provider-google'

const computeForwardingRuleTimeouts: computeForwardingRule.ComputeForwardingRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_forwarding_rule#create ComputeForwardingRule#create}. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_forwarding_rule#delete ComputeForwardingRule#delete}. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_forwarding_rule#update ComputeForwardingRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_forwarding_rule#create ComputeForwardingRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_forwarding_rule#delete ComputeForwardingRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_forwarding_rule#update ComputeForwardingRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference <a name="ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer"></a>

```typescript
import { computeForwardingRule } from '@cdktf/provider-google'

new computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.resetService">resetService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetService` <a name="resetService" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.resetService"></a>

```typescript
public resetService(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrations">ComputeForwardingRuleServiceDirectoryRegistrations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeForwardingRuleServiceDirectoryRegistrations;
```

- *Type:* <a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrations">ComputeForwardingRuleServiceDirectoryRegistrations</a>

---


### ComputeForwardingRuleTimeoutsOutputReference <a name="ComputeForwardingRuleTimeoutsOutputReference" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeForwardingRule } from '@cdktf/provider-google'

new computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeouts">ComputeForwardingRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeForwardingRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeouts">ComputeForwardingRuleTimeouts</a>

---



