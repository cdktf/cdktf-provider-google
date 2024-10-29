# `computeSecurityPolicyRule` Submodule <a name="`computeSecurityPolicyRule` Submodule" id="@cdktf/provider-google.computeSecurityPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeSecurityPolicyRuleA <a name="ComputeSecurityPolicyRuleA" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule google_compute_security_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.Initializer"></a>

```typescript
import { computeSecurityPolicyRule } from '@cdktf/provider-google'

new computeSecurityPolicyRule.ComputeSecurityPolicyRuleA(scope: Construct, id: string, config: ComputeSecurityPolicyRuleAConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig">ComputeSecurityPolicyRuleAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig">ComputeSecurityPolicyRuleAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.putMatch">putMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.putPreconfiguredWafConfig">putPreconfiguredWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.putRateLimitOptions">putRateLimitOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.resetMatch">resetMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.resetPreconfiguredWafConfig">resetPreconfiguredWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.resetPreview">resetPreview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.resetRateLimitOptions">resetRateLimitOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMatch` <a name="putMatch" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.putMatch"></a>

```typescript
public putMatch(value: ComputeSecurityPolicyRuleMatchA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchA">ComputeSecurityPolicyRuleMatchA</a>

---

##### `putPreconfiguredWafConfig` <a name="putPreconfiguredWafConfig" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.putPreconfiguredWafConfig"></a>

```typescript
public putPreconfiguredWafConfig(value: ComputeSecurityPolicyRulePreconfiguredWafConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.putPreconfiguredWafConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfig">ComputeSecurityPolicyRulePreconfiguredWafConfig</a>

---

##### `putRateLimitOptions` <a name="putRateLimitOptions" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.putRateLimitOptions"></a>

```typescript
public putRateLimitOptions(value: ComputeSecurityPolicyRuleRateLimitOptionsA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.putRateLimitOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA">ComputeSecurityPolicyRuleRateLimitOptionsA</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeSecurityPolicyRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeouts">ComputeSecurityPolicyRuleTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMatch` <a name="resetMatch" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.resetMatch"></a>

```typescript
public resetMatch(): void
```

##### `resetPreconfiguredWafConfig` <a name="resetPreconfiguredWafConfig" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.resetPreconfiguredWafConfig"></a>

```typescript
public resetPreconfiguredWafConfig(): void
```

##### `resetPreview` <a name="resetPreview" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.resetPreview"></a>

```typescript
public resetPreview(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRateLimitOptions` <a name="resetRateLimitOptions" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.resetRateLimitOptions"></a>

```typescript
public resetRateLimitOptions(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeSecurityPolicyRuleA resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.isConstruct"></a>

```typescript
import { computeSecurityPolicyRule } from '@cdktf/provider-google'

computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.isTerraformElement"></a>

```typescript
import { computeSecurityPolicyRule } from '@cdktf/provider-google'

computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.isTerraformResource"></a>

```typescript
import { computeSecurityPolicyRule } from '@cdktf/provider-google'

computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.generateConfigForImport"></a>

```typescript
import { computeSecurityPolicyRule } from '@cdktf/provider-google'

computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComputeSecurityPolicyRuleA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeSecurityPolicyRuleA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeSecurityPolicyRuleA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeSecurityPolicyRuleA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.match">match</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference">ComputeSecurityPolicyRuleMatchAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.preconfiguredWafConfig">preconfiguredWafConfig</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference">ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.rateLimitOptions">rateLimitOptions</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference">ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference">ComputeSecurityPolicyRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.matchInput">matchInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchA">ComputeSecurityPolicyRuleMatchA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.preconfiguredWafConfigInput">preconfiguredWafConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfig">ComputeSecurityPolicyRulePreconfiguredWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.previewInput">previewInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.rateLimitOptionsInput">rateLimitOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA">ComputeSecurityPolicyRuleRateLimitOptionsA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.securityPolicyInput">securityPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeouts">ComputeSecurityPolicyRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.preview">preview</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.securityPolicy">securityPolicy</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.match"></a>

```typescript
public readonly match: ComputeSecurityPolicyRuleMatchAOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference">ComputeSecurityPolicyRuleMatchAOutputReference</a>

---

##### `preconfiguredWafConfig`<sup>Required</sup> <a name="preconfiguredWafConfig" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.preconfiguredWafConfig"></a>

```typescript
public readonly preconfiguredWafConfig: ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference">ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference</a>

---

##### `rateLimitOptions`<sup>Required</sup> <a name="rateLimitOptions" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.rateLimitOptions"></a>

```typescript
public readonly rateLimitOptions: ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference">ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeSecurityPolicyRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference">ComputeSecurityPolicyRuleTimeoutsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.matchInput"></a>

```typescript
public readonly matchInput: ComputeSecurityPolicyRuleMatchA;
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchA">ComputeSecurityPolicyRuleMatchA</a>

---

##### `preconfiguredWafConfigInput`<sup>Optional</sup> <a name="preconfiguredWafConfigInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.preconfiguredWafConfigInput"></a>

```typescript
public readonly preconfiguredWafConfigInput: ComputeSecurityPolicyRulePreconfiguredWafConfig;
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfig">ComputeSecurityPolicyRulePreconfiguredWafConfig</a>

---

##### `previewInput`<sup>Optional</sup> <a name="previewInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.previewInput"></a>

```typescript
public readonly previewInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `rateLimitOptionsInput`<sup>Optional</sup> <a name="rateLimitOptionsInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.rateLimitOptionsInput"></a>

```typescript
public readonly rateLimitOptionsInput: ComputeSecurityPolicyRuleRateLimitOptionsA;
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA">ComputeSecurityPolicyRuleRateLimitOptionsA</a>

---

##### `securityPolicyInput`<sup>Optional</sup> <a name="securityPolicyInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.securityPolicyInput"></a>

```typescript
public readonly securityPolicyInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeSecurityPolicyRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeouts">ComputeSecurityPolicyRuleTimeouts</a>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `preview`<sup>Required</sup> <a name="preview" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.preview"></a>

```typescript
public readonly preview: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `securityPolicy`<sup>Required</sup> <a name="securityPolicy" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.securityPolicy"></a>

```typescript
public readonly securityPolicy: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeSecurityPolicyRuleAConfig <a name="ComputeSecurityPolicyRuleAConfig" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.Initializer"></a>

```typescript
import { computeSecurityPolicyRule } from '@cdktf/provider-google'

const computeSecurityPolicyRuleAConfig: computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.action">action</a></code> | <code>string</code> | The Action to perform when the rule is matched. The following are the valid actions:. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.priority">priority</a></code> | <code>number</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.securityPolicy">securityPolicy</a></code> | <code>string</code> | The name of the security policy this rule belongs to. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#id ComputeSecurityPolicyRuleA#id}. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.match">match</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchA">ComputeSecurityPolicyRuleMatchA</a></code> | match block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.preconfiguredWafConfig">preconfiguredWafConfig</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfig">ComputeSecurityPolicyRulePreconfiguredWafConfig</a></code> | preconfigured_waf_config block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.preview">preview</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, the specified action is not enforced. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#project ComputeSecurityPolicyRuleA#project}. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.rateLimitOptions">rateLimitOptions</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA">ComputeSecurityPolicyRuleRateLimitOptionsA</a></code> | rate_limit_options block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeouts">ComputeSecurityPolicyRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

The Action to perform when the rule is matched. The following are the valid actions:.

* allow: allow access to target.

* deny(STATUS): deny access to target, returns the HTTP response code specified. Valid values for STATUS are 403, 404, and 502.

* rate_based_ban: limit client traffic to the configured threshold and ban the client if the traffic exceeds the threshold. Configure parameters for this action in RateLimitOptions. Requires rateLimitOptions to be set.

* redirect: redirect to a different target. This can either be an internal reCAPTCHA redirect, or an external URL-based redirect via a 302 response. Parameters for this action can be configured via redirectOptions. This action is only supported in Global Security Policies of type CLOUD_ARMOR.

* throttle: limit client traffic to the configured threshold. Configure parameters for this action in rateLimitOptions. Requires rateLimitOptions to be set for this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#action ComputeSecurityPolicyRuleA#action}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

An integer indicating the priority of a rule in the list.

The priority must be a positive value between 0 and 2147483647.
Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#priority ComputeSecurityPolicyRuleA#priority}

---

##### `securityPolicy`<sup>Required</sup> <a name="securityPolicy" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.securityPolicy"></a>

```typescript
public readonly securityPolicy: string;
```

- *Type:* string

The name of the security policy this rule belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#security_policy ComputeSecurityPolicyRuleA#security_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#description ComputeSecurityPolicyRuleA#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#id ComputeSecurityPolicyRuleA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.match"></a>

```typescript
public readonly match: ComputeSecurityPolicyRuleMatchA;
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchA">ComputeSecurityPolicyRuleMatchA</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#match ComputeSecurityPolicyRuleA#match}

---

##### `preconfiguredWafConfig`<sup>Optional</sup> <a name="preconfiguredWafConfig" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.preconfiguredWafConfig"></a>

```typescript
public readonly preconfiguredWafConfig: ComputeSecurityPolicyRulePreconfiguredWafConfig;
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfig">ComputeSecurityPolicyRulePreconfiguredWafConfig</a>

preconfigured_waf_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#preconfigured_waf_config ComputeSecurityPolicyRuleA#preconfigured_waf_config}

---

##### `preview`<sup>Optional</sup> <a name="preview" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.preview"></a>

```typescript
public readonly preview: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, the specified action is not enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#preview ComputeSecurityPolicyRuleA#preview}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#project ComputeSecurityPolicyRuleA#project}.

---

##### `rateLimitOptions`<sup>Optional</sup> <a name="rateLimitOptions" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.rateLimitOptions"></a>

```typescript
public readonly rateLimitOptions: ComputeSecurityPolicyRuleRateLimitOptionsA;
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA">ComputeSecurityPolicyRuleRateLimitOptionsA</a>

rate_limit_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#rate_limit_options ComputeSecurityPolicyRuleA#rate_limit_options}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeSecurityPolicyRuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeouts">ComputeSecurityPolicyRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#timeouts ComputeSecurityPolicyRuleA#timeouts}

---

### ComputeSecurityPolicyRuleMatchA <a name="ComputeSecurityPolicyRuleMatchA" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchA.Initializer"></a>

```typescript
import { computeSecurityPolicyRule } from '@cdktf/provider-google'

const computeSecurityPolicyRuleMatchA: computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchA.property.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigA">ComputeSecurityPolicyRuleMatchConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchA.property.expr">expr</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprA">ComputeSecurityPolicyRuleMatchExprA</a></code> | expr block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchA.property.exprOptions">exprOptions</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsA">ComputeSecurityPolicyRuleMatchExprOptionsA</a></code> | expr_options block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchA.property.versionedExpr">versionedExpr</a></code> | <code>string</code> | Preconfigured versioned expression. |

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchA.property.config"></a>

```typescript
public readonly config: ComputeSecurityPolicyRuleMatchConfigA;
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigA">ComputeSecurityPolicyRuleMatchConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#config ComputeSecurityPolicyRuleA#config}

---

##### `expr`<sup>Optional</sup> <a name="expr" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchA.property.expr"></a>

```typescript
public readonly expr: ComputeSecurityPolicyRuleMatchExprA;
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprA">ComputeSecurityPolicyRuleMatchExprA</a>

expr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#expr ComputeSecurityPolicyRuleA#expr}

---

##### `exprOptions`<sup>Optional</sup> <a name="exprOptions" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchA.property.exprOptions"></a>

```typescript
public readonly exprOptions: ComputeSecurityPolicyRuleMatchExprOptionsA;
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsA">ComputeSecurityPolicyRuleMatchExprOptionsA</a>

expr_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#expr_options ComputeSecurityPolicyRuleA#expr_options}

---

##### `versionedExpr`<sup>Optional</sup> <a name="versionedExpr" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchA.property.versionedExpr"></a>

```typescript
public readonly versionedExpr: string;
```

- *Type:* string

Preconfigured versioned expression.

If this field is specified, config must also be specified.
Available preconfigured expressions along with their requirements are: SRC_IPS_V1 - must specify the corresponding srcIpRange field in config. Possible values: ["SRC_IPS_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#versioned_expr ComputeSecurityPolicyRuleA#versioned_expr}

---

### ComputeSecurityPolicyRuleMatchConfigA <a name="ComputeSecurityPolicyRuleMatchConfigA" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigA.Initializer"></a>

```typescript
import { computeSecurityPolicyRule } from '@cdktf/provider-google'

const computeSecurityPolicyRuleMatchConfigA: computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigA.property.srcIpRanges">srcIpRanges</a></code> | <code>string[]</code> | CIDR IP address range. Maximum number of srcIpRanges allowed is 10. |

---

##### `srcIpRanges`<sup>Optional</sup> <a name="srcIpRanges" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigA.property.srcIpRanges"></a>

```typescript
public readonly srcIpRanges: string[];
```

- *Type:* string[]

CIDR IP address range. Maximum number of srcIpRanges allowed is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#src_ip_ranges ComputeSecurityPolicyRuleA#src_ip_ranges}

---

### ComputeSecurityPolicyRuleMatchExprA <a name="ComputeSecurityPolicyRuleMatchExprA" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprA.Initializer"></a>

```typescript
import { computeSecurityPolicyRule } from '@cdktf/provider-google'

const computeSecurityPolicyRuleMatchExprA: computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprA.property.expression">expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprA.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

The application context of the containing message determines which well-known feature set of CEL is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#expression ComputeSecurityPolicyRuleA#expression}

---

### ComputeSecurityPolicyRuleMatchExprOptionsA <a name="ComputeSecurityPolicyRuleMatchExprOptionsA" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsA.Initializer"></a>

```typescript
import { computeSecurityPolicyRule } from '@cdktf/provider-google'

const computeSecurityPolicyRuleMatchExprOptionsA: computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsA.property.recaptchaOptions">recaptchaOptions</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA">ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA</a></code> | recaptcha_options block. |

---

##### `recaptchaOptions`<sup>Required</sup> <a name="recaptchaOptions" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsA.property.recaptchaOptions"></a>

```typescript
public readonly recaptchaOptions: ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA;
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA">ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA</a>

recaptcha_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#recaptcha_options ComputeSecurityPolicyRuleA#recaptcha_options}

---

### ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA <a name="ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA.Initializer"></a>

```typescript
import { computeSecurityPolicyRule } from '@cdktf/provider-google'

const computeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA: computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA.property.actionTokenSiteKeys">actionTokenSiteKeys</a></code> | <code>string[]</code> | A list of site keys to be used during the validation of reCAPTCHA action-tokens. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA.property.sessionTokenSiteKeys">sessionTokenSiteKeys</a></code> | <code>string[]</code> | A list of site keys to be used during the validation of reCAPTCHA session-tokens. |

---

##### `actionTokenSiteKeys`<sup>Optional</sup> <a name="actionTokenSiteKeys" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA.property.actionTokenSiteKeys"></a>

```typescript
public readonly actionTokenSiteKeys: string[];
```

- *Type:* string[]

A list of site keys to be used during the validation of reCAPTCHA action-tokens.

The provided site keys need to be created from reCAPTCHA API under the same project where the security policy is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#action_token_site_keys ComputeSecurityPolicyRuleA#action_token_site_keys}

---

##### `sessionTokenSiteKeys`<sup>Optional</sup> <a name="sessionTokenSiteKeys" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA.property.sessionTokenSiteKeys"></a>

```typescript
public readonly sessionTokenSiteKeys: string[];
```

- *Type:* string[]

A list of site keys to be used during the validation of reCAPTCHA session-tokens.

The provided site keys need to be created from reCAPTCHA API under the same project where the security policy is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#session_token_site_keys ComputeSecurityPolicyRuleA#session_token_site_keys}

---

### ComputeSecurityPolicyRulePreconfiguredWafConfig <a name="ComputeSecurityPolicyRulePreconfiguredWafConfig" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfig.Initializer"></a>

```typescript
import { computeSecurityPolicyRule } from '@cdktf/provider-google'

const computeSecurityPolicyRulePreconfiguredWafConfig: computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfig.property.exclusion">exclusion</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion</a>[]</code> | exclusion block. |

---

##### `exclusion`<sup>Optional</sup> <a name="exclusion" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfig.property.exclusion"></a>

```typescript
public readonly exclusion: IResolvable | ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion</a>[]

exclusion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#exclusion ComputeSecurityPolicyRuleA#exclusion}

---

### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion.Initializer"></a>

```typescript
import { computeSecurityPolicyRule } from '@cdktf/provider-google'

const computeSecurityPolicyRulePreconfiguredWafConfigExclusion: computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion.property.targetRuleSet">targetRuleSet</a></code> | <code>string</code> | Target WAF rule set to apply the preconfigured WAF exclusion. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestCookie">requestCookie</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>[]</code> | request_cookie block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestHeader">requestHeader</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>[]</code> | request_header block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestQueryParam">requestQueryParam</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>[]</code> | request_query_param block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestUri">requestUri</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>[]</code> | request_uri block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion.property.targetRuleIds">targetRuleIds</a></code> | <code>string[]</code> | A list of target rule IDs under the WAF rule set to apply the preconfigured WAF exclusion. |

---

##### `targetRuleSet`<sup>Required</sup> <a name="targetRuleSet" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion.property.targetRuleSet"></a>

```typescript
public readonly targetRuleSet: string;
```

- *Type:* string

Target WAF rule set to apply the preconfigured WAF exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#target_rule_set ComputeSecurityPolicyRuleA#target_rule_set}

---

##### `requestCookie`<sup>Optional</sup> <a name="requestCookie" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestCookie"></a>

```typescript
public readonly requestCookie: IResolvable | ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>[]

request_cookie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#request_cookie ComputeSecurityPolicyRuleA#request_cookie}

---

##### `requestHeader`<sup>Optional</sup> <a name="requestHeader" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestHeader"></a>

```typescript
public readonly requestHeader: IResolvable | ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>[]

request_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#request_header ComputeSecurityPolicyRuleA#request_header}

---

##### `requestQueryParam`<sup>Optional</sup> <a name="requestQueryParam" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestQueryParam"></a>

```typescript
public readonly requestQueryParam: IResolvable | ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>[]

request_query_param block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#request_query_param ComputeSecurityPolicyRuleA#request_query_param}

---

##### `requestUri`<sup>Optional</sup> <a name="requestUri" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestUri"></a>

```typescript
public readonly requestUri: IResolvable | ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>[]

request_uri block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#request_uri ComputeSecurityPolicyRuleA#request_uri}

---

##### `targetRuleIds`<sup>Optional</sup> <a name="targetRuleIds" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion.property.targetRuleIds"></a>

```typescript
public readonly targetRuleIds: string[];
```

- *Type:* string[]

A list of target rule IDs under the WAF rule set to apply the preconfigured WAF exclusion.

If omitted, it refers to all the rule IDs under the WAF rule set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#target_rule_ids ComputeSecurityPolicyRuleA#target_rule_ids}

---

### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie.Initializer"></a>

```typescript
import { computeSecurityPolicyRule } from '@cdktf/provider-google'

const computeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie: computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie.property.operator">operator</a></code> | <code>string</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie.property.value">value</a></code> | <code>string</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#operator ComputeSecurityPolicyRuleA#operator}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#value ComputeSecurityPolicyRuleA#value}

---

### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader.Initializer"></a>

```typescript
import { computeSecurityPolicyRule } from '@cdktf/provider-google'

const computeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader: computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader.property.operator">operator</a></code> | <code>string</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader.property.value">value</a></code> | <code>string</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#operator ComputeSecurityPolicyRuleA#operator}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#value ComputeSecurityPolicyRuleA#value}

---

### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam.Initializer"></a>

```typescript
import { computeSecurityPolicyRule } from '@cdktf/provider-google'

const computeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam: computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam.property.operator">operator</a></code> | <code>string</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam.property.value">value</a></code> | <code>string</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#operator ComputeSecurityPolicyRuleA#operator}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#value ComputeSecurityPolicyRuleA#value}

---

### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri.Initializer"></a>

```typescript
import { computeSecurityPolicyRule } from '@cdktf/provider-google'

const computeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri: computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri.property.operator">operator</a></code> | <code>string</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri.property.value">value</a></code> | <code>string</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#operator ComputeSecurityPolicyRuleA#operator}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#value ComputeSecurityPolicyRuleA#value}

---

### ComputeSecurityPolicyRuleRateLimitOptionsA <a name="ComputeSecurityPolicyRuleRateLimitOptionsA" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA.Initializer"></a>

```typescript
import { computeSecurityPolicyRule } from '@cdktf/provider-google'

const computeSecurityPolicyRuleRateLimitOptionsA: computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA.property.banDurationSec">banDurationSec</a></code> | <code>number</code> | Can only be specified if the action for the rule is "rate_based_ban". |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA.property.banThreshold">banThreshold</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA">ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA</a></code> | ban_threshold block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA.property.conformAction">conformAction</a></code> | <code>string</code> | Action to take for requests that are under the configured rate limit threshold. Valid option is "allow" only. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA.property.enforceOnKey">enforceOnKey</a></code> | <code>string</code> | Determines the key to enforce the rateLimitThreshold on. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA.property.enforceOnKeyConfigs">enforceOnKeyConfigs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs">ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs</a>[]</code> | enforce_on_key_configs block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA.property.enforceOnKeyName">enforceOnKeyName</a></code> | <code>string</code> | Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA.property.exceedAction">exceedAction</a></code> | <code>string</code> | Action to take for requests that are above the configured rate limit threshold, to either deny with a specified HTTP response code, or redirect to a different endpoint. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA.property.exceedRedirectOptions">exceedRedirectOptions</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA">ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA</a></code> | exceed_redirect_options block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA.property.rateLimitThreshold">rateLimitThreshold</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA">ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA</a></code> | rate_limit_threshold block. |

---

##### `banDurationSec`<sup>Optional</sup> <a name="banDurationSec" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA.property.banDurationSec"></a>

```typescript
public readonly banDurationSec: number;
```

- *Type:* number

Can only be specified if the action for the rule is "rate_based_ban".

If specified, determines the time (in seconds) the traffic will continue to be banned by the rate limit after the rate falls below the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#ban_duration_sec ComputeSecurityPolicyRuleA#ban_duration_sec}

---

##### `banThreshold`<sup>Optional</sup> <a name="banThreshold" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA.property.banThreshold"></a>

```typescript
public readonly banThreshold: ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA;
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA">ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA</a>

ban_threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#ban_threshold ComputeSecurityPolicyRuleA#ban_threshold}

---

##### `conformAction`<sup>Optional</sup> <a name="conformAction" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA.property.conformAction"></a>

```typescript
public readonly conformAction: string;
```

- *Type:* string

Action to take for requests that are under the configured rate limit threshold. Valid option is "allow" only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#conform_action ComputeSecurityPolicyRuleA#conform_action}

---

##### `enforceOnKey`<sup>Optional</sup> <a name="enforceOnKey" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA.property.enforceOnKey"></a>

```typescript
public readonly enforceOnKey: string;
```

- *Type:* string

Determines the key to enforce the rateLimitThreshold on.

Possible values are:
* ALL: A single rate limit threshold is applied to all the requests matching this rule. This is the default value if "enforceOnKey" is not configured.
* IP: The source IP address of the request is the key. Each IP has this limit enforced separately.
* HTTP_HEADER: The value of the HTTP header whose name is configured under "enforceOnKeyName". The key value is truncated to the first 128 bytes of the header value. If no such header is present in the request, the key type defaults to ALL.
* XFF_IP: The first IP address (i.e. the originating client IP address) specified in the list of IPs under X-Forwarded-For HTTP header. If no such header is present or the value is not a valid IP, the key defaults to the source IP address of the request i.e. key type IP.
* HTTP_COOKIE: The value of the HTTP cookie whose name is configured under "enforceOnKeyName". The key value is truncated to the first 128 bytes of the cookie value. If no such cookie is present in the request, the key type defaults to ALL.
* HTTP_PATH: The URL path of the HTTP request. The key value is truncated to the first 128 bytes.
* SNI: Server name indication in the TLS session of the HTTPS request. The key value is truncated to the first 128 bytes. The key type defaults to ALL on a HTTP session.
* REGION_CODE: The country/region from which the request originates.
* TLS_JA3_FINGERPRINT: JA3 TLS/SSL fingerprint if the client connects using HTTPS, HTTP/2 or HTTP/3. If not available, the key type defaults to ALL.
* USER_IP: The IP address of the originating client, which is resolved based on "userIpRequestHeaders" configured with the security policy. If there is no "userIpRequestHeaders" configuration or an IP address cannot be resolved from it, the key type defaults to IP. Possible values: ["ALL", "IP", "HTTP_HEADER", "XFF_IP", "HTTP_COOKIE", "HTTP_PATH", "SNI", "REGION_CODE", "TLS_JA3_FINGERPRINT", "USER_IP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#enforce_on_key ComputeSecurityPolicyRuleA#enforce_on_key}

---

##### `enforceOnKeyConfigs`<sup>Optional</sup> <a name="enforceOnKeyConfigs" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA.property.enforceOnKeyConfigs"></a>

```typescript
public readonly enforceOnKeyConfigs: IResolvable | ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs">ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs</a>[]

enforce_on_key_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#enforce_on_key_configs ComputeSecurityPolicyRuleA#enforce_on_key_configs}

---

##### `enforceOnKeyName`<sup>Optional</sup> <a name="enforceOnKeyName" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA.property.enforceOnKeyName"></a>

```typescript
public readonly enforceOnKeyName: string;
```

- *Type:* string

Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value.

HTTP_COOKIE -- Name of the HTTP cookie whose value is taken as the key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#enforce_on_key_name ComputeSecurityPolicyRuleA#enforce_on_key_name}

---

##### `exceedAction`<sup>Optional</sup> <a name="exceedAction" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA.property.exceedAction"></a>

```typescript
public readonly exceedAction: string;
```

- *Type:* string

Action to take for requests that are above the configured rate limit threshold, to either deny with a specified HTTP response code, or redirect to a different endpoint.

Valid options are deny(STATUS), where valid values for STATUS are 403, 404, 429, and 502.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#exceed_action ComputeSecurityPolicyRuleA#exceed_action}

---

##### `exceedRedirectOptions`<sup>Optional</sup> <a name="exceedRedirectOptions" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA.property.exceedRedirectOptions"></a>

```typescript
public readonly exceedRedirectOptions: ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA;
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA">ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA</a>

exceed_redirect_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#exceed_redirect_options ComputeSecurityPolicyRuleA#exceed_redirect_options}

---

##### `rateLimitThreshold`<sup>Optional</sup> <a name="rateLimitThreshold" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA.property.rateLimitThreshold"></a>

```typescript
public readonly rateLimitThreshold: ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA;
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA">ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA</a>

rate_limit_threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#rate_limit_threshold ComputeSecurityPolicyRuleA#rate_limit_threshold}

---

### ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA <a name="ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA.Initializer"></a>

```typescript
import { computeSecurityPolicyRule } from '@cdktf/provider-google'

const computeSecurityPolicyRuleRateLimitOptionsBanThresholdA: computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA.property.count">count</a></code> | <code>number</code> | Number of HTTP(S) requests for calculating the threshold. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA.property.intervalSec">intervalSec</a></code> | <code>number</code> | Interval over which the threshold is computed. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Number of HTTP(S) requests for calculating the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#count ComputeSecurityPolicyRuleA#count}

---

##### `intervalSec`<sup>Optional</sup> <a name="intervalSec" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA.property.intervalSec"></a>

```typescript
public readonly intervalSec: number;
```

- *Type:* number

Interval over which the threshold is computed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#interval_sec ComputeSecurityPolicyRuleA#interval_sec}

---

### ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs <a name="ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs.Initializer"></a>

```typescript
import { computeSecurityPolicyRule } from '@cdktf/provider-google'

const computeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs: computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs.property.enforceOnKeyName">enforceOnKeyName</a></code> | <code>string</code> | Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs.property.enforceOnKeyType">enforceOnKeyType</a></code> | <code>string</code> | Determines the key to enforce the rateLimitThreshold on. |

---

##### `enforceOnKeyName`<sup>Optional</sup> <a name="enforceOnKeyName" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs.property.enforceOnKeyName"></a>

```typescript
public readonly enforceOnKeyName: string;
```

- *Type:* string

Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value.

HTTP_COOKIE -- Name of the HTTP cookie whose value is taken as the key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#enforce_on_key_name ComputeSecurityPolicyRuleA#enforce_on_key_name}

---

##### `enforceOnKeyType`<sup>Optional</sup> <a name="enforceOnKeyType" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs.property.enforceOnKeyType"></a>

```typescript
public readonly enforceOnKeyType: string;
```

- *Type:* string

Determines the key to enforce the rateLimitThreshold on.

Possible values are:
* ALL: A single rate limit threshold is applied to all the requests matching this rule. This is the default value if "enforceOnKeyConfigs" is not configured.
* IP: The source IP address of the request is the key. Each IP has this limit enforced separately.
* HTTP_HEADER: The value of the HTTP header whose name is configured under "enforceOnKeyName". The key value is truncated to the first 128 bytes of the header value. If no such header is present in the request, the key type defaults to ALL.
* XFF_IP: The first IP address (i.e. the originating client IP address) specified in the list of IPs under X-Forwarded-For HTTP header. If no such header is present or the value is not a valid IP, the key defaults to the source IP address of the request i.e. key type IP.
* HTTP_COOKIE: The value of the HTTP cookie whose name is configured under "enforceOnKeyName". The key value is truncated to the first 128 bytes of the cookie value. If no such cookie is present in the request, the key type defaults to ALL.
* HTTP_PATH: The URL path of the HTTP request. The key value is truncated to the first 128 bytes.
* SNI: Server name indication in the TLS session of the HTTPS request. The key value is truncated to the first 128 bytes. The key type defaults to ALL on a HTTP session.
* REGION_CODE: The country/region from which the request originates.
* TLS_JA3_FINGERPRINT: JA3 TLS/SSL fingerprint if the client connects using HTTPS, HTTP/2 or HTTP/3. If not available, the key type defaults to ALL.
* USER_IP: The IP address of the originating client, which is resolved based on "userIpRequestHeaders" configured with the security policy. If there is no "userIpRequestHeaders" configuration or an IP address cannot be resolved from it, the key type defaults to IP. Possible values: ["ALL", "IP", "HTTP_HEADER", "XFF_IP", "HTTP_COOKIE", "HTTP_PATH", "SNI", "REGION_CODE", "TLS_JA3_FINGERPRINT", "USER_IP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#enforce_on_key_type ComputeSecurityPolicyRuleA#enforce_on_key_type}

---

### ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA <a name="ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA.Initializer"></a>

```typescript
import { computeSecurityPolicyRule } from '@cdktf/provider-google'

const computeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA: computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA.property.target">target</a></code> | <code>string</code> | Target for the redirect action. This is required if the type is EXTERNAL_302 and cannot be specified for GOOGLE_RECAPTCHA. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA.property.type">type</a></code> | <code>string</code> | Type of the redirect action. |

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Target for the redirect action. This is required if the type is EXTERNAL_302 and cannot be specified for GOOGLE_RECAPTCHA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#target ComputeSecurityPolicyRuleA#target}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of the redirect action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#type ComputeSecurityPolicyRuleA#type}

---

### ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA <a name="ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA.Initializer"></a>

```typescript
import { computeSecurityPolicyRule } from '@cdktf/provider-google'

const computeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA: computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA.property.count">count</a></code> | <code>number</code> | Number of HTTP(S) requests for calculating the threshold. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA.property.intervalSec">intervalSec</a></code> | <code>number</code> | Interval over which the threshold is computed. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Number of HTTP(S) requests for calculating the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#count ComputeSecurityPolicyRuleA#count}

---

##### `intervalSec`<sup>Optional</sup> <a name="intervalSec" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA.property.intervalSec"></a>

```typescript
public readonly intervalSec: number;
```

- *Type:* number

Interval over which the threshold is computed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#interval_sec ComputeSecurityPolicyRuleA#interval_sec}

---

### ComputeSecurityPolicyRuleTimeouts <a name="ComputeSecurityPolicyRuleTimeouts" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeouts.Initializer"></a>

```typescript
import { computeSecurityPolicyRule } from '@cdktf/provider-google'

const computeSecurityPolicyRuleTimeouts: computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#create ComputeSecurityPolicyRuleA#create}. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#delete ComputeSecurityPolicyRuleA#delete}. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#update ComputeSecurityPolicyRuleA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#create ComputeSecurityPolicyRuleA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#delete ComputeSecurityPolicyRuleA#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_security_policy_rule#update ComputeSecurityPolicyRuleA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeSecurityPolicyRuleMatchAOutputReference <a name="ComputeSecurityPolicyRuleMatchAOutputReference" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.Initializer"></a>

```typescript
import { computeSecurityPolicyRule } from '@cdktf/provider-google'

new computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.putExpr">putExpr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.putExprOptions">putExprOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.resetExpr">resetExpr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.resetExprOptions">resetExprOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.resetVersionedExpr">resetVersionedExpr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfig` <a name="putConfig" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.putConfig"></a>

```typescript
public putConfig(value: ComputeSecurityPolicyRuleMatchConfigA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigA">ComputeSecurityPolicyRuleMatchConfigA</a>

---

##### `putExpr` <a name="putExpr" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.putExpr"></a>

```typescript
public putExpr(value: ComputeSecurityPolicyRuleMatchExprA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.putExpr.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprA">ComputeSecurityPolicyRuleMatchExprA</a>

---

##### `putExprOptions` <a name="putExprOptions" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.putExprOptions"></a>

```typescript
public putExprOptions(value: ComputeSecurityPolicyRuleMatchExprOptionsA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.putExprOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsA">ComputeSecurityPolicyRuleMatchExprOptionsA</a>

---

##### `resetConfig` <a name="resetConfig" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.resetConfig"></a>

```typescript
public resetConfig(): void
```

##### `resetExpr` <a name="resetExpr" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.resetExpr"></a>

```typescript
public resetExpr(): void
```

##### `resetExprOptions` <a name="resetExprOptions" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.resetExprOptions"></a>

```typescript
public resetExprOptions(): void
```

##### `resetVersionedExpr` <a name="resetVersionedExpr" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.resetVersionedExpr"></a>

```typescript
public resetVersionedExpr(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.property.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference">ComputeSecurityPolicyRuleMatchConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.property.expr">expr</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference">ComputeSecurityPolicyRuleMatchExprAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.property.exprOptions">exprOptions</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference">ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigA">ComputeSecurityPolicyRuleMatchConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.property.exprInput">exprInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprA">ComputeSecurityPolicyRuleMatchExprA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.property.exprOptionsInput">exprOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsA">ComputeSecurityPolicyRuleMatchExprOptionsA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.property.versionedExprInput">versionedExprInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.property.versionedExpr">versionedExpr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchA">ComputeSecurityPolicyRuleMatchA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.property.config"></a>

```typescript
public readonly config: ComputeSecurityPolicyRuleMatchConfigAOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference">ComputeSecurityPolicyRuleMatchConfigAOutputReference</a>

---

##### `expr`<sup>Required</sup> <a name="expr" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.property.expr"></a>

```typescript
public readonly expr: ComputeSecurityPolicyRuleMatchExprAOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference">ComputeSecurityPolicyRuleMatchExprAOutputReference</a>

---

##### `exprOptions`<sup>Required</sup> <a name="exprOptions" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.property.exprOptions"></a>

```typescript
public readonly exprOptions: ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference">ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.property.configInput"></a>

```typescript
public readonly configInput: ComputeSecurityPolicyRuleMatchConfigA;
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigA">ComputeSecurityPolicyRuleMatchConfigA</a>

---

##### `exprInput`<sup>Optional</sup> <a name="exprInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.property.exprInput"></a>

```typescript
public readonly exprInput: ComputeSecurityPolicyRuleMatchExprA;
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprA">ComputeSecurityPolicyRuleMatchExprA</a>

---

##### `exprOptionsInput`<sup>Optional</sup> <a name="exprOptionsInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.property.exprOptionsInput"></a>

```typescript
public readonly exprOptionsInput: ComputeSecurityPolicyRuleMatchExprOptionsA;
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsA">ComputeSecurityPolicyRuleMatchExprOptionsA</a>

---

##### `versionedExprInput`<sup>Optional</sup> <a name="versionedExprInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.property.versionedExprInput"></a>

```typescript
public readonly versionedExprInput: string;
```

- *Type:* string

---

##### `versionedExpr`<sup>Required</sup> <a name="versionedExpr" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.property.versionedExpr"></a>

```typescript
public readonly versionedExpr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeSecurityPolicyRuleMatchA;
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchA">ComputeSecurityPolicyRuleMatchA</a>

---


### ComputeSecurityPolicyRuleMatchConfigAOutputReference <a name="ComputeSecurityPolicyRuleMatchConfigAOutputReference" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.Initializer"></a>

```typescript
import { computeSecurityPolicyRule } from '@cdktf/provider-google'

new computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.resetSrcIpRanges">resetSrcIpRanges</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSrcIpRanges` <a name="resetSrcIpRanges" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.resetSrcIpRanges"></a>

```typescript
public resetSrcIpRanges(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.property.srcIpRangesInput">srcIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.property.srcIpRanges">srcIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigA">ComputeSecurityPolicyRuleMatchConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `srcIpRangesInput`<sup>Optional</sup> <a name="srcIpRangesInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.property.srcIpRangesInput"></a>

```typescript
public readonly srcIpRangesInput: string[];
```

- *Type:* string[]

---

##### `srcIpRanges`<sup>Required</sup> <a name="srcIpRanges" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.property.srcIpRanges"></a>

```typescript
public readonly srcIpRanges: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeSecurityPolicyRuleMatchConfigA;
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigA">ComputeSecurityPolicyRuleMatchConfigA</a>

---


### ComputeSecurityPolicyRuleMatchExprAOutputReference <a name="ComputeSecurityPolicyRuleMatchExprAOutputReference" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.Initializer"></a>

```typescript
import { computeSecurityPolicyRule } from '@cdktf/provider-google'

new computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprA">ComputeSecurityPolicyRuleMatchExprA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeSecurityPolicyRuleMatchExprA;
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprA">ComputeSecurityPolicyRuleMatchExprA</a>

---


### ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference <a name="ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.Initializer"></a>

```typescript
import { computeSecurityPolicyRule } from '@cdktf/provider-google'

new computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.putRecaptchaOptions">putRecaptchaOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRecaptchaOptions` <a name="putRecaptchaOptions" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.putRecaptchaOptions"></a>

```typescript
public putRecaptchaOptions(value: ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.putRecaptchaOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA">ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.property.recaptchaOptions">recaptchaOptions</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference">ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.property.recaptchaOptionsInput">recaptchaOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA">ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsA">ComputeSecurityPolicyRuleMatchExprOptionsA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `recaptchaOptions`<sup>Required</sup> <a name="recaptchaOptions" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.property.recaptchaOptions"></a>

```typescript
public readonly recaptchaOptions: ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference">ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference</a>

---

##### `recaptchaOptionsInput`<sup>Optional</sup> <a name="recaptchaOptionsInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.property.recaptchaOptionsInput"></a>

```typescript
public readonly recaptchaOptionsInput: ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA;
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA">ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeSecurityPolicyRuleMatchExprOptionsA;
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsA">ComputeSecurityPolicyRuleMatchExprOptionsA</a>

---


### ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference <a name="ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.Initializer"></a>

```typescript
import { computeSecurityPolicyRule } from '@cdktf/provider-google'

new computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.resetActionTokenSiteKeys">resetActionTokenSiteKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.resetSessionTokenSiteKeys">resetSessionTokenSiteKeys</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActionTokenSiteKeys` <a name="resetActionTokenSiteKeys" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.resetActionTokenSiteKeys"></a>

```typescript
public resetActionTokenSiteKeys(): void
```

##### `resetSessionTokenSiteKeys` <a name="resetSessionTokenSiteKeys" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.resetSessionTokenSiteKeys"></a>

```typescript
public resetSessionTokenSiteKeys(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.property.actionTokenSiteKeysInput">actionTokenSiteKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.property.sessionTokenSiteKeysInput">sessionTokenSiteKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.property.actionTokenSiteKeys">actionTokenSiteKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.property.sessionTokenSiteKeys">sessionTokenSiteKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA">ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionTokenSiteKeysInput`<sup>Optional</sup> <a name="actionTokenSiteKeysInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.property.actionTokenSiteKeysInput"></a>

```typescript
public readonly actionTokenSiteKeysInput: string[];
```

- *Type:* string[]

---

##### `sessionTokenSiteKeysInput`<sup>Optional</sup> <a name="sessionTokenSiteKeysInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.property.sessionTokenSiteKeysInput"></a>

```typescript
public readonly sessionTokenSiteKeysInput: string[];
```

- *Type:* string[]

---

##### `actionTokenSiteKeys`<sup>Required</sup> <a name="actionTokenSiteKeys" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.property.actionTokenSiteKeys"></a>

```typescript
public readonly actionTokenSiteKeys: string[];
```

- *Type:* string[]

---

##### `sessionTokenSiteKeys`<sup>Required</sup> <a name="sessionTokenSiteKeys" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.property.sessionTokenSiteKeys"></a>

```typescript
public readonly sessionTokenSiteKeys: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA;
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA">ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA</a>

---


### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer"></a>

```typescript
import { computeSecurityPolicyRule } from '@cdktf/provider-google'

new computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.get"></a>

```typescript
public get(index: number): ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion</a>[]

---


### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer"></a>

```typescript
import { computeSecurityPolicyRule } from '@cdktf/provider-google'

new computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestCookie">putRequestCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestHeader">putRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestQueryParam">putRequestQueryParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestUri">putRequestUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestCookie">resetRequestCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestHeader">resetRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestQueryParam">resetRequestQueryParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestUri">resetRequestUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetTargetRuleIds">resetTargetRuleIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRequestCookie` <a name="putRequestCookie" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestCookie"></a>

```typescript
public putRequestCookie(value: IResolvable | ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestCookie.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>[]

---

##### `putRequestHeader` <a name="putRequestHeader" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestHeader"></a>

```typescript
public putRequestHeader(value: IResolvable | ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestHeader.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>[]

---

##### `putRequestQueryParam` <a name="putRequestQueryParam" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestQueryParam"></a>

```typescript
public putRequestQueryParam(value: IResolvable | ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestQueryParam.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>[]

---

##### `putRequestUri` <a name="putRequestUri" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestUri"></a>

```typescript
public putRequestUri(value: IResolvable | ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestUri.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>[]

---

##### `resetRequestCookie` <a name="resetRequestCookie" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestCookie"></a>

```typescript
public resetRequestCookie(): void
```

##### `resetRequestHeader` <a name="resetRequestHeader" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestHeader"></a>

```typescript
public resetRequestHeader(): void
```

##### `resetRequestQueryParam` <a name="resetRequestQueryParam" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestQueryParam"></a>

```typescript
public resetRequestQueryParam(): void
```

##### `resetRequestUri` <a name="resetRequestUri" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestUri"></a>

```typescript
public resetRequestUri(): void
```

##### `resetTargetRuleIds` <a name="resetTargetRuleIds" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetTargetRuleIds"></a>

```typescript
public resetTargetRuleIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestCookie">requestCookie</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestHeader">requestHeader</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestQueryParam">requestQueryParam</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestUri">requestUri</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestCookieInput">requestCookieInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestHeaderInput">requestHeaderInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestQueryParamInput">requestQueryParamInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestUriInput">requestUriInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleIdsInput">targetRuleIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleSetInput">targetRuleSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleIds">targetRuleIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleSet">targetRuleSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `requestCookie`<sup>Required</sup> <a name="requestCookie" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestCookie"></a>

```typescript
public readonly requestCookie: ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList;
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList</a>

---

##### `requestHeader`<sup>Required</sup> <a name="requestHeader" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestHeader"></a>

```typescript
public readonly requestHeader: ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList;
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList</a>

---

##### `requestQueryParam`<sup>Required</sup> <a name="requestQueryParam" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestQueryParam"></a>

```typescript
public readonly requestQueryParam: ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList;
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList</a>

---

##### `requestUri`<sup>Required</sup> <a name="requestUri" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestUri"></a>

```typescript
public readonly requestUri: ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList;
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList</a>

---

##### `requestCookieInput`<sup>Optional</sup> <a name="requestCookieInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestCookieInput"></a>

```typescript
public readonly requestCookieInput: IResolvable | ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>[]

---

##### `requestHeaderInput`<sup>Optional</sup> <a name="requestHeaderInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestHeaderInput"></a>

```typescript
public readonly requestHeaderInput: IResolvable | ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>[]

---

##### `requestQueryParamInput`<sup>Optional</sup> <a name="requestQueryParamInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestQueryParamInput"></a>

```typescript
public readonly requestQueryParamInput: IResolvable | ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>[]

---

##### `requestUriInput`<sup>Optional</sup> <a name="requestUriInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestUriInput"></a>

```typescript
public readonly requestUriInput: IResolvable | ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>[]

---

##### `targetRuleIdsInput`<sup>Optional</sup> <a name="targetRuleIdsInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleIdsInput"></a>

```typescript
public readonly targetRuleIdsInput: string[];
```

- *Type:* string[]

---

##### `targetRuleSetInput`<sup>Optional</sup> <a name="targetRuleSetInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleSetInput"></a>

```typescript
public readonly targetRuleSetInput: string;
```

- *Type:* string

---

##### `targetRuleIds`<sup>Required</sup> <a name="targetRuleIds" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleIds"></a>

```typescript
public readonly targetRuleIds: string[];
```

- *Type:* string[]

---

##### `targetRuleSet`<sup>Required</sup> <a name="targetRuleSet" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleSet"></a>

```typescript
public readonly targetRuleSet: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion</a>

---


### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer"></a>

```typescript
import { computeSecurityPolicyRule } from '@cdktf/provider-google'

new computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.get"></a>

```typescript
public get(index: number): ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>[]

---


### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer"></a>

```typescript
import { computeSecurityPolicyRule } from '@cdktf/provider-google'

new computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>

---


### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer"></a>

```typescript
import { computeSecurityPolicyRule } from '@cdktf/provider-google'

new computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.get"></a>

```typescript
public get(index: number): ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>[]

---


### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer"></a>

```typescript
import { computeSecurityPolicyRule } from '@cdktf/provider-google'

new computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>

---


### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer"></a>

```typescript
import { computeSecurityPolicyRule } from '@cdktf/provider-google'

new computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.get"></a>

```typescript
public get(index: number): ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>[]

---


### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer"></a>

```typescript
import { computeSecurityPolicyRule } from '@cdktf/provider-google'

new computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>

---


### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer"></a>

```typescript
import { computeSecurityPolicyRule } from '@cdktf/provider-google'

new computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.get"></a>

```typescript
public get(index: number): ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>[]

---


### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer"></a>

```typescript
import { computeSecurityPolicyRule } from '@cdktf/provider-google'

new computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>

---


### ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer"></a>

```typescript
import { computeSecurityPolicyRule } from '@cdktf/provider-google'

new computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.putExclusion">putExclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.resetExclusion">resetExclusion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExclusion` <a name="putExclusion" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.putExclusion"></a>

```typescript
public putExclusion(value: IResolvable | ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.putExclusion.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion</a>[]

---

##### `resetExclusion` <a name="resetExclusion" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.resetExclusion"></a>

```typescript
public resetExclusion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.exclusion">exclusion</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.exclusionInput">exclusionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfig">ComputeSecurityPolicyRulePreconfiguredWafConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exclusion`<sup>Required</sup> <a name="exclusion" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.exclusion"></a>

```typescript
public readonly exclusion: ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList;
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList</a>

---

##### `exclusionInput`<sup>Optional</sup> <a name="exclusionInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.exclusionInput"></a>

```typescript
public readonly exclusionInput: IResolvable | ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeSecurityPolicyRulePreconfiguredWafConfig;
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfig">ComputeSecurityPolicyRulePreconfiguredWafConfig</a>

---


### ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference <a name="ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.Initializer"></a>

```typescript
import { computeSecurityPolicyRule } from '@cdktf/provider-google'

new computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.putBanThreshold">putBanThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.putEnforceOnKeyConfigs">putEnforceOnKeyConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.putExceedRedirectOptions">putExceedRedirectOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.putRateLimitThreshold">putRateLimitThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetBanDurationSec">resetBanDurationSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetBanThreshold">resetBanThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetConformAction">resetConformAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetEnforceOnKey">resetEnforceOnKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetEnforceOnKeyConfigs">resetEnforceOnKeyConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetEnforceOnKeyName">resetEnforceOnKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetExceedAction">resetExceedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetExceedRedirectOptions">resetExceedRedirectOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetRateLimitThreshold">resetRateLimitThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBanThreshold` <a name="putBanThreshold" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.putBanThreshold"></a>

```typescript
public putBanThreshold(value: ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.putBanThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA">ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA</a>

---

##### `putEnforceOnKeyConfigs` <a name="putEnforceOnKeyConfigs" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.putEnforceOnKeyConfigs"></a>

```typescript
public putEnforceOnKeyConfigs(value: IResolvable | ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.putEnforceOnKeyConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs">ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs</a>[]

---

##### `putExceedRedirectOptions` <a name="putExceedRedirectOptions" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.putExceedRedirectOptions"></a>

```typescript
public putExceedRedirectOptions(value: ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.putExceedRedirectOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA">ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA</a>

---

##### `putRateLimitThreshold` <a name="putRateLimitThreshold" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.putRateLimitThreshold"></a>

```typescript
public putRateLimitThreshold(value: ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.putRateLimitThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA">ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA</a>

---

##### `resetBanDurationSec` <a name="resetBanDurationSec" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetBanDurationSec"></a>

```typescript
public resetBanDurationSec(): void
```

##### `resetBanThreshold` <a name="resetBanThreshold" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetBanThreshold"></a>

```typescript
public resetBanThreshold(): void
```

##### `resetConformAction` <a name="resetConformAction" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetConformAction"></a>

```typescript
public resetConformAction(): void
```

##### `resetEnforceOnKey` <a name="resetEnforceOnKey" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetEnforceOnKey"></a>

```typescript
public resetEnforceOnKey(): void
```

##### `resetEnforceOnKeyConfigs` <a name="resetEnforceOnKeyConfigs" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetEnforceOnKeyConfigs"></a>

```typescript
public resetEnforceOnKeyConfigs(): void
```

##### `resetEnforceOnKeyName` <a name="resetEnforceOnKeyName" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetEnforceOnKeyName"></a>

```typescript
public resetEnforceOnKeyName(): void
```

##### `resetExceedAction` <a name="resetExceedAction" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetExceedAction"></a>

```typescript
public resetExceedAction(): void
```

##### `resetExceedRedirectOptions` <a name="resetExceedRedirectOptions" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetExceedRedirectOptions"></a>

```typescript
public resetExceedRedirectOptions(): void
```

##### `resetRateLimitThreshold` <a name="resetRateLimitThreshold" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetRateLimitThreshold"></a>

```typescript
public resetRateLimitThreshold(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.banThreshold">banThreshold</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference">ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.enforceOnKeyConfigs">enforceOnKeyConfigs</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList">ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.exceedRedirectOptions">exceedRedirectOptions</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference">ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.rateLimitThreshold">rateLimitThreshold</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference">ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.banDurationSecInput">banDurationSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.banThresholdInput">banThresholdInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA">ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.conformActionInput">conformActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.enforceOnKeyConfigsInput">enforceOnKeyConfigsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs">ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.enforceOnKeyInput">enforceOnKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.enforceOnKeyNameInput">enforceOnKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.exceedActionInput">exceedActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.exceedRedirectOptionsInput">exceedRedirectOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA">ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.rateLimitThresholdInput">rateLimitThresholdInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA">ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.banDurationSec">banDurationSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.conformAction">conformAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.enforceOnKey">enforceOnKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.enforceOnKeyName">enforceOnKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.exceedAction">exceedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA">ComputeSecurityPolicyRuleRateLimitOptionsA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `banThreshold`<sup>Required</sup> <a name="banThreshold" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.banThreshold"></a>

```typescript
public readonly banThreshold: ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference">ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference</a>

---

##### `enforceOnKeyConfigs`<sup>Required</sup> <a name="enforceOnKeyConfigs" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.enforceOnKeyConfigs"></a>

```typescript
public readonly enforceOnKeyConfigs: ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList;
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList">ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList</a>

---

##### `exceedRedirectOptions`<sup>Required</sup> <a name="exceedRedirectOptions" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.exceedRedirectOptions"></a>

```typescript
public readonly exceedRedirectOptions: ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference">ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference</a>

---

##### `rateLimitThreshold`<sup>Required</sup> <a name="rateLimitThreshold" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.rateLimitThreshold"></a>

```typescript
public readonly rateLimitThreshold: ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference">ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference</a>

---

##### `banDurationSecInput`<sup>Optional</sup> <a name="banDurationSecInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.banDurationSecInput"></a>

```typescript
public readonly banDurationSecInput: number;
```

- *Type:* number

---

##### `banThresholdInput`<sup>Optional</sup> <a name="banThresholdInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.banThresholdInput"></a>

```typescript
public readonly banThresholdInput: ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA;
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA">ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA</a>

---

##### `conformActionInput`<sup>Optional</sup> <a name="conformActionInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.conformActionInput"></a>

```typescript
public readonly conformActionInput: string;
```

- *Type:* string

---

##### `enforceOnKeyConfigsInput`<sup>Optional</sup> <a name="enforceOnKeyConfigsInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.enforceOnKeyConfigsInput"></a>

```typescript
public readonly enforceOnKeyConfigsInput: IResolvable | ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs">ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs</a>[]

---

##### `enforceOnKeyInput`<sup>Optional</sup> <a name="enforceOnKeyInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.enforceOnKeyInput"></a>

```typescript
public readonly enforceOnKeyInput: string;
```

- *Type:* string

---

##### `enforceOnKeyNameInput`<sup>Optional</sup> <a name="enforceOnKeyNameInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.enforceOnKeyNameInput"></a>

```typescript
public readonly enforceOnKeyNameInput: string;
```

- *Type:* string

---

##### `exceedActionInput`<sup>Optional</sup> <a name="exceedActionInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.exceedActionInput"></a>

```typescript
public readonly exceedActionInput: string;
```

- *Type:* string

---

##### `exceedRedirectOptionsInput`<sup>Optional</sup> <a name="exceedRedirectOptionsInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.exceedRedirectOptionsInput"></a>

```typescript
public readonly exceedRedirectOptionsInput: ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA;
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA">ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA</a>

---

##### `rateLimitThresholdInput`<sup>Optional</sup> <a name="rateLimitThresholdInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.rateLimitThresholdInput"></a>

```typescript
public readonly rateLimitThresholdInput: ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA;
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA">ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA</a>

---

##### `banDurationSec`<sup>Required</sup> <a name="banDurationSec" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.banDurationSec"></a>

```typescript
public readonly banDurationSec: number;
```

- *Type:* number

---

##### `conformAction`<sup>Required</sup> <a name="conformAction" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.conformAction"></a>

```typescript
public readonly conformAction: string;
```

- *Type:* string

---

##### `enforceOnKey`<sup>Required</sup> <a name="enforceOnKey" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.enforceOnKey"></a>

```typescript
public readonly enforceOnKey: string;
```

- *Type:* string

---

##### `enforceOnKeyName`<sup>Required</sup> <a name="enforceOnKeyName" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.enforceOnKeyName"></a>

```typescript
public readonly enforceOnKeyName: string;
```

- *Type:* string

---

##### `exceedAction`<sup>Required</sup> <a name="exceedAction" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.exceedAction"></a>

```typescript
public readonly exceedAction: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeSecurityPolicyRuleRateLimitOptionsA;
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA">ComputeSecurityPolicyRuleRateLimitOptionsA</a>

---


### ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference <a name="ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.Initializer"></a>

```typescript
import { computeSecurityPolicyRule } from '@cdktf/provider-google'

new computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.resetCount">resetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.resetIntervalSec">resetIntervalSec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCount` <a name="resetCount" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.resetCount"></a>

```typescript
public resetCount(): void
```

##### `resetIntervalSec` <a name="resetIntervalSec" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.resetIntervalSec"></a>

```typescript
public resetIntervalSec(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.property.intervalSecInput">intervalSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.property.intervalSec">intervalSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA">ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `intervalSecInput`<sup>Optional</sup> <a name="intervalSecInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.property.intervalSecInput"></a>

```typescript
public readonly intervalSecInput: number;
```

- *Type:* number

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `intervalSec`<sup>Required</sup> <a name="intervalSec" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.property.intervalSec"></a>

```typescript
public readonly intervalSec: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA;
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA">ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA</a>

---


### ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList <a name="ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer"></a>

```typescript
import { computeSecurityPolicyRule } from '@cdktf/provider-google'

new computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.get"></a>

```typescript
public get(index: number): ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs">ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs">ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs</a>[]

---


### ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference <a name="ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer"></a>

```typescript
import { computeSecurityPolicyRule } from '@cdktf/provider-google'

new computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.resetEnforceOnKeyName">resetEnforceOnKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.resetEnforceOnKeyType">resetEnforceOnKeyType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnforceOnKeyName` <a name="resetEnforceOnKeyName" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.resetEnforceOnKeyName"></a>

```typescript
public resetEnforceOnKeyName(): void
```

##### `resetEnforceOnKeyType` <a name="resetEnforceOnKeyType" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.resetEnforceOnKeyType"></a>

```typescript
public resetEnforceOnKeyType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyNameInput">enforceOnKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyTypeInput">enforceOnKeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyName">enforceOnKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyType">enforceOnKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs">ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enforceOnKeyNameInput`<sup>Optional</sup> <a name="enforceOnKeyNameInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyNameInput"></a>

```typescript
public readonly enforceOnKeyNameInput: string;
```

- *Type:* string

---

##### `enforceOnKeyTypeInput`<sup>Optional</sup> <a name="enforceOnKeyTypeInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyTypeInput"></a>

```typescript
public readonly enforceOnKeyTypeInput: string;
```

- *Type:* string

---

##### `enforceOnKeyName`<sup>Required</sup> <a name="enforceOnKeyName" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyName"></a>

```typescript
public readonly enforceOnKeyName: string;
```

- *Type:* string

---

##### `enforceOnKeyType`<sup>Required</sup> <a name="enforceOnKeyType" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyType"></a>

```typescript
public readonly enforceOnKeyType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs">ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs</a>

---


### ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference <a name="ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.Initializer"></a>

```typescript
import { computeSecurityPolicyRule } from '@cdktf/provider-google'

new computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.resetTarget">resetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.resetTarget"></a>

```typescript
public resetTarget(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA">ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA;
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA">ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA</a>

---


### ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference <a name="ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.Initializer"></a>

```typescript
import { computeSecurityPolicyRule } from '@cdktf/provider-google'

new computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.resetCount">resetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.resetIntervalSec">resetIntervalSec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCount` <a name="resetCount" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.resetCount"></a>

```typescript
public resetCount(): void
```

##### `resetIntervalSec` <a name="resetIntervalSec" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.resetIntervalSec"></a>

```typescript
public resetIntervalSec(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.property.intervalSecInput">intervalSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.property.intervalSec">intervalSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA">ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `intervalSecInput`<sup>Optional</sup> <a name="intervalSecInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.property.intervalSecInput"></a>

```typescript
public readonly intervalSecInput: number;
```

- *Type:* number

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `intervalSec`<sup>Required</sup> <a name="intervalSec" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.property.intervalSec"></a>

```typescript
public readonly intervalSec: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA;
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA">ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA</a>

---


### ComputeSecurityPolicyRuleTimeoutsOutputReference <a name="ComputeSecurityPolicyRuleTimeoutsOutputReference" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeSecurityPolicyRule } from '@cdktf/provider-google'

new computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeouts">ComputeSecurityPolicyRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeSecurityPolicyRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeouts">ComputeSecurityPolicyRuleTimeouts</a>

---



