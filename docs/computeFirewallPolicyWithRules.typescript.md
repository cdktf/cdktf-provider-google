# `computeFirewallPolicyWithRules` Submodule <a name="`computeFirewallPolicyWithRules` Submodule" id="@cdktf/provider-google.computeFirewallPolicyWithRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeFirewallPolicyWithRules <a name="ComputeFirewallPolicyWithRules" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_firewall_policy_with_rules google_compute_firewall_policy_with_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.Initializer"></a>

```typescript
import { computeFirewallPolicyWithRules } from '@cdktf/provider-google'

new computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules(scope: Construct, id: string, config: ComputeFirewallPolicyWithRulesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig">ComputeFirewallPolicyWithRulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig">ComputeFirewallPolicyWithRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRule` <a name="putRule" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.putRule"></a>

```typescript
public putRule(value: IResolvable | ComputeFirewallPolicyWithRulesRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.putRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule">ComputeFirewallPolicyWithRulesRule</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeFirewallPolicyWithRulesTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeouts">ComputeFirewallPolicyWithRulesTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeFirewallPolicyWithRules resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.isConstruct"></a>

```typescript
import { computeFirewallPolicyWithRules } from '@cdktf/provider-google'

computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.isTerraformElement"></a>

```typescript
import { computeFirewallPolicyWithRules } from '@cdktf/provider-google'

computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.isTerraformResource"></a>

```typescript
import { computeFirewallPolicyWithRules } from '@cdktf/provider-google'

computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.generateConfigForImport"></a>

```typescript
import { computeFirewallPolicyWithRules } from '@cdktf/provider-google'

computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComputeFirewallPolicyWithRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeFirewallPolicyWithRules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeFirewallPolicyWithRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_firewall_policy_with_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeFirewallPolicyWithRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.fingerprint">fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.predefinedRules">predefinedRules</a></code> | <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList">ComputeFirewallPolicyWithRulesPredefinedRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList">ComputeFirewallPolicyWithRulesRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.ruleTupleCount">ruleTupleCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.selfLinkWithId">selfLinkWithId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference">ComputeFirewallPolicyWithRulesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.ruleInput">ruleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule">ComputeFirewallPolicyWithRulesRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.shortNameInput">shortNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeouts">ComputeFirewallPolicyWithRulesTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.shortName">shortName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.fingerprint"></a>

```typescript
public readonly fingerprint: string;
```

- *Type:* string

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

##### `predefinedRules`<sup>Required</sup> <a name="predefinedRules" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.predefinedRules"></a>

```typescript
public readonly predefinedRules: ComputeFirewallPolicyWithRulesPredefinedRulesList;
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList">ComputeFirewallPolicyWithRulesPredefinedRulesList</a>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.rule"></a>

```typescript
public readonly rule: ComputeFirewallPolicyWithRulesRuleList;
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList">ComputeFirewallPolicyWithRulesRuleList</a>

---

##### `ruleTupleCount`<sup>Required</sup> <a name="ruleTupleCount" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.ruleTupleCount"></a>

```typescript
public readonly ruleTupleCount: number;
```

- *Type:* number

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `selfLinkWithId`<sup>Required</sup> <a name="selfLinkWithId" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.selfLinkWithId"></a>

```typescript
public readonly selfLinkWithId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeFirewallPolicyWithRulesTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference">ComputeFirewallPolicyWithRulesTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | ComputeFirewallPolicyWithRulesRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule">ComputeFirewallPolicyWithRulesRule</a>[]

---

##### `shortNameInput`<sup>Optional</sup> <a name="shortNameInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.shortNameInput"></a>

```typescript
public readonly shortNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeFirewallPolicyWithRulesTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeouts">ComputeFirewallPolicyWithRulesTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `shortName`<sup>Required</sup> <a name="shortName" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.shortName"></a>

```typescript
public readonly shortName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRules.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeFirewallPolicyWithRulesConfig <a name="ComputeFirewallPolicyWithRulesConfig" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.Initializer"></a>

```typescript
import { computeFirewallPolicyWithRules } from '@cdktf/provider-google'

const computeFirewallPolicyWithRulesConfig: computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.parent">parent</a></code> | <code>string</code> | The parent of this FirewallPolicy in the Cloud Resource Hierarchy. Format: organizations/{organization_id} or folders/{folder_id}. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.rule">rule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule">ComputeFirewallPolicyWithRulesRule</a>[]</code> | rule block. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.shortName">shortName</a></code> | <code>string</code> | A textual name of the security policy. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_firewall_policy_with_rules#id ComputeFirewallPolicyWithRules#id}. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeouts">ComputeFirewallPolicyWithRulesTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The parent of this FirewallPolicy in the Cloud Resource Hierarchy. Format: organizations/{organization_id} or folders/{folder_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_firewall_policy_with_rules#parent ComputeFirewallPolicyWithRules#parent}

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.rule"></a>

```typescript
public readonly rule: IResolvable | ComputeFirewallPolicyWithRulesRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule">ComputeFirewallPolicyWithRulesRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_firewall_policy_with_rules#rule ComputeFirewallPolicyWithRules#rule}

---

##### `shortName`<sup>Required</sup> <a name="shortName" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.shortName"></a>

```typescript
public readonly shortName: string;
```

- *Type:* string

A textual name of the security policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_firewall_policy_with_rules#short_name ComputeFirewallPolicyWithRules#short_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_firewall_policy_with_rules#description ComputeFirewallPolicyWithRules#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_firewall_policy_with_rules#id ComputeFirewallPolicyWithRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeFirewallPolicyWithRulesTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeouts">ComputeFirewallPolicyWithRulesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_firewall_policy_with_rules#timeouts ComputeFirewallPolicyWithRules#timeouts}

---

### ComputeFirewallPolicyWithRulesPredefinedRules <a name="ComputeFirewallPolicyWithRulesPredefinedRules" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRules.Initializer"></a>

```typescript
import { computeFirewallPolicyWithRules } from '@cdktf/provider-google'

const computeFirewallPolicyWithRulesPredefinedRules: computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRules = { ... }
```


### ComputeFirewallPolicyWithRulesPredefinedRulesMatch <a name="ComputeFirewallPolicyWithRulesPredefinedRulesMatch" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatch.Initializer"></a>

```typescript
import { computeFirewallPolicyWithRules } from '@cdktf/provider-google'

const computeFirewallPolicyWithRulesPredefinedRulesMatch: computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatch = { ... }
```


### ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config <a name="ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config.Initializer"></a>

```typescript
import { computeFirewallPolicyWithRules } from '@cdktf/provider-google'

const computeFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config: computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config = { ... }
```


### ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag <a name="ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag.Initializer"></a>

```typescript
import { computeFirewallPolicyWithRules } from '@cdktf/provider-google'

const computeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag: computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag = { ... }
```


### ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTag <a name="ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTag" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTag.Initializer"></a>

```typescript
import { computeFirewallPolicyWithRules } from '@cdktf/provider-google'

const computeFirewallPolicyWithRulesPredefinedRulesTargetSecureTag: computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTag = { ... }
```


### ComputeFirewallPolicyWithRulesRule <a name="ComputeFirewallPolicyWithRulesRule" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.Initializer"></a>

```typescript
import { computeFirewallPolicyWithRules } from '@cdktf/provider-google'

const computeFirewallPolicyWithRulesRule: computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.action">action</a></code> | <code>string</code> | The Action to perform when the client connection triggers the rule. Can currently be either "allow", "deny", "apply_security_profile_group" or "goto_next". |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.match">match</a></code> | <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch">ComputeFirewallPolicyWithRulesRuleMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.priority">priority</a></code> | <code>number</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.description">description</a></code> | <code>string</code> | A description of the rule. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.direction">direction</a></code> | <code>string</code> | The direction in which this rule applies. If unspecified an INGRESS rule is created. Possible values: ["INGRESS", "EGRESS"]. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Denotes whether the firewall policy rule is disabled. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.enableLogging">enableLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | Denotes whether to enable logging for a particular rule. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.ruleName">ruleName</a></code> | <code>string</code> | An optional name for the rule. This field is not a unique identifier and can be updated. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.securityProfileGroup">securityProfileGroup</a></code> | <code>string</code> | A fully-qualified URL of a SecurityProfile resource instance. Example: https://networksecurity.googleapis.com/v1/projects/{project}/locations/{location}/securityProfileGroups/my-security-profile-group Must be specified if action is 'apply_security_profile_group'. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.targetResources">targetResources</a></code> | <code>string[]</code> | A list of network resource URLs to which this rule applies. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.targetSecureTag">targetSecureTag</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTag">ComputeFirewallPolicyWithRulesRuleTargetSecureTag</a>[]</code> | target_secure_tag block. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.targetServiceAccounts">targetServiceAccounts</a></code> | <code>string[]</code> | A list of service accounts indicating the sets of instances that are applied with this rule. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.tlsInspect">tlsInspect</a></code> | <code>boolean \| cdktf.IResolvable</code> | Boolean flag indicating if the traffic should be TLS decrypted. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

The Action to perform when the client connection triggers the rule. Can currently be either "allow", "deny", "apply_security_profile_group" or "goto_next".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_firewall_policy_with_rules#action ComputeFirewallPolicyWithRules#action}

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.match"></a>

```typescript
public readonly match: ComputeFirewallPolicyWithRulesRuleMatch;
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch">ComputeFirewallPolicyWithRulesRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_firewall_policy_with_rules#match ComputeFirewallPolicyWithRules#match}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

An integer indicating the priority of a rule in the list.

The priority must be a value
between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the
highest priority and 2147483647 is the lowest priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_firewall_policy_with_rules#priority ComputeFirewallPolicyWithRules#priority}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_firewall_policy_with_rules#description ComputeFirewallPolicyWithRules#description}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

The direction in which this rule applies. If unspecified an INGRESS rule is created. Possible values: ["INGRESS", "EGRESS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_firewall_policy_with_rules#direction ComputeFirewallPolicyWithRules#direction}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Denotes whether the firewall policy rule is disabled.

When set to true,
the firewall policy rule is not enforced and traffic behaves as if it did
not exist. If this is unspecified, the firewall policy rule will be
enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_firewall_policy_with_rules#disabled ComputeFirewallPolicyWithRules#disabled}

---

##### `enableLogging`<sup>Optional</sup> <a name="enableLogging" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.enableLogging"></a>

```typescript
public readonly enableLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Denotes whether to enable logging for a particular rule.

If logging is enabled, logs will be exported to the
configured export destination in Stackdriver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_firewall_policy_with_rules#enable_logging ComputeFirewallPolicyWithRules#enable_logging}

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

An optional name for the rule. This field is not a unique identifier and can be updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_firewall_policy_with_rules#rule_name ComputeFirewallPolicyWithRules#rule_name}

---

##### `securityProfileGroup`<sup>Optional</sup> <a name="securityProfileGroup" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.securityProfileGroup"></a>

```typescript
public readonly securityProfileGroup: string;
```

- *Type:* string

A fully-qualified URL of a SecurityProfile resource instance. Example: https://networksecurity.googleapis.com/v1/projects/{project}/locations/{location}/securityProfileGroups/my-security-profile-group Must be specified if action is 'apply_security_profile_group'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_firewall_policy_with_rules#security_profile_group ComputeFirewallPolicyWithRules#security_profile_group}

---

##### `targetResources`<sup>Optional</sup> <a name="targetResources" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.targetResources"></a>

```typescript
public readonly targetResources: string[];
```

- *Type:* string[]

A list of network resource URLs to which this rule applies.

This field allows you to control which network's VMs get
this rule. If this field is left blank, all VMs
within the organization will receive the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_firewall_policy_with_rules#target_resources ComputeFirewallPolicyWithRules#target_resources}

---

##### `targetSecureTag`<sup>Optional</sup> <a name="targetSecureTag" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.targetSecureTag"></a>

```typescript
public readonly targetSecureTag: IResolvable | ComputeFirewallPolicyWithRulesRuleTargetSecureTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTag">ComputeFirewallPolicyWithRulesRuleTargetSecureTag</a>[]

target_secure_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_firewall_policy_with_rules#target_secure_tag ComputeFirewallPolicyWithRules#target_secure_tag}

---

##### `targetServiceAccounts`<sup>Optional</sup> <a name="targetServiceAccounts" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.targetServiceAccounts"></a>

```typescript
public readonly targetServiceAccounts: string[];
```

- *Type:* string[]

A list of service accounts indicating the sets of instances that are applied with this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_firewall_policy_with_rules#target_service_accounts ComputeFirewallPolicyWithRules#target_service_accounts}

---

##### `tlsInspect`<sup>Optional</sup> <a name="tlsInspect" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule.property.tlsInspect"></a>

```typescript
public readonly tlsInspect: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Boolean flag indicating if the traffic should be TLS decrypted.

It can be set only if action = 'apply_security_profile_group' and cannot be set for other actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_firewall_policy_with_rules#tls_inspect ComputeFirewallPolicyWithRules#tls_inspect}

---

### ComputeFirewallPolicyWithRulesRuleMatch <a name="ComputeFirewallPolicyWithRulesRuleMatch" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch.Initializer"></a>

```typescript
import { computeFirewallPolicyWithRules } from '@cdktf/provider-google'

const computeFirewallPolicyWithRulesRuleMatch: computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch.property.layer4Config">layer4Config</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4Config">ComputeFirewallPolicyWithRulesRuleMatchLayer4Config</a>[]</code> | layer4_config block. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch.property.destAddressGroups">destAddressGroups</a></code> | <code>string[]</code> | Address groups which should be matched against the traffic destination. Maximum number of destination address groups is 10. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch.property.destFqdns">destFqdns</a></code> | <code>string[]</code> | Fully Qualified Domain Name (FQDN) which should be matched against traffic destination. Maximum number of destination fqdn allowed is 100. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch.property.destIpRanges">destIpRanges</a></code> | <code>string[]</code> | Destination IP address range in CIDR format. Required for EGRESS rules. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch.property.destRegionCodes">destRegionCodes</a></code> | <code>string[]</code> | Region codes whose IP addresses will be used to match for destination of traffic. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch.property.destThreatIntelligences">destThreatIntelligences</a></code> | <code>string[]</code> | Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic destination. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch.property.srcAddressGroups">srcAddressGroups</a></code> | <code>string[]</code> | Address groups which should be matched against the traffic source. Maximum number of source address groups is 10. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch.property.srcFqdns">srcFqdns</a></code> | <code>string[]</code> | Fully Qualified Domain Name (FQDN) which should be matched against traffic source. Maximum number of source fqdn allowed is 100. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch.property.srcIpRanges">srcIpRanges</a></code> | <code>string[]</code> | Source IP address range in CIDR format. Required for INGRESS rules. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch.property.srcRegionCodes">srcRegionCodes</a></code> | <code>string[]</code> | Region codes whose IP addresses will be used to match for source of traffic. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch.property.srcSecureTag">srcSecureTag</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTag">ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTag</a>[]</code> | src_secure_tag block. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch.property.srcThreatIntelligences">srcThreatIntelligences</a></code> | <code>string[]</code> | Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic source. |

---

##### `layer4Config`<sup>Required</sup> <a name="layer4Config" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch.property.layer4Config"></a>

```typescript
public readonly layer4Config: IResolvable | ComputeFirewallPolicyWithRulesRuleMatchLayer4Config[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4Config">ComputeFirewallPolicyWithRulesRuleMatchLayer4Config</a>[]

layer4_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_firewall_policy_with_rules#layer4_config ComputeFirewallPolicyWithRules#layer4_config}

---

##### `destAddressGroups`<sup>Optional</sup> <a name="destAddressGroups" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch.property.destAddressGroups"></a>

```typescript
public readonly destAddressGroups: string[];
```

- *Type:* string[]

Address groups which should be matched against the traffic destination. Maximum number of destination address groups is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_firewall_policy_with_rules#dest_address_groups ComputeFirewallPolicyWithRules#dest_address_groups}

---

##### `destFqdns`<sup>Optional</sup> <a name="destFqdns" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch.property.destFqdns"></a>

```typescript
public readonly destFqdns: string[];
```

- *Type:* string[]

Fully Qualified Domain Name (FQDN) which should be matched against traffic destination. Maximum number of destination fqdn allowed is 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_firewall_policy_with_rules#dest_fqdns ComputeFirewallPolicyWithRules#dest_fqdns}

---

##### `destIpRanges`<sup>Optional</sup> <a name="destIpRanges" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch.property.destIpRanges"></a>

```typescript
public readonly destIpRanges: string[];
```

- *Type:* string[]

Destination IP address range in CIDR format. Required for EGRESS rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_firewall_policy_with_rules#dest_ip_ranges ComputeFirewallPolicyWithRules#dest_ip_ranges}

---

##### `destRegionCodes`<sup>Optional</sup> <a name="destRegionCodes" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch.property.destRegionCodes"></a>

```typescript
public readonly destRegionCodes: string[];
```

- *Type:* string[]

Region codes whose IP addresses will be used to match for destination of traffic.

Should be specified as 2 letter country code defined as per
ISO 3166 alpha-2 country codes. ex."US"
Maximum number of destination region codes allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_firewall_policy_with_rules#dest_region_codes ComputeFirewallPolicyWithRules#dest_region_codes}

---

##### `destThreatIntelligences`<sup>Optional</sup> <a name="destThreatIntelligences" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch.property.destThreatIntelligences"></a>

```typescript
public readonly destThreatIntelligences: string[];
```

- *Type:* string[]

Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_firewall_policy_with_rules#dest_threat_intelligences ComputeFirewallPolicyWithRules#dest_threat_intelligences}

---

##### `srcAddressGroups`<sup>Optional</sup> <a name="srcAddressGroups" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch.property.srcAddressGroups"></a>

```typescript
public readonly srcAddressGroups: string[];
```

- *Type:* string[]

Address groups which should be matched against the traffic source. Maximum number of source address groups is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_firewall_policy_with_rules#src_address_groups ComputeFirewallPolicyWithRules#src_address_groups}

---

##### `srcFqdns`<sup>Optional</sup> <a name="srcFqdns" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch.property.srcFqdns"></a>

```typescript
public readonly srcFqdns: string[];
```

- *Type:* string[]

Fully Qualified Domain Name (FQDN) which should be matched against traffic source. Maximum number of source fqdn allowed is 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_firewall_policy_with_rules#src_fqdns ComputeFirewallPolicyWithRules#src_fqdns}

---

##### `srcIpRanges`<sup>Optional</sup> <a name="srcIpRanges" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch.property.srcIpRanges"></a>

```typescript
public readonly srcIpRanges: string[];
```

- *Type:* string[]

Source IP address range in CIDR format. Required for INGRESS rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_firewall_policy_with_rules#src_ip_ranges ComputeFirewallPolicyWithRules#src_ip_ranges}

---

##### `srcRegionCodes`<sup>Optional</sup> <a name="srcRegionCodes" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch.property.srcRegionCodes"></a>

```typescript
public readonly srcRegionCodes: string[];
```

- *Type:* string[]

Region codes whose IP addresses will be used to match for source of traffic.

Should be specified as 2 letter country code defined as per
ISO 3166 alpha-2 country codes. ex."US"
Maximum number of source region codes allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_firewall_policy_with_rules#src_region_codes ComputeFirewallPolicyWithRules#src_region_codes}

---

##### `srcSecureTag`<sup>Optional</sup> <a name="srcSecureTag" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch.property.srcSecureTag"></a>

```typescript
public readonly srcSecureTag: IResolvable | ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTag">ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTag</a>[]

src_secure_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_firewall_policy_with_rules#src_secure_tag ComputeFirewallPolicyWithRules#src_secure_tag}

---

##### `srcThreatIntelligences`<sup>Optional</sup> <a name="srcThreatIntelligences" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch.property.srcThreatIntelligences"></a>

```typescript
public readonly srcThreatIntelligences: string[];
```

- *Type:* string[]

Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_firewall_policy_with_rules#src_threat_intelligences ComputeFirewallPolicyWithRules#src_threat_intelligences}

---

### ComputeFirewallPolicyWithRulesRuleMatchLayer4Config <a name="ComputeFirewallPolicyWithRulesRuleMatchLayer4Config" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4Config.Initializer"></a>

```typescript
import { computeFirewallPolicyWithRules } from '@cdktf/provider-google'

const computeFirewallPolicyWithRulesRuleMatchLayer4Config: computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4Config.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | The IP protocol to which this rule applies. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4Config.property.ports">ports</a></code> | <code>string[]</code> | An optional list of ports to which this rule applies. |

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4Config.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

The IP protocol to which this rule applies.

The protocol
type is required when creating a firewall rule.
This value can either be one of the following well
known protocol strings (tcp, udp, icmp, esp, ah, ipip, sctp),
or the IP protocol number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_firewall_policy_with_rules#ip_protocol ComputeFirewallPolicyWithRules#ip_protocol}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4Config.property.ports"></a>

```typescript
public readonly ports: string[];
```

- *Type:* string[]

An optional list of ports to which this rule applies.

This field
is only applicable for UDP or TCP protocol. Each entry must be
either an integer or a range. If not specified, this rule
applies to connections through any port.
Example inputs include: ["22"], ["80","443"], and
["12345-12349"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_firewall_policy_with_rules#ports ComputeFirewallPolicyWithRules#ports}

---

### ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTag <a name="ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTag" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTag.Initializer"></a>

```typescript
import { computeFirewallPolicyWithRules } from '@cdktf/provider-google'

const computeFirewallPolicyWithRulesRuleMatchSrcSecureTag: computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTag = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTag.property.name">name</a></code> | <code>string</code> | Name of the secure tag, created with TagManager's TagValue API. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTag.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the secure tag, created with TagManager's TagValue API.

---

### ComputeFirewallPolicyWithRulesRuleTargetSecureTag <a name="ComputeFirewallPolicyWithRulesRuleTargetSecureTag" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTag.Initializer"></a>

```typescript
import { computeFirewallPolicyWithRules } from '@cdktf/provider-google'

const computeFirewallPolicyWithRulesRuleTargetSecureTag: computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTag = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTag.property.name">name</a></code> | <code>string</code> | Name of the secure tag, created with TagManager's TagValue API. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTag.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the secure tag, created with TagManager's TagValue API.

---

### ComputeFirewallPolicyWithRulesTimeouts <a name="ComputeFirewallPolicyWithRulesTimeouts" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeouts.Initializer"></a>

```typescript
import { computeFirewallPolicyWithRules } from '@cdktf/provider-google'

const computeFirewallPolicyWithRulesTimeouts: computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_firewall_policy_with_rules#create ComputeFirewallPolicyWithRules#create}. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_firewall_policy_with_rules#delete ComputeFirewallPolicyWithRules#delete}. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_firewall_policy_with_rules#update ComputeFirewallPolicyWithRules#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_firewall_policy_with_rules#create ComputeFirewallPolicyWithRules#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_firewall_policy_with_rules#delete ComputeFirewallPolicyWithRules#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_firewall_policy_with_rules#update ComputeFirewallPolicyWithRules#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeFirewallPolicyWithRulesPredefinedRulesList <a name="ComputeFirewallPolicyWithRulesPredefinedRulesList" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList.Initializer"></a>

```typescript
import { computeFirewallPolicyWithRules } from '@cdktf/provider-google'

new computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList.get"></a>

```typescript
public get(index: number): ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList <a name="ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.Initializer"></a>

```typescript
import { computeFirewallPolicyWithRules } from '@cdktf/provider-google'

new computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.get"></a>

```typescript
public get(index: number): ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference <a name="ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer"></a>

```typescript
import { computeFirewallPolicyWithRules } from '@cdktf/provider-google'

new computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.ports">ports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config">ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.ports"></a>

```typescript
public readonly ports: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config;
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config">ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config</a>

---


### ComputeFirewallPolicyWithRulesPredefinedRulesMatchList <a name="ComputeFirewallPolicyWithRulesPredefinedRulesMatchList" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList.Initializer"></a>

```typescript
import { computeFirewallPolicyWithRules } from '@cdktf/provider-google'

new computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList.get"></a>

```typescript
public get(index: number): ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference <a name="ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer"></a>

```typescript
import { computeFirewallPolicyWithRules } from '@cdktf/provider-google'

new computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destAddressGroups">destAddressGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destFqdns">destFqdns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destIpRanges">destIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destRegionCodes">destRegionCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destThreatIntelligences">destThreatIntelligences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.layer4Config">layer4Config</a></code> | <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList">ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcAddressGroups">srcAddressGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcFqdns">srcFqdns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcIpRanges">srcIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcRegionCodes">srcRegionCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcSecureTag">srcSecureTag</a></code> | <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList">ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcThreatIntelligences">srcThreatIntelligences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatch">ComputeFirewallPolicyWithRulesPredefinedRulesMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destAddressGroups`<sup>Required</sup> <a name="destAddressGroups" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destAddressGroups"></a>

```typescript
public readonly destAddressGroups: string[];
```

- *Type:* string[]

---

##### `destFqdns`<sup>Required</sup> <a name="destFqdns" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destFqdns"></a>

```typescript
public readonly destFqdns: string[];
```

- *Type:* string[]

---

##### `destIpRanges`<sup>Required</sup> <a name="destIpRanges" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destIpRanges"></a>

```typescript
public readonly destIpRanges: string[];
```

- *Type:* string[]

---

##### `destRegionCodes`<sup>Required</sup> <a name="destRegionCodes" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destRegionCodes"></a>

```typescript
public readonly destRegionCodes: string[];
```

- *Type:* string[]

---

##### `destThreatIntelligences`<sup>Required</sup> <a name="destThreatIntelligences" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destThreatIntelligences"></a>

```typescript
public readonly destThreatIntelligences: string[];
```

- *Type:* string[]

---

##### `layer4Config`<sup>Required</sup> <a name="layer4Config" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.layer4Config"></a>

```typescript
public readonly layer4Config: ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList;
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList">ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList</a>

---

##### `srcAddressGroups`<sup>Required</sup> <a name="srcAddressGroups" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcAddressGroups"></a>

```typescript
public readonly srcAddressGroups: string[];
```

- *Type:* string[]

---

##### `srcFqdns`<sup>Required</sup> <a name="srcFqdns" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcFqdns"></a>

```typescript
public readonly srcFqdns: string[];
```

- *Type:* string[]

---

##### `srcIpRanges`<sup>Required</sup> <a name="srcIpRanges" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcIpRanges"></a>

```typescript
public readonly srcIpRanges: string[];
```

- *Type:* string[]

---

##### `srcRegionCodes`<sup>Required</sup> <a name="srcRegionCodes" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcRegionCodes"></a>

```typescript
public readonly srcRegionCodes: string[];
```

- *Type:* string[]

---

##### `srcSecureTag`<sup>Required</sup> <a name="srcSecureTag" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcSecureTag"></a>

```typescript
public readonly srcSecureTag: ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList;
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList">ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList</a>

---

##### `srcThreatIntelligences`<sup>Required</sup> <a name="srcThreatIntelligences" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcThreatIntelligences"></a>

```typescript
public readonly srcThreatIntelligences: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeFirewallPolicyWithRulesPredefinedRulesMatch;
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatch">ComputeFirewallPolicyWithRulesPredefinedRulesMatch</a>

---


### ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList <a name="ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.Initializer"></a>

```typescript
import { computeFirewallPolicyWithRules } from '@cdktf/provider-google'

new computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.get"></a>

```typescript
public get(index: number): ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference <a name="ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.Initializer"></a>

```typescript
import { computeFirewallPolicyWithRules } from '@cdktf/provider-google'

new computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag">ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag;
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag">ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag</a>

---


### ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference <a name="ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer"></a>

```typescript
import { computeFirewallPolicyWithRules } from '@cdktf/provider-google'

new computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.disabled">disabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.enableLogging">enableLogging</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList">ComputeFirewallPolicyWithRulesPredefinedRulesMatchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.securityProfileGroup">securityProfileGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.targetResources">targetResources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.targetSecureTag">targetSecureTag</a></code> | <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList">ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.targetServiceAccounts">targetServiceAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.tlsInspect">tlsInspect</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRules">ComputeFirewallPolicyWithRulesPredefinedRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.disabled"></a>

```typescript
public readonly disabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `enableLogging`<sup>Required</sup> <a name="enableLogging" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.enableLogging"></a>

```typescript
public readonly enableLogging: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.match"></a>

```typescript
public readonly match: ComputeFirewallPolicyWithRulesPredefinedRulesMatchList;
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesMatchList">ComputeFirewallPolicyWithRulesPredefinedRulesMatchList</a>

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

##### `securityProfileGroup`<sup>Required</sup> <a name="securityProfileGroup" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.securityProfileGroup"></a>

```typescript
public readonly securityProfileGroup: string;
```

- *Type:* string

---

##### `targetResources`<sup>Required</sup> <a name="targetResources" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.targetResources"></a>

```typescript
public readonly targetResources: string[];
```

- *Type:* string[]

---

##### `targetSecureTag`<sup>Required</sup> <a name="targetSecureTag" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.targetSecureTag"></a>

```typescript
public readonly targetSecureTag: ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList;
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList">ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList</a>

---

##### `targetServiceAccounts`<sup>Required</sup> <a name="targetServiceAccounts" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.targetServiceAccounts"></a>

```typescript
public readonly targetServiceAccounts: string[];
```

- *Type:* string[]

---

##### `tlsInspect`<sup>Required</sup> <a name="tlsInspect" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.tlsInspect"></a>

```typescript
public readonly tlsInspect: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeFirewallPolicyWithRulesPredefinedRules;
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRules">ComputeFirewallPolicyWithRulesPredefinedRules</a>

---


### ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList <a name="ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.Initializer"></a>

```typescript
import { computeFirewallPolicyWithRules } from '@cdktf/provider-google'

new computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.get"></a>

```typescript
public get(index: number): ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference <a name="ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.Initializer"></a>

```typescript
import { computeFirewallPolicyWithRules } from '@cdktf/provider-google'

new computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTag">ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTag;
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTag">ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTag</a>

---


### ComputeFirewallPolicyWithRulesRuleList <a name="ComputeFirewallPolicyWithRulesRuleList" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.Initializer"></a>

```typescript
import { computeFirewallPolicyWithRules } from '@cdktf/provider-google'

new computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.get"></a>

```typescript
public get(index: number): ComputeFirewallPolicyWithRulesRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule">ComputeFirewallPolicyWithRulesRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeFirewallPolicyWithRulesRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule">ComputeFirewallPolicyWithRulesRule</a>[]

---


### ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList <a name="ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.Initializer"></a>

```typescript
import { computeFirewallPolicyWithRules } from '@cdktf/provider-google'

new computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.get"></a>

```typescript
public get(index: number): ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4Config">ComputeFirewallPolicyWithRulesRuleMatchLayer4Config</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeFirewallPolicyWithRulesRuleMatchLayer4Config[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4Config">ComputeFirewallPolicyWithRulesRuleMatchLayer4Config</a>[]

---


### ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference <a name="ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer"></a>

```typescript
import { computeFirewallPolicyWithRules } from '@cdktf/provider-google'

new computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.resetPorts">resetPorts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPorts` <a name="resetPorts" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.resetPorts"></a>

```typescript
public resetPorts(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.ipProtocolInput">ipProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.portsInput">portsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.ports">ports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4Config">ComputeFirewallPolicyWithRulesRuleMatchLayer4Config</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipProtocolInput`<sup>Optional</sup> <a name="ipProtocolInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.ipProtocolInput"></a>

```typescript
public readonly ipProtocolInput: string;
```

- *Type:* string

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.portsInput"></a>

```typescript
public readonly portsInput: string[];
```

- *Type:* string[]

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.ports"></a>

```typescript
public readonly ports: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeFirewallPolicyWithRulesRuleMatchLayer4Config;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4Config">ComputeFirewallPolicyWithRulesRuleMatchLayer4Config</a>

---


### ComputeFirewallPolicyWithRulesRuleMatchOutputReference <a name="ComputeFirewallPolicyWithRulesRuleMatchOutputReference" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.Initializer"></a>

```typescript
import { computeFirewallPolicyWithRules } from '@cdktf/provider-google'

new computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.putLayer4Config">putLayer4Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.putSrcSecureTag">putSrcSecureTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.resetDestAddressGroups">resetDestAddressGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.resetDestFqdns">resetDestFqdns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.resetDestIpRanges">resetDestIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.resetDestRegionCodes">resetDestRegionCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.resetDestThreatIntelligences">resetDestThreatIntelligences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcAddressGroups">resetSrcAddressGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcFqdns">resetSrcFqdns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcIpRanges">resetSrcIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcRegionCodes">resetSrcRegionCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcSecureTag">resetSrcSecureTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcThreatIntelligences">resetSrcThreatIntelligences</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLayer4Config` <a name="putLayer4Config" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.putLayer4Config"></a>

```typescript
public putLayer4Config(value: IResolvable | ComputeFirewallPolicyWithRulesRuleMatchLayer4Config[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.putLayer4Config.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4Config">ComputeFirewallPolicyWithRulesRuleMatchLayer4Config</a>[]

---

##### `putSrcSecureTag` <a name="putSrcSecureTag" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.putSrcSecureTag"></a>

```typescript
public putSrcSecureTag(value: IResolvable | ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTag[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.putSrcSecureTag.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTag">ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTag</a>[]

---

##### `resetDestAddressGroups` <a name="resetDestAddressGroups" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.resetDestAddressGroups"></a>

```typescript
public resetDestAddressGroups(): void
```

##### `resetDestFqdns` <a name="resetDestFqdns" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.resetDestFqdns"></a>

```typescript
public resetDestFqdns(): void
```

##### `resetDestIpRanges` <a name="resetDestIpRanges" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.resetDestIpRanges"></a>

```typescript
public resetDestIpRanges(): void
```

##### `resetDestRegionCodes` <a name="resetDestRegionCodes" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.resetDestRegionCodes"></a>

```typescript
public resetDestRegionCodes(): void
```

##### `resetDestThreatIntelligences` <a name="resetDestThreatIntelligences" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.resetDestThreatIntelligences"></a>

```typescript
public resetDestThreatIntelligences(): void
```

##### `resetSrcAddressGroups` <a name="resetSrcAddressGroups" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcAddressGroups"></a>

```typescript
public resetSrcAddressGroups(): void
```

##### `resetSrcFqdns` <a name="resetSrcFqdns" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcFqdns"></a>

```typescript
public resetSrcFqdns(): void
```

##### `resetSrcIpRanges` <a name="resetSrcIpRanges" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcIpRanges"></a>

```typescript
public resetSrcIpRanges(): void
```

##### `resetSrcRegionCodes` <a name="resetSrcRegionCodes" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcRegionCodes"></a>

```typescript
public resetSrcRegionCodes(): void
```

##### `resetSrcSecureTag` <a name="resetSrcSecureTag" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcSecureTag"></a>

```typescript
public resetSrcSecureTag(): void
```

##### `resetSrcThreatIntelligences` <a name="resetSrcThreatIntelligences" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcThreatIntelligences"></a>

```typescript
public resetSrcThreatIntelligences(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.layer4Config">layer4Config</a></code> | <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList">ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.srcSecureTag">srcSecureTag</a></code> | <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagList">ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.destAddressGroupsInput">destAddressGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.destFqdnsInput">destFqdnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.destIpRangesInput">destIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.destRegionCodesInput">destRegionCodesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.destThreatIntelligencesInput">destThreatIntelligencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.layer4ConfigInput">layer4ConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4Config">ComputeFirewallPolicyWithRulesRuleMatchLayer4Config</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.srcAddressGroupsInput">srcAddressGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.srcFqdnsInput">srcFqdnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.srcIpRangesInput">srcIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.srcRegionCodesInput">srcRegionCodesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.srcSecureTagInput">srcSecureTagInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTag">ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTag</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.srcThreatIntelligencesInput">srcThreatIntelligencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.destAddressGroups">destAddressGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.destFqdns">destFqdns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.destIpRanges">destIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.destRegionCodes">destRegionCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.destThreatIntelligences">destThreatIntelligences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.srcAddressGroups">srcAddressGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.srcFqdns">srcFqdns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.srcIpRanges">srcIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.srcRegionCodes">srcRegionCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.srcThreatIntelligences">srcThreatIntelligences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch">ComputeFirewallPolicyWithRulesRuleMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `layer4Config`<sup>Required</sup> <a name="layer4Config" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.layer4Config"></a>

```typescript
public readonly layer4Config: ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList;
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList">ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList</a>

---

##### `srcSecureTag`<sup>Required</sup> <a name="srcSecureTag" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.srcSecureTag"></a>

```typescript
public readonly srcSecureTag: ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagList;
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagList">ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagList</a>

---

##### `destAddressGroupsInput`<sup>Optional</sup> <a name="destAddressGroupsInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.destAddressGroupsInput"></a>

```typescript
public readonly destAddressGroupsInput: string[];
```

- *Type:* string[]

---

##### `destFqdnsInput`<sup>Optional</sup> <a name="destFqdnsInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.destFqdnsInput"></a>

```typescript
public readonly destFqdnsInput: string[];
```

- *Type:* string[]

---

##### `destIpRangesInput`<sup>Optional</sup> <a name="destIpRangesInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.destIpRangesInput"></a>

```typescript
public readonly destIpRangesInput: string[];
```

- *Type:* string[]

---

##### `destRegionCodesInput`<sup>Optional</sup> <a name="destRegionCodesInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.destRegionCodesInput"></a>

```typescript
public readonly destRegionCodesInput: string[];
```

- *Type:* string[]

---

##### `destThreatIntelligencesInput`<sup>Optional</sup> <a name="destThreatIntelligencesInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.destThreatIntelligencesInput"></a>

```typescript
public readonly destThreatIntelligencesInput: string[];
```

- *Type:* string[]

---

##### `layer4ConfigInput`<sup>Optional</sup> <a name="layer4ConfigInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.layer4ConfigInput"></a>

```typescript
public readonly layer4ConfigInput: IResolvable | ComputeFirewallPolicyWithRulesRuleMatchLayer4Config[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchLayer4Config">ComputeFirewallPolicyWithRulesRuleMatchLayer4Config</a>[]

---

##### `srcAddressGroupsInput`<sup>Optional</sup> <a name="srcAddressGroupsInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.srcAddressGroupsInput"></a>

```typescript
public readonly srcAddressGroupsInput: string[];
```

- *Type:* string[]

---

##### `srcFqdnsInput`<sup>Optional</sup> <a name="srcFqdnsInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.srcFqdnsInput"></a>

```typescript
public readonly srcFqdnsInput: string[];
```

- *Type:* string[]

---

##### `srcIpRangesInput`<sup>Optional</sup> <a name="srcIpRangesInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.srcIpRangesInput"></a>

```typescript
public readonly srcIpRangesInput: string[];
```

- *Type:* string[]

---

##### `srcRegionCodesInput`<sup>Optional</sup> <a name="srcRegionCodesInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.srcRegionCodesInput"></a>

```typescript
public readonly srcRegionCodesInput: string[];
```

- *Type:* string[]

---

##### `srcSecureTagInput`<sup>Optional</sup> <a name="srcSecureTagInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.srcSecureTagInput"></a>

```typescript
public readonly srcSecureTagInput: IResolvable | ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTag">ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTag</a>[]

---

##### `srcThreatIntelligencesInput`<sup>Optional</sup> <a name="srcThreatIntelligencesInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.srcThreatIntelligencesInput"></a>

```typescript
public readonly srcThreatIntelligencesInput: string[];
```

- *Type:* string[]

---

##### `destAddressGroups`<sup>Required</sup> <a name="destAddressGroups" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.destAddressGroups"></a>

```typescript
public readonly destAddressGroups: string[];
```

- *Type:* string[]

---

##### `destFqdns`<sup>Required</sup> <a name="destFqdns" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.destFqdns"></a>

```typescript
public readonly destFqdns: string[];
```

- *Type:* string[]

---

##### `destIpRanges`<sup>Required</sup> <a name="destIpRanges" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.destIpRanges"></a>

```typescript
public readonly destIpRanges: string[];
```

- *Type:* string[]

---

##### `destRegionCodes`<sup>Required</sup> <a name="destRegionCodes" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.destRegionCodes"></a>

```typescript
public readonly destRegionCodes: string[];
```

- *Type:* string[]

---

##### `destThreatIntelligences`<sup>Required</sup> <a name="destThreatIntelligences" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.destThreatIntelligences"></a>

```typescript
public readonly destThreatIntelligences: string[];
```

- *Type:* string[]

---

##### `srcAddressGroups`<sup>Required</sup> <a name="srcAddressGroups" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.srcAddressGroups"></a>

```typescript
public readonly srcAddressGroups: string[];
```

- *Type:* string[]

---

##### `srcFqdns`<sup>Required</sup> <a name="srcFqdns" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.srcFqdns"></a>

```typescript
public readonly srcFqdns: string[];
```

- *Type:* string[]

---

##### `srcIpRanges`<sup>Required</sup> <a name="srcIpRanges" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.srcIpRanges"></a>

```typescript
public readonly srcIpRanges: string[];
```

- *Type:* string[]

---

##### `srcRegionCodes`<sup>Required</sup> <a name="srcRegionCodes" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.srcRegionCodes"></a>

```typescript
public readonly srcRegionCodes: string[];
```

- *Type:* string[]

---

##### `srcThreatIntelligences`<sup>Required</sup> <a name="srcThreatIntelligences" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.srcThreatIntelligences"></a>

```typescript
public readonly srcThreatIntelligences: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeFirewallPolicyWithRulesRuleMatch;
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch">ComputeFirewallPolicyWithRulesRuleMatch</a>

---


### ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagList <a name="ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagList" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagList.Initializer"></a>

```typescript
import { computeFirewallPolicyWithRules } from '@cdktf/provider-google'

new computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagList.get"></a>

```typescript
public get(index: number): ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTag">ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTag</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTag">ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTag</a>[]

---


### ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference <a name="ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.Initializer"></a>

```typescript
import { computeFirewallPolicyWithRules } from '@cdktf/provider-google'

new computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTag">ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTag;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTag">ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTag</a>

---


### ComputeFirewallPolicyWithRulesRuleOutputReference <a name="ComputeFirewallPolicyWithRulesRuleOutputReference" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.Initializer"></a>

```typescript
import { computeFirewallPolicyWithRules } from '@cdktf/provider-google'

new computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.putMatch">putMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.putTargetSecureTag">putTargetSecureTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.resetEnableLogging">resetEnableLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.resetRuleName">resetRuleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.resetSecurityProfileGroup">resetSecurityProfileGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.resetTargetResources">resetTargetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.resetTargetSecureTag">resetTargetSecureTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.resetTargetServiceAccounts">resetTargetServiceAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.resetTlsInspect">resetTlsInspect</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatch` <a name="putMatch" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.putMatch"></a>

```typescript
public putMatch(value: ComputeFirewallPolicyWithRulesRuleMatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch">ComputeFirewallPolicyWithRulesRuleMatch</a>

---

##### `putTargetSecureTag` <a name="putTargetSecureTag" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.putTargetSecureTag"></a>

```typescript
public putTargetSecureTag(value: IResolvable | ComputeFirewallPolicyWithRulesRuleTargetSecureTag[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.putTargetSecureTag.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTag">ComputeFirewallPolicyWithRulesRuleTargetSecureTag</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDirection` <a name="resetDirection" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.resetDirection"></a>

```typescript
public resetDirection(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetEnableLogging` <a name="resetEnableLogging" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.resetEnableLogging"></a>

```typescript
public resetEnableLogging(): void
```

##### `resetRuleName` <a name="resetRuleName" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.resetRuleName"></a>

```typescript
public resetRuleName(): void
```

##### `resetSecurityProfileGroup` <a name="resetSecurityProfileGroup" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.resetSecurityProfileGroup"></a>

```typescript
public resetSecurityProfileGroup(): void
```

##### `resetTargetResources` <a name="resetTargetResources" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.resetTargetResources"></a>

```typescript
public resetTargetResources(): void
```

##### `resetTargetSecureTag` <a name="resetTargetSecureTag" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.resetTargetSecureTag"></a>

```typescript
public resetTargetSecureTag(): void
```

##### `resetTargetServiceAccounts` <a name="resetTargetServiceAccounts" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.resetTargetServiceAccounts"></a>

```typescript
public resetTargetServiceAccounts(): void
```

##### `resetTlsInspect` <a name="resetTlsInspect" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.resetTlsInspect"></a>

```typescript
public resetTlsInspect(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference">ComputeFirewallPolicyWithRulesRuleMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.targetSecureTag">targetSecureTag</a></code> | <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagList">ComputeFirewallPolicyWithRulesRuleTargetSecureTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.enableLoggingInput">enableLoggingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.matchInput">matchInput</a></code> | <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch">ComputeFirewallPolicyWithRulesRuleMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.ruleNameInput">ruleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.securityProfileGroupInput">securityProfileGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.targetResourcesInput">targetResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.targetSecureTagInput">targetSecureTagInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTag">ComputeFirewallPolicyWithRulesRuleTargetSecureTag</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.targetServiceAccountsInput">targetServiceAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.tlsInspectInput">tlsInspectInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.enableLogging">enableLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.securityProfileGroup">securityProfileGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.targetResources">targetResources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.targetServiceAccounts">targetServiceAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.tlsInspect">tlsInspect</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule">ComputeFirewallPolicyWithRulesRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.match"></a>

```typescript
public readonly match: ComputeFirewallPolicyWithRulesRuleMatchOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatchOutputReference">ComputeFirewallPolicyWithRulesRuleMatchOutputReference</a>

---

##### `targetSecureTag`<sup>Required</sup> <a name="targetSecureTag" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.targetSecureTag"></a>

```typescript
public readonly targetSecureTag: ComputeFirewallPolicyWithRulesRuleTargetSecureTagList;
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagList">ComputeFirewallPolicyWithRulesRuleTargetSecureTagList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableLoggingInput`<sup>Optional</sup> <a name="enableLoggingInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.enableLoggingInput"></a>

```typescript
public readonly enableLoggingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.matchInput"></a>

```typescript
public readonly matchInput: ComputeFirewallPolicyWithRulesRuleMatch;
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleMatch">ComputeFirewallPolicyWithRulesRuleMatch</a>

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.ruleNameInput"></a>

```typescript
public readonly ruleNameInput: string;
```

- *Type:* string

---

##### `securityProfileGroupInput`<sup>Optional</sup> <a name="securityProfileGroupInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.securityProfileGroupInput"></a>

```typescript
public readonly securityProfileGroupInput: string;
```

- *Type:* string

---

##### `targetResourcesInput`<sup>Optional</sup> <a name="targetResourcesInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.targetResourcesInput"></a>

```typescript
public readonly targetResourcesInput: string[];
```

- *Type:* string[]

---

##### `targetSecureTagInput`<sup>Optional</sup> <a name="targetSecureTagInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.targetSecureTagInput"></a>

```typescript
public readonly targetSecureTagInput: IResolvable | ComputeFirewallPolicyWithRulesRuleTargetSecureTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTag">ComputeFirewallPolicyWithRulesRuleTargetSecureTag</a>[]

---

##### `targetServiceAccountsInput`<sup>Optional</sup> <a name="targetServiceAccountsInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.targetServiceAccountsInput"></a>

```typescript
public readonly targetServiceAccountsInput: string[];
```

- *Type:* string[]

---

##### `tlsInspectInput`<sup>Optional</sup> <a name="tlsInspectInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.tlsInspectInput"></a>

```typescript
public readonly tlsInspectInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableLogging`<sup>Required</sup> <a name="enableLogging" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.enableLogging"></a>

```typescript
public readonly enableLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

##### `securityProfileGroup`<sup>Required</sup> <a name="securityProfileGroup" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.securityProfileGroup"></a>

```typescript
public readonly securityProfileGroup: string;
```

- *Type:* string

---

##### `targetResources`<sup>Required</sup> <a name="targetResources" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.targetResources"></a>

```typescript
public readonly targetResources: string[];
```

- *Type:* string[]

---

##### `targetServiceAccounts`<sup>Required</sup> <a name="targetServiceAccounts" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.targetServiceAccounts"></a>

```typescript
public readonly targetServiceAccounts: string[];
```

- *Type:* string[]

---

##### `tlsInspect`<sup>Required</sup> <a name="tlsInspect" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.tlsInspect"></a>

```typescript
public readonly tlsInspect: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeFirewallPolicyWithRulesRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRule">ComputeFirewallPolicyWithRulesRule</a>

---


### ComputeFirewallPolicyWithRulesRuleTargetSecureTagList <a name="ComputeFirewallPolicyWithRulesRuleTargetSecureTagList" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagList.Initializer"></a>

```typescript
import { computeFirewallPolicyWithRules } from '@cdktf/provider-google'

new computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagList.get"></a>

```typescript
public get(index: number): ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTag">ComputeFirewallPolicyWithRulesRuleTargetSecureTag</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeFirewallPolicyWithRulesRuleTargetSecureTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTag">ComputeFirewallPolicyWithRulesRuleTargetSecureTag</a>[]

---


### ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference <a name="ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.Initializer"></a>

```typescript
import { computeFirewallPolicyWithRules } from '@cdktf/provider-google'

new computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTag">ComputeFirewallPolicyWithRulesRuleTargetSecureTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeFirewallPolicyWithRulesRuleTargetSecureTag;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesRuleTargetSecureTag">ComputeFirewallPolicyWithRulesRuleTargetSecureTag</a>

---


### ComputeFirewallPolicyWithRulesTimeoutsOutputReference <a name="ComputeFirewallPolicyWithRulesTimeoutsOutputReference" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeFirewallPolicyWithRules } from '@cdktf/provider-google'

new computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeouts">ComputeFirewallPolicyWithRulesTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeFirewallPolicyWithRulesTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeFirewallPolicyWithRules.ComputeFirewallPolicyWithRulesTimeouts">ComputeFirewallPolicyWithRulesTimeouts</a>

---



