# `computeFirewallPolicyRule` Submodule <a name="`computeFirewallPolicyRule` Submodule" id="@cdktf/provider-google.computeFirewallPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeFirewallPolicyRule <a name="ComputeFirewallPolicyRule" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_firewall_policy_rule google_compute_firewall_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.Initializer"></a>

```typescript
import { computeFirewallPolicyRule } from '@cdktf/provider-google'

new computeFirewallPolicyRule.ComputeFirewallPolicyRule(scope: Construct, id: string, config: ComputeFirewallPolicyRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleConfig">ComputeFirewallPolicyRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleConfig">ComputeFirewallPolicyRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.putMatch">putMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.putTargetSecureTags">putTargetSecureTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.resetEnableLogging">resetEnableLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.resetSecurityProfileGroup">resetSecurityProfileGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.resetTargetResources">resetTargetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.resetTargetSecureTags">resetTargetSecureTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.resetTargetServiceAccounts">resetTargetServiceAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.resetTlsInspect">resetTlsInspect</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMatch` <a name="putMatch" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.putMatch"></a>

```typescript
public putMatch(value: ComputeFirewallPolicyRuleMatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatch">ComputeFirewallPolicyRuleMatch</a>

---

##### `putTargetSecureTags` <a name="putTargetSecureTags" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.putTargetSecureTags"></a>

```typescript
public putTargetSecureTags(value: IResolvable | ComputeFirewallPolicyRuleTargetSecureTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.putTargetSecureTags.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTags">ComputeFirewallPolicyRuleTargetSecureTags</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeFirewallPolicyRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeouts">ComputeFirewallPolicyRuleTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetEnableLogging` <a name="resetEnableLogging" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.resetEnableLogging"></a>

```typescript
public resetEnableLogging(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSecurityProfileGroup` <a name="resetSecurityProfileGroup" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.resetSecurityProfileGroup"></a>

```typescript
public resetSecurityProfileGroup(): void
```

##### `resetTargetResources` <a name="resetTargetResources" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.resetTargetResources"></a>

```typescript
public resetTargetResources(): void
```

##### `resetTargetSecureTags` <a name="resetTargetSecureTags" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.resetTargetSecureTags"></a>

```typescript
public resetTargetSecureTags(): void
```

##### `resetTargetServiceAccounts` <a name="resetTargetServiceAccounts" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.resetTargetServiceAccounts"></a>

```typescript
public resetTargetServiceAccounts(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTlsInspect` <a name="resetTlsInspect" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.resetTlsInspect"></a>

```typescript
public resetTlsInspect(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeFirewallPolicyRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.isConstruct"></a>

```typescript
import { computeFirewallPolicyRule } from '@cdktf/provider-google'

computeFirewallPolicyRule.ComputeFirewallPolicyRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.isTerraformElement"></a>

```typescript
import { computeFirewallPolicyRule } from '@cdktf/provider-google'

computeFirewallPolicyRule.ComputeFirewallPolicyRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.isTerraformResource"></a>

```typescript
import { computeFirewallPolicyRule } from '@cdktf/provider-google'

computeFirewallPolicyRule.ComputeFirewallPolicyRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.generateConfigForImport"></a>

```typescript
import { computeFirewallPolicyRule } from '@cdktf/provider-google'

computeFirewallPolicyRule.ComputeFirewallPolicyRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComputeFirewallPolicyRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeFirewallPolicyRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeFirewallPolicyRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_firewall_policy_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeFirewallPolicyRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.match">match</a></code> | <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference">ComputeFirewallPolicyRuleMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.ruleTupleCount">ruleTupleCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.targetSecureTags">targetSecureTags</a></code> | <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsList">ComputeFirewallPolicyRuleTargetSecureTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference">ComputeFirewallPolicyRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.enableLoggingInput">enableLoggingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.firewallPolicyInput">firewallPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.matchInput">matchInput</a></code> | <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatch">ComputeFirewallPolicyRuleMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.securityProfileGroupInput">securityProfileGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.targetResourcesInput">targetResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.targetSecureTagsInput">targetSecureTagsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTags">ComputeFirewallPolicyRuleTargetSecureTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.targetServiceAccountsInput">targetServiceAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeouts">ComputeFirewallPolicyRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.tlsInspectInput">tlsInspectInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.enableLogging">enableLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.firewallPolicy">firewallPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.securityProfileGroup">securityProfileGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.targetResources">targetResources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.targetServiceAccounts">targetServiceAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.tlsInspect">tlsInspect</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.match"></a>

```typescript
public readonly match: ComputeFirewallPolicyRuleMatchOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference">ComputeFirewallPolicyRuleMatchOutputReference</a>

---

##### `ruleTupleCount`<sup>Required</sup> <a name="ruleTupleCount" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.ruleTupleCount"></a>

```typescript
public readonly ruleTupleCount: number;
```

- *Type:* number

---

##### `targetSecureTags`<sup>Required</sup> <a name="targetSecureTags" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.targetSecureTags"></a>

```typescript
public readonly targetSecureTags: ComputeFirewallPolicyRuleTargetSecureTagsList;
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsList">ComputeFirewallPolicyRuleTargetSecureTagsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeFirewallPolicyRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference">ComputeFirewallPolicyRuleTimeoutsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableLoggingInput`<sup>Optional</sup> <a name="enableLoggingInput" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.enableLoggingInput"></a>

```typescript
public readonly enableLoggingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `firewallPolicyInput`<sup>Optional</sup> <a name="firewallPolicyInput" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.firewallPolicyInput"></a>

```typescript
public readonly firewallPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.matchInput"></a>

```typescript
public readonly matchInput: ComputeFirewallPolicyRuleMatch;
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatch">ComputeFirewallPolicyRuleMatch</a>

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `securityProfileGroupInput`<sup>Optional</sup> <a name="securityProfileGroupInput" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.securityProfileGroupInput"></a>

```typescript
public readonly securityProfileGroupInput: string;
```

- *Type:* string

---

##### `targetResourcesInput`<sup>Optional</sup> <a name="targetResourcesInput" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.targetResourcesInput"></a>

```typescript
public readonly targetResourcesInput: string[];
```

- *Type:* string[]

---

##### `targetSecureTagsInput`<sup>Optional</sup> <a name="targetSecureTagsInput" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.targetSecureTagsInput"></a>

```typescript
public readonly targetSecureTagsInput: IResolvable | ComputeFirewallPolicyRuleTargetSecureTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTags">ComputeFirewallPolicyRuleTargetSecureTags</a>[]

---

##### `targetServiceAccountsInput`<sup>Optional</sup> <a name="targetServiceAccountsInput" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.targetServiceAccountsInput"></a>

```typescript
public readonly targetServiceAccountsInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeFirewallPolicyRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeouts">ComputeFirewallPolicyRuleTimeouts</a>

---

##### `tlsInspectInput`<sup>Optional</sup> <a name="tlsInspectInput" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.tlsInspectInput"></a>

```typescript
public readonly tlsInspectInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableLogging`<sup>Required</sup> <a name="enableLogging" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.enableLogging"></a>

```typescript
public readonly enableLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `firewallPolicy`<sup>Required</sup> <a name="firewallPolicy" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.firewallPolicy"></a>

```typescript
public readonly firewallPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `securityProfileGroup`<sup>Required</sup> <a name="securityProfileGroup" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.securityProfileGroup"></a>

```typescript
public readonly securityProfileGroup: string;
```

- *Type:* string

---

##### `targetResources`<sup>Required</sup> <a name="targetResources" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.targetResources"></a>

```typescript
public readonly targetResources: string[];
```

- *Type:* string[]

---

##### `targetServiceAccounts`<sup>Required</sup> <a name="targetServiceAccounts" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.targetServiceAccounts"></a>

```typescript
public readonly targetServiceAccounts: string[];
```

- *Type:* string[]

---

##### `tlsInspect`<sup>Required</sup> <a name="tlsInspect" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.tlsInspect"></a>

```typescript
public readonly tlsInspect: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeFirewallPolicyRuleConfig <a name="ComputeFirewallPolicyRuleConfig" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleConfig.Initializer"></a>

```typescript
import { computeFirewallPolicyRule } from '@cdktf/provider-google'

const computeFirewallPolicyRuleConfig: computeFirewallPolicyRule.ComputeFirewallPolicyRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleConfig.property.action">action</a></code> | <code>string</code> | The Action to perform when the client connection triggers the rule. Valid actions are "allow", "deny", "goto_next" and "apply_security_profile_group". |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleConfig.property.direction">direction</a></code> | <code>string</code> | The direction in which this rule applies. Possible values: ["INGRESS", "EGRESS"]. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleConfig.property.firewallPolicy">firewallPolicy</a></code> | <code>string</code> | The firewall policy of the resource. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleConfig.property.match">match</a></code> | <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatch">ComputeFirewallPolicyRuleMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleConfig.property.priority">priority</a></code> | <code>number</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleConfig.property.description">description</a></code> | <code>string</code> | An optional description for this resource. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Denotes whether the firewall policy rule is disabled. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleConfig.property.enableLogging">enableLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | Denotes whether to enable logging for a particular rule. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_firewall_policy_rule#id ComputeFirewallPolicyRule#id}. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleConfig.property.securityProfileGroup">securityProfileGroup</a></code> | <code>string</code> | A fully-qualified URL of a SecurityProfile resource instance. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleConfig.property.targetResources">targetResources</a></code> | <code>string[]</code> | A list of network resource URLs to which this rule applies. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleConfig.property.targetSecureTags">targetSecureTags</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTags">ComputeFirewallPolicyRuleTargetSecureTags</a>[]</code> | target_secure_tags block. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleConfig.property.targetServiceAccounts">targetServiceAccounts</a></code> | <code>string[]</code> | A list of service accounts indicating the sets of instances that are applied with this rule. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeouts">ComputeFirewallPolicyRuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleConfig.property.tlsInspect">tlsInspect</a></code> | <code>boolean \| cdktf.IResolvable</code> | Boolean flag indicating if the traffic should be TLS decrypted. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleConfig.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

The Action to perform when the client connection triggers the rule. Valid actions are "allow", "deny", "goto_next" and "apply_security_profile_group".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_firewall_policy_rule#action ComputeFirewallPolicyRule#action}

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleConfig.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

The direction in which this rule applies. Possible values: ["INGRESS", "EGRESS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_firewall_policy_rule#direction ComputeFirewallPolicyRule#direction}

---

##### `firewallPolicy`<sup>Required</sup> <a name="firewallPolicy" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleConfig.property.firewallPolicy"></a>

```typescript
public readonly firewallPolicy: string;
```

- *Type:* string

The firewall policy of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_firewall_policy_rule#firewall_policy ComputeFirewallPolicyRule#firewall_policy}

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleConfig.property.match"></a>

```typescript
public readonly match: ComputeFirewallPolicyRuleMatch;
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatch">ComputeFirewallPolicyRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_firewall_policy_rule#match ComputeFirewallPolicyRule#match}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

An integer indicating the priority of a rule in the list.

The priority must be a positive value between 0 and 2147483647.
Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest prority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_firewall_policy_rule#priority ComputeFirewallPolicyRule#priority}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_firewall_policy_rule#description ComputeFirewallPolicyRule#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Denotes whether the firewall policy rule is disabled.

When set to true, the firewall policy rule is not enforced and traffic behaves as if it did not exist.
If this is unspecified, the firewall policy rule will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_firewall_policy_rule#disabled ComputeFirewallPolicyRule#disabled}

---

##### `enableLogging`<sup>Optional</sup> <a name="enableLogging" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleConfig.property.enableLogging"></a>

```typescript
public readonly enableLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Denotes whether to enable logging for a particular rule.

If logging is enabled, logs will be exported to the configured export destination in Stackdriver.
Logs may be exported to BigQuery or Pub/Sub.
Note: you cannot enable logging on "goto_next" rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_firewall_policy_rule#enable_logging ComputeFirewallPolicyRule#enable_logging}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_firewall_policy_rule#id ComputeFirewallPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `securityProfileGroup`<sup>Optional</sup> <a name="securityProfileGroup" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleConfig.property.securityProfileGroup"></a>

```typescript
public readonly securityProfileGroup: string;
```

- *Type:* string

A fully-qualified URL of a SecurityProfile resource instance.

Example: https://networksecurity.googleapis.com/v1/projects/{project}/locations/{location}/securityProfileGroups/my-security-profile-group
Must be specified if action = 'apply_security_profile_group' and cannot be specified for other actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_firewall_policy_rule#security_profile_group ComputeFirewallPolicyRule#security_profile_group}

---

##### `targetResources`<sup>Optional</sup> <a name="targetResources" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleConfig.property.targetResources"></a>

```typescript
public readonly targetResources: string[];
```

- *Type:* string[]

A list of network resource URLs to which this rule applies.

This field allows you to control which network's VMs get this rule.
If this field is left blank, all VMs within the organization will receive the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_firewall_policy_rule#target_resources ComputeFirewallPolicyRule#target_resources}

---

##### `targetSecureTags`<sup>Optional</sup> <a name="targetSecureTags" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleConfig.property.targetSecureTags"></a>

```typescript
public readonly targetSecureTags: IResolvable | ComputeFirewallPolicyRuleTargetSecureTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTags">ComputeFirewallPolicyRuleTargetSecureTags</a>[]

target_secure_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_firewall_policy_rule#target_secure_tags ComputeFirewallPolicyRule#target_secure_tags}

---

##### `targetServiceAccounts`<sup>Optional</sup> <a name="targetServiceAccounts" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleConfig.property.targetServiceAccounts"></a>

```typescript
public readonly targetServiceAccounts: string[];
```

- *Type:* string[]

A list of service accounts indicating the sets of instances that are applied with this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_firewall_policy_rule#target_service_accounts ComputeFirewallPolicyRule#target_service_accounts}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeFirewallPolicyRuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeouts">ComputeFirewallPolicyRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_firewall_policy_rule#timeouts ComputeFirewallPolicyRule#timeouts}

---

##### `tlsInspect`<sup>Optional</sup> <a name="tlsInspect" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleConfig.property.tlsInspect"></a>

```typescript
public readonly tlsInspect: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Boolean flag indicating if the traffic should be TLS decrypted.

Can be set only if action = 'apply_security_profile_group' and cannot be set for other actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_firewall_policy_rule#tls_inspect ComputeFirewallPolicyRule#tls_inspect}

---

### ComputeFirewallPolicyRuleMatch <a name="ComputeFirewallPolicyRuleMatch" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatch.Initializer"></a>

```typescript
import { computeFirewallPolicyRule } from '@cdktf/provider-google'

const computeFirewallPolicyRuleMatch: computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatch.property.layer4Configs">layer4Configs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4Configs">ComputeFirewallPolicyRuleMatchLayer4Configs</a>[]</code> | layer4_configs block. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatch.property.destAddressGroups">destAddressGroups</a></code> | <code>string[]</code> | Address groups which should be matched against the traffic destination. Maximum number of destination address groups is 10. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatch.property.destFqdns">destFqdns</a></code> | <code>string[]</code> | Fully Qualified Domain Name (FQDN) which should be matched against traffic destination. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatch.property.destIpRanges">destIpRanges</a></code> | <code>string[]</code> | CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 5000. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatch.property.destRegionCodes">destRegionCodes</a></code> | <code>string[]</code> | Region codes whose IP addresses will be used to match for destination of traffic. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatch.property.destThreatIntelligences">destThreatIntelligences</a></code> | <code>string[]</code> | Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic destination. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatch.property.srcAddressGroups">srcAddressGroups</a></code> | <code>string[]</code> | Address groups which should be matched against the traffic source. Maximum number of source address groups is 10. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatch.property.srcFqdns">srcFqdns</a></code> | <code>string[]</code> | Fully Qualified Domain Name (FQDN) which should be matched against traffic source. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatch.property.srcIpRanges">srcIpRanges</a></code> | <code>string[]</code> | CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 5000. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatch.property.srcRegionCodes">srcRegionCodes</a></code> | <code>string[]</code> | Region codes whose IP addresses will be used to match for source of traffic. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatch.property.srcSecureTags">srcSecureTags</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTags">ComputeFirewallPolicyRuleMatchSrcSecureTags</a>[]</code> | src_secure_tags block. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatch.property.srcThreatIntelligences">srcThreatIntelligences</a></code> | <code>string[]</code> | Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic source. |

---

##### `layer4Configs`<sup>Required</sup> <a name="layer4Configs" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatch.property.layer4Configs"></a>

```typescript
public readonly layer4Configs: IResolvable | ComputeFirewallPolicyRuleMatchLayer4Configs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4Configs">ComputeFirewallPolicyRuleMatchLayer4Configs</a>[]

layer4_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_firewall_policy_rule#layer4_configs ComputeFirewallPolicyRule#layer4_configs}

---

##### `destAddressGroups`<sup>Optional</sup> <a name="destAddressGroups" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatch.property.destAddressGroups"></a>

```typescript
public readonly destAddressGroups: string[];
```

- *Type:* string[]

Address groups which should be matched against the traffic destination. Maximum number of destination address groups is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_firewall_policy_rule#dest_address_groups ComputeFirewallPolicyRule#dest_address_groups}

---

##### `destFqdns`<sup>Optional</sup> <a name="destFqdns" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatch.property.destFqdns"></a>

```typescript
public readonly destFqdns: string[];
```

- *Type:* string[]

Fully Qualified Domain Name (FQDN) which should be matched against traffic destination.

Maximum number of destination fqdn allowed is 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_firewall_policy_rule#dest_fqdns ComputeFirewallPolicyRule#dest_fqdns}

---

##### `destIpRanges`<sup>Optional</sup> <a name="destIpRanges" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatch.property.destIpRanges"></a>

```typescript
public readonly destIpRanges: string[];
```

- *Type:* string[]

CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_firewall_policy_rule#dest_ip_ranges ComputeFirewallPolicyRule#dest_ip_ranges}

---

##### `destRegionCodes`<sup>Optional</sup> <a name="destRegionCodes" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatch.property.destRegionCodes"></a>

```typescript
public readonly destRegionCodes: string[];
```

- *Type:* string[]

Region codes whose IP addresses will be used to match for destination of traffic.

Should be specified as 2 letter country code defined as per ISO 3166 alpha-2 country codes. ex."US" Maximum number of dest region codes allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_firewall_policy_rule#dest_region_codes ComputeFirewallPolicyRule#dest_region_codes}

---

##### `destThreatIntelligences`<sup>Optional</sup> <a name="destThreatIntelligences" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatch.property.destThreatIntelligences"></a>

```typescript
public readonly destThreatIntelligences: string[];
```

- *Type:* string[]

Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_firewall_policy_rule#dest_threat_intelligences ComputeFirewallPolicyRule#dest_threat_intelligences}

---

##### `srcAddressGroups`<sup>Optional</sup> <a name="srcAddressGroups" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatch.property.srcAddressGroups"></a>

```typescript
public readonly srcAddressGroups: string[];
```

- *Type:* string[]

Address groups which should be matched against the traffic source. Maximum number of source address groups is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_firewall_policy_rule#src_address_groups ComputeFirewallPolicyRule#src_address_groups}

---

##### `srcFqdns`<sup>Optional</sup> <a name="srcFqdns" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatch.property.srcFqdns"></a>

```typescript
public readonly srcFqdns: string[];
```

- *Type:* string[]

Fully Qualified Domain Name (FQDN) which should be matched against traffic source.

Maximum number of source fqdn allowed is 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_firewall_policy_rule#src_fqdns ComputeFirewallPolicyRule#src_fqdns}

---

##### `srcIpRanges`<sup>Optional</sup> <a name="srcIpRanges" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatch.property.srcIpRanges"></a>

```typescript
public readonly srcIpRanges: string[];
```

- *Type:* string[]

CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_firewall_policy_rule#src_ip_ranges ComputeFirewallPolicyRule#src_ip_ranges}

---

##### `srcRegionCodes`<sup>Optional</sup> <a name="srcRegionCodes" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatch.property.srcRegionCodes"></a>

```typescript
public readonly srcRegionCodes: string[];
```

- *Type:* string[]

Region codes whose IP addresses will be used to match for source of traffic.

Should be specified as 2 letter country code defined as per ISO 3166 alpha-2 country codes. ex."US" Maximum number of source region codes allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_firewall_policy_rule#src_region_codes ComputeFirewallPolicyRule#src_region_codes}

---

##### `srcSecureTags`<sup>Optional</sup> <a name="srcSecureTags" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatch.property.srcSecureTags"></a>

```typescript
public readonly srcSecureTags: IResolvable | ComputeFirewallPolicyRuleMatchSrcSecureTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTags">ComputeFirewallPolicyRuleMatchSrcSecureTags</a>[]

src_secure_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_firewall_policy_rule#src_secure_tags ComputeFirewallPolicyRule#src_secure_tags}

---

##### `srcThreatIntelligences`<sup>Optional</sup> <a name="srcThreatIntelligences" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatch.property.srcThreatIntelligences"></a>

```typescript
public readonly srcThreatIntelligences: string[];
```

- *Type:* string[]

Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_firewall_policy_rule#src_threat_intelligences ComputeFirewallPolicyRule#src_threat_intelligences}

---

### ComputeFirewallPolicyRuleMatchLayer4Configs <a name="ComputeFirewallPolicyRuleMatchLayer4Configs" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4Configs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4Configs.Initializer"></a>

```typescript
import { computeFirewallPolicyRule } from '@cdktf/provider-google'

const computeFirewallPolicyRuleMatchLayer4Configs: computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4Configs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4Configs.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | The IP protocol to which this rule applies. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4Configs.property.ports">ports</a></code> | <code>string[]</code> | An optional list of ports to which this rule applies. |

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4Configs.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

The IP protocol to which this rule applies.

The protocol type is required when creating a firewall rule.
This value can either be one of the following well known protocol strings (tcp, udp, icmp, esp, ah, ipip, sctp), or the IP protocol number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_firewall_policy_rule#ip_protocol ComputeFirewallPolicyRule#ip_protocol}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4Configs.property.ports"></a>

```typescript
public readonly ports: string[];
```

- *Type:* string[]

An optional list of ports to which this rule applies.

This field is only applicable for UDP or TCP protocol. Each entry must be either an integer or a range. If not specified, this rule applies to connections through any port.
Example inputs include: ["22"], ["80","443"], and ["12345-12349"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_firewall_policy_rule#ports ComputeFirewallPolicyRule#ports}

---

### ComputeFirewallPolicyRuleMatchSrcSecureTags <a name="ComputeFirewallPolicyRuleMatchSrcSecureTags" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTags.Initializer"></a>

```typescript
import { computeFirewallPolicyRule } from '@cdktf/provider-google'

const computeFirewallPolicyRuleMatchSrcSecureTags: computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTags.property.name">name</a></code> | <code>string</code> | Name of the secure tag, created with TagManager's TagValue API. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTags.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the secure tag, created with TagManager's TagValue API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_firewall_policy_rule#name ComputeFirewallPolicyRule#name}

---

### ComputeFirewallPolicyRuleTargetSecureTags <a name="ComputeFirewallPolicyRuleTargetSecureTags" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTags.Initializer"></a>

```typescript
import { computeFirewallPolicyRule } from '@cdktf/provider-google'

const computeFirewallPolicyRuleTargetSecureTags: computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTags.property.name">name</a></code> | <code>string</code> | Name of the secure tag, created with TagManager's TagValue API. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTags.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the secure tag, created with TagManager's TagValue API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_firewall_policy_rule#name ComputeFirewallPolicyRule#name}

---

### ComputeFirewallPolicyRuleTimeouts <a name="ComputeFirewallPolicyRuleTimeouts" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeouts.Initializer"></a>

```typescript
import { computeFirewallPolicyRule } from '@cdktf/provider-google'

const computeFirewallPolicyRuleTimeouts: computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_firewall_policy_rule#create ComputeFirewallPolicyRule#create}. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_firewall_policy_rule#delete ComputeFirewallPolicyRule#delete}. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_firewall_policy_rule#update ComputeFirewallPolicyRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_firewall_policy_rule#create ComputeFirewallPolicyRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_firewall_policy_rule#delete ComputeFirewallPolicyRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_firewall_policy_rule#update ComputeFirewallPolicyRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeFirewallPolicyRuleMatchLayer4ConfigsList <a name="ComputeFirewallPolicyRuleMatchLayer4ConfigsList" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsList.Initializer"></a>

```typescript
import { computeFirewallPolicyRule } from '@cdktf/provider-google'

new computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsList.get"></a>

```typescript
public get(index: number): ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4Configs">ComputeFirewallPolicyRuleMatchLayer4Configs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeFirewallPolicyRuleMatchLayer4Configs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4Configs">ComputeFirewallPolicyRuleMatchLayer4Configs</a>[]

---


### ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference <a name="ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer"></a>

```typescript
import { computeFirewallPolicyRule } from '@cdktf/provider-google'

new computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.resetPorts">resetPorts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPorts` <a name="resetPorts" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.resetPorts"></a>

```typescript
public resetPorts(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ipProtocolInput">ipProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.portsInput">portsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ports">ports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4Configs">ComputeFirewallPolicyRuleMatchLayer4Configs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipProtocolInput`<sup>Optional</sup> <a name="ipProtocolInput" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ipProtocolInput"></a>

```typescript
public readonly ipProtocolInput: string;
```

- *Type:* string

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.portsInput"></a>

```typescript
public readonly portsInput: string[];
```

- *Type:* string[]

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ports"></a>

```typescript
public readonly ports: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeFirewallPolicyRuleMatchLayer4Configs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4Configs">ComputeFirewallPolicyRuleMatchLayer4Configs</a>

---


### ComputeFirewallPolicyRuleMatchOutputReference <a name="ComputeFirewallPolicyRuleMatchOutputReference" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.Initializer"></a>

```typescript
import { computeFirewallPolicyRule } from '@cdktf/provider-google'

new computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.putLayer4Configs">putLayer4Configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.putSrcSecureTags">putSrcSecureTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.resetDestAddressGroups">resetDestAddressGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.resetDestFqdns">resetDestFqdns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.resetDestIpRanges">resetDestIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.resetDestRegionCodes">resetDestRegionCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.resetDestThreatIntelligences">resetDestThreatIntelligences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.resetSrcAddressGroups">resetSrcAddressGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.resetSrcFqdns">resetSrcFqdns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.resetSrcIpRanges">resetSrcIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.resetSrcRegionCodes">resetSrcRegionCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.resetSrcSecureTags">resetSrcSecureTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.resetSrcThreatIntelligences">resetSrcThreatIntelligences</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLayer4Configs` <a name="putLayer4Configs" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.putLayer4Configs"></a>

```typescript
public putLayer4Configs(value: IResolvable | ComputeFirewallPolicyRuleMatchLayer4Configs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.putLayer4Configs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4Configs">ComputeFirewallPolicyRuleMatchLayer4Configs</a>[]

---

##### `putSrcSecureTags` <a name="putSrcSecureTags" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.putSrcSecureTags"></a>

```typescript
public putSrcSecureTags(value: IResolvable | ComputeFirewallPolicyRuleMatchSrcSecureTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.putSrcSecureTags.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTags">ComputeFirewallPolicyRuleMatchSrcSecureTags</a>[]

---

##### `resetDestAddressGroups` <a name="resetDestAddressGroups" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.resetDestAddressGroups"></a>

```typescript
public resetDestAddressGroups(): void
```

##### `resetDestFqdns` <a name="resetDestFqdns" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.resetDestFqdns"></a>

```typescript
public resetDestFqdns(): void
```

##### `resetDestIpRanges` <a name="resetDestIpRanges" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.resetDestIpRanges"></a>

```typescript
public resetDestIpRanges(): void
```

##### `resetDestRegionCodes` <a name="resetDestRegionCodes" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.resetDestRegionCodes"></a>

```typescript
public resetDestRegionCodes(): void
```

##### `resetDestThreatIntelligences` <a name="resetDestThreatIntelligences" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.resetDestThreatIntelligences"></a>

```typescript
public resetDestThreatIntelligences(): void
```

##### `resetSrcAddressGroups` <a name="resetSrcAddressGroups" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.resetSrcAddressGroups"></a>

```typescript
public resetSrcAddressGroups(): void
```

##### `resetSrcFqdns` <a name="resetSrcFqdns" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.resetSrcFqdns"></a>

```typescript
public resetSrcFqdns(): void
```

##### `resetSrcIpRanges` <a name="resetSrcIpRanges" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.resetSrcIpRanges"></a>

```typescript
public resetSrcIpRanges(): void
```

##### `resetSrcRegionCodes` <a name="resetSrcRegionCodes" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.resetSrcRegionCodes"></a>

```typescript
public resetSrcRegionCodes(): void
```

##### `resetSrcSecureTags` <a name="resetSrcSecureTags" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.resetSrcSecureTags"></a>

```typescript
public resetSrcSecureTags(): void
```

##### `resetSrcThreatIntelligences` <a name="resetSrcThreatIntelligences" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.resetSrcThreatIntelligences"></a>

```typescript
public resetSrcThreatIntelligences(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.layer4Configs">layer4Configs</a></code> | <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsList">ComputeFirewallPolicyRuleMatchLayer4ConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.srcSecureTags">srcSecureTags</a></code> | <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsList">ComputeFirewallPolicyRuleMatchSrcSecureTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.destAddressGroupsInput">destAddressGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.destFqdnsInput">destFqdnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.destIpRangesInput">destIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.destRegionCodesInput">destRegionCodesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.destThreatIntelligencesInput">destThreatIntelligencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.layer4ConfigsInput">layer4ConfigsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4Configs">ComputeFirewallPolicyRuleMatchLayer4Configs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.srcAddressGroupsInput">srcAddressGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.srcFqdnsInput">srcFqdnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.srcIpRangesInput">srcIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.srcRegionCodesInput">srcRegionCodesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.srcSecureTagsInput">srcSecureTagsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTags">ComputeFirewallPolicyRuleMatchSrcSecureTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.srcThreatIntelligencesInput">srcThreatIntelligencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.destAddressGroups">destAddressGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.destFqdns">destFqdns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.destIpRanges">destIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.destRegionCodes">destRegionCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.destThreatIntelligences">destThreatIntelligences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.srcAddressGroups">srcAddressGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.srcFqdns">srcFqdns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.srcIpRanges">srcIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.srcRegionCodes">srcRegionCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.srcThreatIntelligences">srcThreatIntelligences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatch">ComputeFirewallPolicyRuleMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `layer4Configs`<sup>Required</sup> <a name="layer4Configs" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.layer4Configs"></a>

```typescript
public readonly layer4Configs: ComputeFirewallPolicyRuleMatchLayer4ConfigsList;
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4ConfigsList">ComputeFirewallPolicyRuleMatchLayer4ConfigsList</a>

---

##### `srcSecureTags`<sup>Required</sup> <a name="srcSecureTags" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.srcSecureTags"></a>

```typescript
public readonly srcSecureTags: ComputeFirewallPolicyRuleMatchSrcSecureTagsList;
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsList">ComputeFirewallPolicyRuleMatchSrcSecureTagsList</a>

---

##### `destAddressGroupsInput`<sup>Optional</sup> <a name="destAddressGroupsInput" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.destAddressGroupsInput"></a>

```typescript
public readonly destAddressGroupsInput: string[];
```

- *Type:* string[]

---

##### `destFqdnsInput`<sup>Optional</sup> <a name="destFqdnsInput" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.destFqdnsInput"></a>

```typescript
public readonly destFqdnsInput: string[];
```

- *Type:* string[]

---

##### `destIpRangesInput`<sup>Optional</sup> <a name="destIpRangesInput" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.destIpRangesInput"></a>

```typescript
public readonly destIpRangesInput: string[];
```

- *Type:* string[]

---

##### `destRegionCodesInput`<sup>Optional</sup> <a name="destRegionCodesInput" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.destRegionCodesInput"></a>

```typescript
public readonly destRegionCodesInput: string[];
```

- *Type:* string[]

---

##### `destThreatIntelligencesInput`<sup>Optional</sup> <a name="destThreatIntelligencesInput" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.destThreatIntelligencesInput"></a>

```typescript
public readonly destThreatIntelligencesInput: string[];
```

- *Type:* string[]

---

##### `layer4ConfigsInput`<sup>Optional</sup> <a name="layer4ConfigsInput" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.layer4ConfigsInput"></a>

```typescript
public readonly layer4ConfigsInput: IResolvable | ComputeFirewallPolicyRuleMatchLayer4Configs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchLayer4Configs">ComputeFirewallPolicyRuleMatchLayer4Configs</a>[]

---

##### `srcAddressGroupsInput`<sup>Optional</sup> <a name="srcAddressGroupsInput" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.srcAddressGroupsInput"></a>

```typescript
public readonly srcAddressGroupsInput: string[];
```

- *Type:* string[]

---

##### `srcFqdnsInput`<sup>Optional</sup> <a name="srcFqdnsInput" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.srcFqdnsInput"></a>

```typescript
public readonly srcFqdnsInput: string[];
```

- *Type:* string[]

---

##### `srcIpRangesInput`<sup>Optional</sup> <a name="srcIpRangesInput" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.srcIpRangesInput"></a>

```typescript
public readonly srcIpRangesInput: string[];
```

- *Type:* string[]

---

##### `srcRegionCodesInput`<sup>Optional</sup> <a name="srcRegionCodesInput" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.srcRegionCodesInput"></a>

```typescript
public readonly srcRegionCodesInput: string[];
```

- *Type:* string[]

---

##### `srcSecureTagsInput`<sup>Optional</sup> <a name="srcSecureTagsInput" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.srcSecureTagsInput"></a>

```typescript
public readonly srcSecureTagsInput: IResolvable | ComputeFirewallPolicyRuleMatchSrcSecureTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTags">ComputeFirewallPolicyRuleMatchSrcSecureTags</a>[]

---

##### `srcThreatIntelligencesInput`<sup>Optional</sup> <a name="srcThreatIntelligencesInput" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.srcThreatIntelligencesInput"></a>

```typescript
public readonly srcThreatIntelligencesInput: string[];
```

- *Type:* string[]

---

##### `destAddressGroups`<sup>Required</sup> <a name="destAddressGroups" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.destAddressGroups"></a>

```typescript
public readonly destAddressGroups: string[];
```

- *Type:* string[]

---

##### `destFqdns`<sup>Required</sup> <a name="destFqdns" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.destFqdns"></a>

```typescript
public readonly destFqdns: string[];
```

- *Type:* string[]

---

##### `destIpRanges`<sup>Required</sup> <a name="destIpRanges" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.destIpRanges"></a>

```typescript
public readonly destIpRanges: string[];
```

- *Type:* string[]

---

##### `destRegionCodes`<sup>Required</sup> <a name="destRegionCodes" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.destRegionCodes"></a>

```typescript
public readonly destRegionCodes: string[];
```

- *Type:* string[]

---

##### `destThreatIntelligences`<sup>Required</sup> <a name="destThreatIntelligences" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.destThreatIntelligences"></a>

```typescript
public readonly destThreatIntelligences: string[];
```

- *Type:* string[]

---

##### `srcAddressGroups`<sup>Required</sup> <a name="srcAddressGroups" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.srcAddressGroups"></a>

```typescript
public readonly srcAddressGroups: string[];
```

- *Type:* string[]

---

##### `srcFqdns`<sup>Required</sup> <a name="srcFqdns" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.srcFqdns"></a>

```typescript
public readonly srcFqdns: string[];
```

- *Type:* string[]

---

##### `srcIpRanges`<sup>Required</sup> <a name="srcIpRanges" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.srcIpRanges"></a>

```typescript
public readonly srcIpRanges: string[];
```

- *Type:* string[]

---

##### `srcRegionCodes`<sup>Required</sup> <a name="srcRegionCodes" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.srcRegionCodes"></a>

```typescript
public readonly srcRegionCodes: string[];
```

- *Type:* string[]

---

##### `srcThreatIntelligences`<sup>Required</sup> <a name="srcThreatIntelligences" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.srcThreatIntelligences"></a>

```typescript
public readonly srcThreatIntelligences: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeFirewallPolicyRuleMatch;
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatch">ComputeFirewallPolicyRuleMatch</a>

---


### ComputeFirewallPolicyRuleMatchSrcSecureTagsList <a name="ComputeFirewallPolicyRuleMatchSrcSecureTagsList" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsList.Initializer"></a>

```typescript
import { computeFirewallPolicyRule } from '@cdktf/provider-google'

new computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsList.get"></a>

```typescript
public get(index: number): ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTags">ComputeFirewallPolicyRuleMatchSrcSecureTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeFirewallPolicyRuleMatchSrcSecureTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTags">ComputeFirewallPolicyRuleMatchSrcSecureTags</a>[]

---


### ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference <a name="ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer"></a>

```typescript
import { computeFirewallPolicyRule } from '@cdktf/provider-google'

new computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTags">ComputeFirewallPolicyRuleMatchSrcSecureTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeFirewallPolicyRuleMatchSrcSecureTags;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleMatchSrcSecureTags">ComputeFirewallPolicyRuleMatchSrcSecureTags</a>

---


### ComputeFirewallPolicyRuleTargetSecureTagsList <a name="ComputeFirewallPolicyRuleTargetSecureTagsList" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsList.Initializer"></a>

```typescript
import { computeFirewallPolicyRule } from '@cdktf/provider-google'

new computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsList.get"></a>

```typescript
public get(index: number): ComputeFirewallPolicyRuleTargetSecureTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTags">ComputeFirewallPolicyRuleTargetSecureTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeFirewallPolicyRuleTargetSecureTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTags">ComputeFirewallPolicyRuleTargetSecureTags</a>[]

---


### ComputeFirewallPolicyRuleTargetSecureTagsOutputReference <a name="ComputeFirewallPolicyRuleTargetSecureTagsOutputReference" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer"></a>

```typescript
import { computeFirewallPolicyRule } from '@cdktf/provider-google'

new computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTags">ComputeFirewallPolicyRuleTargetSecureTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeFirewallPolicyRuleTargetSecureTags;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTargetSecureTags">ComputeFirewallPolicyRuleTargetSecureTags</a>

---


### ComputeFirewallPolicyRuleTimeoutsOutputReference <a name="ComputeFirewallPolicyRuleTimeoutsOutputReference" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeFirewallPolicyRule } from '@cdktf/provider-google'

new computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeouts">ComputeFirewallPolicyRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeFirewallPolicyRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeFirewallPolicyRule.ComputeFirewallPolicyRuleTimeouts">ComputeFirewallPolicyRuleTimeouts</a>

---



