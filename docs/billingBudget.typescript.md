# `billingBudget` Submodule <a name="`billingBudget` Submodule" id="@cdktf/provider-google.billingBudget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BillingBudget <a name="BillingBudget" id="@cdktf/provider-google.billingBudget.BillingBudget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/billing_budget google_billing_budget}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer"></a>

```typescript
import { billingBudget } from '@cdktf/provider-google'

new billingBudget.BillingBudget(scope: Construct, id: string, config: BillingBudgetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig">BillingBudgetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig">BillingBudgetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.putAllUpdatesRule">putAllUpdatesRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.putAmount">putAmount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.putBudgetFilter">putBudgetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.putThresholdRules">putThresholdRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.resetAllUpdatesRule">resetAllUpdatesRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.resetBudgetFilter">resetBudgetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.resetOwnershipScope">resetOwnershipScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.resetThresholdRules">resetThresholdRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.billingBudget.BillingBudget.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.billingBudget.BillingBudget.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.billingBudget.BillingBudget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.billingBudget.BillingBudget.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.billingBudget.BillingBudget.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.billingBudget.BillingBudget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.billingBudget.BillingBudget.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.billingBudget.BillingBudget.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.billingBudget.BillingBudget.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.billingBudget.BillingBudget.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.billingBudget.BillingBudget.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.billingBudget.BillingBudget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.billingBudget.BillingBudget.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.billingBudget.BillingBudget.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.billingBudget.BillingBudget.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.billingBudget.BillingBudget.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.billingBudget.BillingBudget.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.billingBudget.BillingBudget.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.billingBudget.BillingBudget.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.billingBudget.BillingBudget.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.billingBudget.BillingBudget.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.billingBudget.BillingBudget.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.billingBudget.BillingBudget.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAllUpdatesRule` <a name="putAllUpdatesRule" id="@cdktf/provider-google.billingBudget.BillingBudget.putAllUpdatesRule"></a>

```typescript
public putAllUpdatesRule(value: BillingBudgetAllUpdatesRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.billingBudget.BillingBudget.putAllUpdatesRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule">BillingBudgetAllUpdatesRule</a>

---

##### `putAmount` <a name="putAmount" id="@cdktf/provider-google.billingBudget.BillingBudget.putAmount"></a>

```typescript
public putAmount(value: BillingBudgetAmount): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.billingBudget.BillingBudget.putAmount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmount">BillingBudgetAmount</a>

---

##### `putBudgetFilter` <a name="putBudgetFilter" id="@cdktf/provider-google.billingBudget.BillingBudget.putBudgetFilter"></a>

```typescript
public putBudgetFilter(value: BillingBudgetBudgetFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.billingBudget.BillingBudget.putBudgetFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter">BillingBudgetBudgetFilter</a>

---

##### `putThresholdRules` <a name="putThresholdRules" id="@cdktf/provider-google.billingBudget.BillingBudget.putThresholdRules"></a>

```typescript
public putThresholdRules(value: IResolvable | BillingBudgetThresholdRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.billingBudget.BillingBudget.putThresholdRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules">BillingBudgetThresholdRules</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.billingBudget.BillingBudget.putTimeouts"></a>

```typescript
public putTimeouts(value: BillingBudgetTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.billingBudget.BillingBudget.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeouts">BillingBudgetTimeouts</a>

---

##### `resetAllUpdatesRule` <a name="resetAllUpdatesRule" id="@cdktf/provider-google.billingBudget.BillingBudget.resetAllUpdatesRule"></a>

```typescript
public resetAllUpdatesRule(): void
```

##### `resetBudgetFilter` <a name="resetBudgetFilter" id="@cdktf/provider-google.billingBudget.BillingBudget.resetBudgetFilter"></a>

```typescript
public resetBudgetFilter(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.billingBudget.BillingBudget.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.billingBudget.BillingBudget.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOwnershipScope` <a name="resetOwnershipScope" id="@cdktf/provider-google.billingBudget.BillingBudget.resetOwnershipScope"></a>

```typescript
public resetOwnershipScope(): void
```

##### `resetThresholdRules` <a name="resetThresholdRules" id="@cdktf/provider-google.billingBudget.BillingBudget.resetThresholdRules"></a>

```typescript
public resetThresholdRules(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.billingBudget.BillingBudget.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BillingBudget resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.billingBudget.BillingBudget.isConstruct"></a>

```typescript
import { billingBudget } from '@cdktf/provider-google'

billingBudget.BillingBudget.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.billingBudget.BillingBudget.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.billingBudget.BillingBudget.isTerraformElement"></a>

```typescript
import { billingBudget } from '@cdktf/provider-google'

billingBudget.BillingBudget.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.billingBudget.BillingBudget.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.billingBudget.BillingBudget.isTerraformResource"></a>

```typescript
import { billingBudget } from '@cdktf/provider-google'

billingBudget.BillingBudget.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.billingBudget.BillingBudget.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.billingBudget.BillingBudget.generateConfigForImport"></a>

```typescript
import { billingBudget } from '@cdktf/provider-google'

billingBudget.BillingBudget.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BillingBudget resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.billingBudget.BillingBudget.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.billingBudget.BillingBudget.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BillingBudget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.billingBudget.BillingBudget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BillingBudget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/billing_budget#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.billingBudget.BillingBudget.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BillingBudget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.allUpdatesRule">allUpdatesRule</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference">BillingBudgetAllUpdatesRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.amount">amount</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference">BillingBudgetAmountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.budgetFilter">budgetFilter</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference">BillingBudgetBudgetFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.thresholdRules">thresholdRules</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList">BillingBudgetThresholdRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference">BillingBudgetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.allUpdatesRuleInput">allUpdatesRuleInput</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule">BillingBudgetAllUpdatesRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.amountInput">amountInput</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmount">BillingBudgetAmount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.billingAccountInput">billingAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.budgetFilterInput">budgetFilterInput</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter">BillingBudgetBudgetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.ownershipScopeInput">ownershipScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.thresholdRulesInput">thresholdRulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules">BillingBudgetThresholdRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeouts">BillingBudgetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.billingAccount">billingAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.ownershipScope">ownershipScope</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.billingBudget.BillingBudget.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.billingBudget.BillingBudget.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.billingBudget.BillingBudget.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.billingBudget.BillingBudget.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.billingBudget.BillingBudget.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.billingBudget.BillingBudget.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.billingBudget.BillingBudget.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.billingBudget.BillingBudget.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.billingBudget.BillingBudget.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.billingBudget.BillingBudget.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.billingBudget.BillingBudget.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.billingBudget.BillingBudget.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.billingBudget.BillingBudget.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.billingBudget.BillingBudget.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allUpdatesRule`<sup>Required</sup> <a name="allUpdatesRule" id="@cdktf/provider-google.billingBudget.BillingBudget.property.allUpdatesRule"></a>

```typescript
public readonly allUpdatesRule: BillingBudgetAllUpdatesRuleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference">BillingBudgetAllUpdatesRuleOutputReference</a>

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-google.billingBudget.BillingBudget.property.amount"></a>

```typescript
public readonly amount: BillingBudgetAmountOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference">BillingBudgetAmountOutputReference</a>

---

##### `budgetFilter`<sup>Required</sup> <a name="budgetFilter" id="@cdktf/provider-google.billingBudget.BillingBudget.property.budgetFilter"></a>

```typescript
public readonly budgetFilter: BillingBudgetBudgetFilterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference">BillingBudgetBudgetFilterOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.billingBudget.BillingBudget.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `thresholdRules`<sup>Required</sup> <a name="thresholdRules" id="@cdktf/provider-google.billingBudget.BillingBudget.property.thresholdRules"></a>

```typescript
public readonly thresholdRules: BillingBudgetThresholdRulesList;
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList">BillingBudgetThresholdRulesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.billingBudget.BillingBudget.property.timeouts"></a>

```typescript
public readonly timeouts: BillingBudgetTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference">BillingBudgetTimeoutsOutputReference</a>

---

##### `allUpdatesRuleInput`<sup>Optional</sup> <a name="allUpdatesRuleInput" id="@cdktf/provider-google.billingBudget.BillingBudget.property.allUpdatesRuleInput"></a>

```typescript
public readonly allUpdatesRuleInput: BillingBudgetAllUpdatesRule;
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule">BillingBudgetAllUpdatesRule</a>

---

##### `amountInput`<sup>Optional</sup> <a name="amountInput" id="@cdktf/provider-google.billingBudget.BillingBudget.property.amountInput"></a>

```typescript
public readonly amountInput: BillingBudgetAmount;
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmount">BillingBudgetAmount</a>

---

##### `billingAccountInput`<sup>Optional</sup> <a name="billingAccountInput" id="@cdktf/provider-google.billingBudget.BillingBudget.property.billingAccountInput"></a>

```typescript
public readonly billingAccountInput: string;
```

- *Type:* string

---

##### `budgetFilterInput`<sup>Optional</sup> <a name="budgetFilterInput" id="@cdktf/provider-google.billingBudget.BillingBudget.property.budgetFilterInput"></a>

```typescript
public readonly budgetFilterInput: BillingBudgetBudgetFilter;
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter">BillingBudgetBudgetFilter</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.billingBudget.BillingBudget.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.billingBudget.BillingBudget.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ownershipScopeInput`<sup>Optional</sup> <a name="ownershipScopeInput" id="@cdktf/provider-google.billingBudget.BillingBudget.property.ownershipScopeInput"></a>

```typescript
public readonly ownershipScopeInput: string;
```

- *Type:* string

---

##### `thresholdRulesInput`<sup>Optional</sup> <a name="thresholdRulesInput" id="@cdktf/provider-google.billingBudget.BillingBudget.property.thresholdRulesInput"></a>

```typescript
public readonly thresholdRulesInput: IResolvable | BillingBudgetThresholdRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules">BillingBudgetThresholdRules</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.billingBudget.BillingBudget.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BillingBudgetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeouts">BillingBudgetTimeouts</a>

---

##### `billingAccount`<sup>Required</sup> <a name="billingAccount" id="@cdktf/provider-google.billingBudget.BillingBudget.property.billingAccount"></a>

```typescript
public readonly billingAccount: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.billingBudget.BillingBudget.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.billingBudget.BillingBudget.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ownershipScope`<sup>Required</sup> <a name="ownershipScope" id="@cdktf/provider-google.billingBudget.BillingBudget.property.ownershipScope"></a>

```typescript
public readonly ownershipScope: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.billingBudget.BillingBudget.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BillingBudgetAllUpdatesRule <a name="BillingBudgetAllUpdatesRule" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.Initializer"></a>

```typescript
import { billingBudget } from '@cdktf/provider-google'

const billingBudgetAllUpdatesRule: billingBudget.BillingBudgetAllUpdatesRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.property.disableDefaultIamRecipients">disableDefaultIamRecipients</a></code> | <code>boolean \| cdktf.IResolvable</code> | Boolean. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.property.enableProjectLevelRecipients">enableProjectLevelRecipients</a></code> | <code>boolean \| cdktf.IResolvable</code> | When set to true, and when the budget has a single project configured, notifications will be sent to project level recipients of that project. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.property.monitoringNotificationChannels">monitoringNotificationChannels</a></code> | <code>string[]</code> | The full resource name of a monitoring notification channel in the form projects/{project_id}/notificationChannels/{channel_id}. A maximum of 5 channels are allowed. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.property.pubsubTopic">pubsubTopic</a></code> | <code>string</code> | The name of the Cloud Pub/Sub topic where budget related messages will be published, in the form projects/{project_id}/topics/{topic_id}. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.property.schemaVersion">schemaVersion</a></code> | <code>string</code> | The schema version of the notification. Only "1.0" is accepted. It represents the JSON schema as defined in https://cloud.google.com/billing/docs/how-to/budgets#notification_format. |

---

##### `disableDefaultIamRecipients`<sup>Optional</sup> <a name="disableDefaultIamRecipients" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.property.disableDefaultIamRecipients"></a>

```typescript
public readonly disableDefaultIamRecipients: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Boolean.

When set to true, disables default notifications sent
when a threshold is exceeded. Default recipients are
those with Billing Account Administrators and Billing
Account Users IAM roles for the target account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/billing_budget#disable_default_iam_recipients BillingBudget#disable_default_iam_recipients}

---

##### `enableProjectLevelRecipients`<sup>Optional</sup> <a name="enableProjectLevelRecipients" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.property.enableProjectLevelRecipients"></a>

```typescript
public readonly enableProjectLevelRecipients: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When set to true, and when the budget has a single project configured, notifications will be sent to project level recipients of that project.

This field will be ignored if the budget has multiple or no project configured.

Currently, project level recipients are the users with Owner role on a cloud project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/billing_budget#enable_project_level_recipients BillingBudget#enable_project_level_recipients}

---

##### `monitoringNotificationChannels`<sup>Optional</sup> <a name="monitoringNotificationChannels" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.property.monitoringNotificationChannels"></a>

```typescript
public readonly monitoringNotificationChannels: string[];
```

- *Type:* string[]

The full resource name of a monitoring notification channel in the form projects/{project_id}/notificationChannels/{channel_id}. A maximum of 5 channels are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/billing_budget#monitoring_notification_channels BillingBudget#monitoring_notification_channels}

---

##### `pubsubTopic`<sup>Optional</sup> <a name="pubsubTopic" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.property.pubsubTopic"></a>

```typescript
public readonly pubsubTopic: string;
```

- *Type:* string

The name of the Cloud Pub/Sub topic where budget related messages will be published, in the form projects/{project_id}/topics/{topic_id}.

Updates are sent
at regular intervals to the topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/billing_budget#pubsub_topic BillingBudget#pubsub_topic}

---

##### `schemaVersion`<sup>Optional</sup> <a name="schemaVersion" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.property.schemaVersion"></a>

```typescript
public readonly schemaVersion: string;
```

- *Type:* string

The schema version of the notification. Only "1.0" is accepted. It represents the JSON schema as defined in https://cloud.google.com/billing/docs/how-to/budgets#notification_format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/billing_budget#schema_version BillingBudget#schema_version}

---

### BillingBudgetAmount <a name="BillingBudgetAmount" id="@cdktf/provider-google.billingBudget.BillingBudgetAmount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetAmount.Initializer"></a>

```typescript
import { billingBudget } from '@cdktf/provider-google'

const billingBudgetAmount: billingBudget.BillingBudgetAmount = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmount.property.lastPeriodAmount">lastPeriodAmount</a></code> | <code>boolean \| cdktf.IResolvable</code> | Configures a budget amount that is automatically set to 100% of last period's spend. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmount.property.specifiedAmount">specifiedAmount</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount">BillingBudgetAmountSpecifiedAmount</a></code> | specified_amount block. |

---

##### `lastPeriodAmount`<sup>Optional</sup> <a name="lastPeriodAmount" id="@cdktf/provider-google.billingBudget.BillingBudgetAmount.property.lastPeriodAmount"></a>

```typescript
public readonly lastPeriodAmount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Configures a budget amount that is automatically set to 100% of last period's spend.

Boolean. Set value to true to use. Do not set to false, instead
use the 'specified_amount' block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/billing_budget#last_period_amount BillingBudget#last_period_amount}

---

##### `specifiedAmount`<sup>Optional</sup> <a name="specifiedAmount" id="@cdktf/provider-google.billingBudget.BillingBudgetAmount.property.specifiedAmount"></a>

```typescript
public readonly specifiedAmount: BillingBudgetAmountSpecifiedAmount;
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount">BillingBudgetAmountSpecifiedAmount</a>

specified_amount block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/billing_budget#specified_amount BillingBudget#specified_amount}

---

### BillingBudgetAmountSpecifiedAmount <a name="BillingBudgetAmountSpecifiedAmount" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount.Initializer"></a>

```typescript
import { billingBudget } from '@cdktf/provider-google'

const billingBudgetAmountSpecifiedAmount: billingBudget.BillingBudgetAmountSpecifiedAmount = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount.property.currencyCode">currencyCode</a></code> | <code>string</code> | The 3-letter currency code defined in ISO 4217. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount.property.nanos">nanos</a></code> | <code>number</code> | Number of nano (10^-9) units of the amount. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount.property.units">units</a></code> | <code>string</code> | The whole units of the amount. For example if currencyCode is "USD", then 1 unit is one US dollar. |

---

##### `currencyCode`<sup>Optional</sup> <a name="currencyCode" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount.property.currencyCode"></a>

```typescript
public readonly currencyCode: string;
```

- *Type:* string

The 3-letter currency code defined in ISO 4217.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/billing_budget#currency_code BillingBudget#currency_code}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

Number of nano (10^-9) units of the amount.

The value must be between -999,999,999 and +999,999,999
inclusive. If units is positive, nanos must be positive or
zero. If units is zero, nanos can be positive, zero, or
negative. If units is negative, nanos must be negative or
zero. For example $-1.75 is represented as units=-1 and
nanos=-750,000,000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/billing_budget#nanos BillingBudget#nanos}

---

##### `units`<sup>Optional</sup> <a name="units" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount.property.units"></a>

```typescript
public readonly units: string;
```

- *Type:* string

The whole units of the amount. For example if currencyCode is "USD", then 1 unit is one US dollar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/billing_budget#units BillingBudget#units}

---

### BillingBudgetBudgetFilter <a name="BillingBudgetBudgetFilter" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.Initializer"></a>

```typescript
import { billingBudget } from '@cdktf/provider-google'

const billingBudgetBudgetFilter: billingBudget.BillingBudgetBudgetFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.calendarPeriod">calendarPeriod</a></code> | <code>string</code> | A CalendarPeriod represents the abstract concept of a recurring time period that has a canonical start. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.creditTypes">creditTypes</a></code> | <code>string[]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.creditTypesTreatment">creditTypesTreatment</a></code> | <code>string</code> | Specifies how credits should be treated when determining spend for threshold calculations. Default value: "INCLUDE_ALL_CREDITS" Possible values: ["INCLUDE_ALL_CREDITS", "EXCLUDE_ALL_CREDITS", "INCLUDE_SPECIFIED_CREDITS"]. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.customPeriod">customPeriod</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod">BillingBudgetBudgetFilterCustomPeriod</a></code> | custom_period block. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | A single label and value pair specifying that usage from only this set of labeled resources should be included in the budget. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.projects">projects</a></code> | <code>string[]</code> | A set of projects of the form projects/{project_number}, specifying that usage from only this set of projects should be included in the budget. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.resourceAncestors">resourceAncestors</a></code> | <code>string[]</code> | A set of folder and organization names of the form folders/{folderId} or organizations/{organizationId}, specifying that usage from only this set of folders and organizations should be included in the budget. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.services">services</a></code> | <code>string[]</code> | A set of services of the form services/{service_id}, specifying that usage from only this set of services should be included in the budget. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.subaccounts">subaccounts</a></code> | <code>string[]</code> | A set of subaccounts of the form billingAccounts/{account_id}, specifying that usage from only this set of subaccounts should be included in the budget. |

---

##### `calendarPeriod`<sup>Optional</sup> <a name="calendarPeriod" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.calendarPeriod"></a>

```typescript
public readonly calendarPeriod: string;
```

- *Type:* string

A CalendarPeriod represents the abstract concept of a recurring time period that has a canonical start.

Grammatically, "the start of the current CalendarPeriod".
All calendar times begin at 12 AM US and Canadian Pacific Time (UTC-8).

Exactly one of 'calendar_period', 'custom_period' must be provided. Possible values: ["MONTH", "QUARTER", "YEAR", "CALENDAR_PERIOD_UNSPECIFIED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/billing_budget#calendar_period BillingBudget#calendar_period}

---

##### `creditTypes`<sup>Optional</sup> <a name="creditTypes" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.creditTypes"></a>

```typescript
public readonly creditTypes: string[];
```

- *Type:* string[]

Optional.

If creditTypesTreatment is INCLUDE_SPECIFIED_CREDITS,
this is a list of credit types to be subtracted from gross cost to determine the spend for threshold calculations. See a list of acceptable credit type values.
If creditTypesTreatment is not INCLUDE_SPECIFIED_CREDITS, this field must be empty.

**Note:** If the field has a value in the config and needs to be removed, the field has to be an emtpy array in the config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/billing_budget#credit_types BillingBudget#credit_types}

---

##### `creditTypesTreatment`<sup>Optional</sup> <a name="creditTypesTreatment" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.creditTypesTreatment"></a>

```typescript
public readonly creditTypesTreatment: string;
```

- *Type:* string

Specifies how credits should be treated when determining spend for threshold calculations. Default value: "INCLUDE_ALL_CREDITS" Possible values: ["INCLUDE_ALL_CREDITS", "EXCLUDE_ALL_CREDITS", "INCLUDE_SPECIFIED_CREDITS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/billing_budget#credit_types_treatment BillingBudget#credit_types_treatment}

---

##### `customPeriod`<sup>Optional</sup> <a name="customPeriod" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.customPeriod"></a>

```typescript
public readonly customPeriod: BillingBudgetBudgetFilterCustomPeriod;
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod">BillingBudgetBudgetFilterCustomPeriod</a>

custom_period block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/billing_budget#custom_period BillingBudget#custom_period}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A single label and value pair specifying that usage from only this set of labeled resources should be included in the budget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/billing_budget#labels BillingBudget#labels}

---

##### `projects`<sup>Optional</sup> <a name="projects" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.projects"></a>

```typescript
public readonly projects: string[];
```

- *Type:* string[]

A set of projects of the form projects/{project_number}, specifying that usage from only this set of projects should be included in the budget.

If omitted, the report will include
all usage for the billing account, regardless of which project
the usage occurred on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/billing_budget#projects BillingBudget#projects}

---

##### `resourceAncestors`<sup>Optional</sup> <a name="resourceAncestors" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.resourceAncestors"></a>

```typescript
public readonly resourceAncestors: string[];
```

- *Type:* string[]

A set of folder and organization names of the form folders/{folderId} or organizations/{organizationId}, specifying that usage from only this set of folders and organizations should be included in the budget.

If omitted, the budget includes all usage that the billing account pays for. If the folder or organization
contains projects that are paid for by a different Cloud Billing account, the budget doesn't apply to those projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/billing_budget#resource_ancestors BillingBudget#resource_ancestors}

---

##### `services`<sup>Optional</sup> <a name="services" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.services"></a>

```typescript
public readonly services: string[];
```

- *Type:* string[]

A set of services of the form services/{service_id}, specifying that usage from only this set of services should be included in the budget.

If omitted, the report will include
usage for all the services. The service names are available
through the Catalog API:
https://cloud.google.com/billing/v1/how-tos/catalog-api.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/billing_budget#services BillingBudget#services}

---

##### `subaccounts`<sup>Optional</sup> <a name="subaccounts" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.subaccounts"></a>

```typescript
public readonly subaccounts: string[];
```

- *Type:* string[]

A set of subaccounts of the form billingAccounts/{account_id}, specifying that usage from only this set of subaccounts should be included in the budget.

If a subaccount is set to the name of
the parent account, usage from the parent account will be included.
If the field is omitted, the report will include usage from the parent
account and all subaccounts, if they exist.

**Note:** If the field has a value in the config and needs to be removed, the field has to be an emtpy array in the config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/billing_budget#subaccounts BillingBudget#subaccounts}

---

### BillingBudgetBudgetFilterCustomPeriod <a name="BillingBudgetBudgetFilterCustomPeriod" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod.Initializer"></a>

```typescript
import { billingBudget } from '@cdktf/provider-google'

const billingBudgetBudgetFilterCustomPeriod: billingBudget.BillingBudgetBudgetFilterCustomPeriod = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod.property.startDate">startDate</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate">BillingBudgetBudgetFilterCustomPeriodStartDate</a></code> | start_date block. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod.property.endDate">endDate</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate">BillingBudgetBudgetFilterCustomPeriodEndDate</a></code> | end_date block. |

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod.property.startDate"></a>

```typescript
public readonly startDate: BillingBudgetBudgetFilterCustomPeriodStartDate;
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate">BillingBudgetBudgetFilterCustomPeriodStartDate</a>

start_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/billing_budget#start_date BillingBudget#start_date}

---

##### `endDate`<sup>Optional</sup> <a name="endDate" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod.property.endDate"></a>

```typescript
public readonly endDate: BillingBudgetBudgetFilterCustomPeriodEndDate;
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate">BillingBudgetBudgetFilterCustomPeriodEndDate</a>

end_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/billing_budget#end_date BillingBudget#end_date}

---

### BillingBudgetBudgetFilterCustomPeriodEndDate <a name="BillingBudgetBudgetFilterCustomPeriodEndDate" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate.Initializer"></a>

```typescript
import { billingBudget } from '@cdktf/provider-google'

const billingBudgetBudgetFilterCustomPeriodEndDate: billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate.property.day">day</a></code> | <code>number</code> | Day of a month. Must be from 1 to 31 and valid for the year and month. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate.property.month">month</a></code> | <code>number</code> | Month of a year. Must be from 1 to 12. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate.property.year">year</a></code> | <code>number</code> | Year of the date. Must be from 1 to 9999. |

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate.property.day"></a>

```typescript
public readonly day: number;
```

- *Type:* number

Day of a month. Must be from 1 to 31 and valid for the year and month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/billing_budget#day BillingBudget#day}

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate.property.month"></a>

```typescript
public readonly month: number;
```

- *Type:* number

Month of a year. Must be from 1 to 12.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/billing_budget#month BillingBudget#month}

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate.property.year"></a>

```typescript
public readonly year: number;
```

- *Type:* number

Year of the date. Must be from 1 to 9999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/billing_budget#year BillingBudget#year}

---

### BillingBudgetBudgetFilterCustomPeriodStartDate <a name="BillingBudgetBudgetFilterCustomPeriodStartDate" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate.Initializer"></a>

```typescript
import { billingBudget } from '@cdktf/provider-google'

const billingBudgetBudgetFilterCustomPeriodStartDate: billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate.property.day">day</a></code> | <code>number</code> | Day of a month. Must be from 1 to 31 and valid for the year and month. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate.property.month">month</a></code> | <code>number</code> | Month of a year. Must be from 1 to 12. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate.property.year">year</a></code> | <code>number</code> | Year of the date. Must be from 1 to 9999. |

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate.property.day"></a>

```typescript
public readonly day: number;
```

- *Type:* number

Day of a month. Must be from 1 to 31 and valid for the year and month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/billing_budget#day BillingBudget#day}

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate.property.month"></a>

```typescript
public readonly month: number;
```

- *Type:* number

Month of a year. Must be from 1 to 12.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/billing_budget#month BillingBudget#month}

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate.property.year"></a>

```typescript
public readonly year: number;
```

- *Type:* number

Year of the date. Must be from 1 to 9999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/billing_budget#year BillingBudget#year}

---

### BillingBudgetConfig <a name="BillingBudgetConfig" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.Initializer"></a>

```typescript
import { billingBudget } from '@cdktf/provider-google'

const billingBudgetConfig: billingBudget.BillingBudgetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.amount">amount</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmount">BillingBudgetAmount</a></code> | amount block. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.billingAccount">billingAccount</a></code> | <code>string</code> | ID of the billing account to set a budget on. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.allUpdatesRule">allUpdatesRule</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule">BillingBudgetAllUpdatesRule</a></code> | all_updates_rule block. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.budgetFilter">budgetFilter</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter">BillingBudgetBudgetFilter</a></code> | budget_filter block. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.displayName">displayName</a></code> | <code>string</code> | User data for display name in UI. Must be <= 60 chars. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/billing_budget#id BillingBudget#id}. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.ownershipScope">ownershipScope</a></code> | <code>string</code> | The ownership scope of the budget. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.thresholdRules">thresholdRules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules">BillingBudgetThresholdRules</a>[]</code> | threshold_rules block. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeouts">BillingBudgetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.amount"></a>

```typescript
public readonly amount: BillingBudgetAmount;
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmount">BillingBudgetAmount</a>

amount block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/billing_budget#amount BillingBudget#amount}

---

##### `billingAccount`<sup>Required</sup> <a name="billingAccount" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.billingAccount"></a>

```typescript
public readonly billingAccount: string;
```

- *Type:* string

ID of the billing account to set a budget on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/billing_budget#billing_account BillingBudget#billing_account}

---

##### `allUpdatesRule`<sup>Optional</sup> <a name="allUpdatesRule" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.allUpdatesRule"></a>

```typescript
public readonly allUpdatesRule: BillingBudgetAllUpdatesRule;
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule">BillingBudgetAllUpdatesRule</a>

all_updates_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/billing_budget#all_updates_rule BillingBudget#all_updates_rule}

---

##### `budgetFilter`<sup>Optional</sup> <a name="budgetFilter" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.budgetFilter"></a>

```typescript
public readonly budgetFilter: BillingBudgetBudgetFilter;
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter">BillingBudgetBudgetFilter</a>

budget_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/billing_budget#budget_filter BillingBudget#budget_filter}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

User data for display name in UI. Must be <= 60 chars.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/billing_budget#display_name BillingBudget#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/billing_budget#id BillingBudget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ownershipScope`<sup>Optional</sup> <a name="ownershipScope" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.ownershipScope"></a>

```typescript
public readonly ownershipScope: string;
```

- *Type:* string

The ownership scope of the budget.

The ownership scope and users'
IAM permissions determine who has full access to the budget's data. Possible values: ["OWNERSHIP_SCOPE_UNSPECIFIED", "ALL_USERS", "BILLING_ACCOUNT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/billing_budget#ownership_scope BillingBudget#ownership_scope}

---

##### `thresholdRules`<sup>Optional</sup> <a name="thresholdRules" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.thresholdRules"></a>

```typescript
public readonly thresholdRules: IResolvable | BillingBudgetThresholdRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules">BillingBudgetThresholdRules</a>[]

threshold_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/billing_budget#threshold_rules BillingBudget#threshold_rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BillingBudgetTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeouts">BillingBudgetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/billing_budget#timeouts BillingBudget#timeouts}

---

### BillingBudgetThresholdRules <a name="BillingBudgetThresholdRules" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules.Initializer"></a>

```typescript
import { billingBudget } from '@cdktf/provider-google'

const billingBudgetThresholdRules: billingBudget.BillingBudgetThresholdRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules.property.thresholdPercent">thresholdPercent</a></code> | <code>number</code> | Send an alert when this threshold is exceeded. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules.property.spendBasis">spendBasis</a></code> | <code>string</code> | The type of basis used to determine if spend has passed the threshold. Default value: "CURRENT_SPEND" Possible values: ["CURRENT_SPEND", "FORECASTED_SPEND"]. |

---

##### `thresholdPercent`<sup>Required</sup> <a name="thresholdPercent" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules.property.thresholdPercent"></a>

```typescript
public readonly thresholdPercent: number;
```

- *Type:* number

Send an alert when this threshold is exceeded.

This is a
1.0-based percentage, so 0.5 = 50%. Must be >= 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/billing_budget#threshold_percent BillingBudget#threshold_percent}

---

##### `spendBasis`<sup>Optional</sup> <a name="spendBasis" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules.property.spendBasis"></a>

```typescript
public readonly spendBasis: string;
```

- *Type:* string

The type of basis used to determine if spend has passed the threshold. Default value: "CURRENT_SPEND" Possible values: ["CURRENT_SPEND", "FORECASTED_SPEND"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/billing_budget#spend_basis BillingBudget#spend_basis}

---

### BillingBudgetTimeouts <a name="BillingBudgetTimeouts" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeouts.Initializer"></a>

```typescript
import { billingBudget } from '@cdktf/provider-google'

const billingBudgetTimeouts: billingBudget.BillingBudgetTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/billing_budget#create BillingBudget#create}. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/billing_budget#delete BillingBudget#delete}. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/billing_budget#update BillingBudget#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/billing_budget#create BillingBudget#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/billing_budget#delete BillingBudget#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/billing_budget#update BillingBudget#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BillingBudgetAllUpdatesRuleOutputReference <a name="BillingBudgetAllUpdatesRuleOutputReference" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.Initializer"></a>

```typescript
import { billingBudget } from '@cdktf/provider-google'

new billingBudget.BillingBudgetAllUpdatesRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resetDisableDefaultIamRecipients">resetDisableDefaultIamRecipients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resetEnableProjectLevelRecipients">resetEnableProjectLevelRecipients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resetMonitoringNotificationChannels">resetMonitoringNotificationChannels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resetPubsubTopic">resetPubsubTopic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resetSchemaVersion">resetSchemaVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisableDefaultIamRecipients` <a name="resetDisableDefaultIamRecipients" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resetDisableDefaultIamRecipients"></a>

```typescript
public resetDisableDefaultIamRecipients(): void
```

##### `resetEnableProjectLevelRecipients` <a name="resetEnableProjectLevelRecipients" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resetEnableProjectLevelRecipients"></a>

```typescript
public resetEnableProjectLevelRecipients(): void
```

##### `resetMonitoringNotificationChannels` <a name="resetMonitoringNotificationChannels" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resetMonitoringNotificationChannels"></a>

```typescript
public resetMonitoringNotificationChannels(): void
```

##### `resetPubsubTopic` <a name="resetPubsubTopic" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resetPubsubTopic"></a>

```typescript
public resetPubsubTopic(): void
```

##### `resetSchemaVersion` <a name="resetSchemaVersion" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resetSchemaVersion"></a>

```typescript
public resetSchemaVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.disableDefaultIamRecipientsInput">disableDefaultIamRecipientsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.enableProjectLevelRecipientsInput">enableProjectLevelRecipientsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.monitoringNotificationChannelsInput">monitoringNotificationChannelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.pubsubTopicInput">pubsubTopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.schemaVersionInput">schemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.disableDefaultIamRecipients">disableDefaultIamRecipients</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.enableProjectLevelRecipients">enableProjectLevelRecipients</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.monitoringNotificationChannels">monitoringNotificationChannels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.pubsubTopic">pubsubTopic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.schemaVersion">schemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule">BillingBudgetAllUpdatesRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disableDefaultIamRecipientsInput`<sup>Optional</sup> <a name="disableDefaultIamRecipientsInput" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.disableDefaultIamRecipientsInput"></a>

```typescript
public readonly disableDefaultIamRecipientsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableProjectLevelRecipientsInput`<sup>Optional</sup> <a name="enableProjectLevelRecipientsInput" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.enableProjectLevelRecipientsInput"></a>

```typescript
public readonly enableProjectLevelRecipientsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `monitoringNotificationChannelsInput`<sup>Optional</sup> <a name="monitoringNotificationChannelsInput" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.monitoringNotificationChannelsInput"></a>

```typescript
public readonly monitoringNotificationChannelsInput: string[];
```

- *Type:* string[]

---

##### `pubsubTopicInput`<sup>Optional</sup> <a name="pubsubTopicInput" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.pubsubTopicInput"></a>

```typescript
public readonly pubsubTopicInput: string;
```

- *Type:* string

---

##### `schemaVersionInput`<sup>Optional</sup> <a name="schemaVersionInput" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.schemaVersionInput"></a>

```typescript
public readonly schemaVersionInput: string;
```

- *Type:* string

---

##### `disableDefaultIamRecipients`<sup>Required</sup> <a name="disableDefaultIamRecipients" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.disableDefaultIamRecipients"></a>

```typescript
public readonly disableDefaultIamRecipients: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableProjectLevelRecipients`<sup>Required</sup> <a name="enableProjectLevelRecipients" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.enableProjectLevelRecipients"></a>

```typescript
public readonly enableProjectLevelRecipients: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `monitoringNotificationChannels`<sup>Required</sup> <a name="monitoringNotificationChannels" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.monitoringNotificationChannels"></a>

```typescript
public readonly monitoringNotificationChannels: string[];
```

- *Type:* string[]

---

##### `pubsubTopic`<sup>Required</sup> <a name="pubsubTopic" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.pubsubTopic"></a>

```typescript
public readonly pubsubTopic: string;
```

- *Type:* string

---

##### `schemaVersion`<sup>Required</sup> <a name="schemaVersion" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.schemaVersion"></a>

```typescript
public readonly schemaVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BillingBudgetAllUpdatesRule;
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule">BillingBudgetAllUpdatesRule</a>

---


### BillingBudgetAmountOutputReference <a name="BillingBudgetAmountOutputReference" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.Initializer"></a>

```typescript
import { billingBudget } from '@cdktf/provider-google'

new billingBudget.BillingBudgetAmountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.putSpecifiedAmount">putSpecifiedAmount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.resetLastPeriodAmount">resetLastPeriodAmount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.resetSpecifiedAmount">resetSpecifiedAmount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSpecifiedAmount` <a name="putSpecifiedAmount" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.putSpecifiedAmount"></a>

```typescript
public putSpecifiedAmount(value: BillingBudgetAmountSpecifiedAmount): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.putSpecifiedAmount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount">BillingBudgetAmountSpecifiedAmount</a>

---

##### `resetLastPeriodAmount` <a name="resetLastPeriodAmount" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.resetLastPeriodAmount"></a>

```typescript
public resetLastPeriodAmount(): void
```

##### `resetSpecifiedAmount` <a name="resetSpecifiedAmount" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.resetSpecifiedAmount"></a>

```typescript
public resetSpecifiedAmount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.specifiedAmount">specifiedAmount</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference">BillingBudgetAmountSpecifiedAmountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.lastPeriodAmountInput">lastPeriodAmountInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.specifiedAmountInput">specifiedAmountInput</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount">BillingBudgetAmountSpecifiedAmount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.lastPeriodAmount">lastPeriodAmount</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmount">BillingBudgetAmount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `specifiedAmount`<sup>Required</sup> <a name="specifiedAmount" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.specifiedAmount"></a>

```typescript
public readonly specifiedAmount: BillingBudgetAmountSpecifiedAmountOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference">BillingBudgetAmountSpecifiedAmountOutputReference</a>

---

##### `lastPeriodAmountInput`<sup>Optional</sup> <a name="lastPeriodAmountInput" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.lastPeriodAmountInput"></a>

```typescript
public readonly lastPeriodAmountInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `specifiedAmountInput`<sup>Optional</sup> <a name="specifiedAmountInput" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.specifiedAmountInput"></a>

```typescript
public readonly specifiedAmountInput: BillingBudgetAmountSpecifiedAmount;
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount">BillingBudgetAmountSpecifiedAmount</a>

---

##### `lastPeriodAmount`<sup>Required</sup> <a name="lastPeriodAmount" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.lastPeriodAmount"></a>

```typescript
public readonly lastPeriodAmount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BillingBudgetAmount;
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmount">BillingBudgetAmount</a>

---


### BillingBudgetAmountSpecifiedAmountOutputReference <a name="BillingBudgetAmountSpecifiedAmountOutputReference" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.Initializer"></a>

```typescript
import { billingBudget } from '@cdktf/provider-google'

new billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.resetCurrencyCode">resetCurrencyCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.resetNanos">resetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.resetUnits">resetUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCurrencyCode` <a name="resetCurrencyCode" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.resetCurrencyCode"></a>

```typescript
public resetCurrencyCode(): void
```

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.resetNanos"></a>

```typescript
public resetNanos(): void
```

##### `resetUnits` <a name="resetUnits" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.resetUnits"></a>

```typescript
public resetUnits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.currencyCodeInput">currencyCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.nanosInput">nanosInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.unitsInput">unitsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.currencyCode">currencyCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.nanos">nanos</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.units">units</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount">BillingBudgetAmountSpecifiedAmount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `currencyCodeInput`<sup>Optional</sup> <a name="currencyCodeInput" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.currencyCodeInput"></a>

```typescript
public readonly currencyCodeInput: string;
```

- *Type:* string

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.nanosInput"></a>

```typescript
public readonly nanosInput: number;
```

- *Type:* number

---

##### `unitsInput`<sup>Optional</sup> <a name="unitsInput" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.unitsInput"></a>

```typescript
public readonly unitsInput: string;
```

- *Type:* string

---

##### `currencyCode`<sup>Required</sup> <a name="currencyCode" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.currencyCode"></a>

```typescript
public readonly currencyCode: string;
```

- *Type:* string

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

---

##### `units`<sup>Required</sup> <a name="units" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.units"></a>

```typescript
public readonly units: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BillingBudgetAmountSpecifiedAmount;
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount">BillingBudgetAmountSpecifiedAmount</a>

---


### BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference <a name="BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.Initializer"></a>

```typescript
import { billingBudget } from '@cdktf/provider-google'

new billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.dayInput">dayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.monthInput">monthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.yearInput">yearInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.day">day</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.month">month</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.year">year</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate">BillingBudgetBudgetFilterCustomPeriodEndDate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.dayInput"></a>

```typescript
public readonly dayInput: number;
```

- *Type:* number

---

##### `monthInput`<sup>Optional</sup> <a name="monthInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.monthInput"></a>

```typescript
public readonly monthInput: number;
```

- *Type:* number

---

##### `yearInput`<sup>Optional</sup> <a name="yearInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.yearInput"></a>

```typescript
public readonly yearInput: number;
```

- *Type:* number

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.day"></a>

```typescript
public readonly day: number;
```

- *Type:* number

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.month"></a>

```typescript
public readonly month: number;
```

- *Type:* number

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.year"></a>

```typescript
public readonly year: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BillingBudgetBudgetFilterCustomPeriodEndDate;
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate">BillingBudgetBudgetFilterCustomPeriodEndDate</a>

---


### BillingBudgetBudgetFilterCustomPeriodOutputReference <a name="BillingBudgetBudgetFilterCustomPeriodOutputReference" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.Initializer"></a>

```typescript
import { billingBudget } from '@cdktf/provider-google'

new billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.putEndDate">putEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.putStartDate">putStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.resetEndDate">resetEndDate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEndDate` <a name="putEndDate" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.putEndDate"></a>

```typescript
public putEndDate(value: BillingBudgetBudgetFilterCustomPeriodEndDate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.putEndDate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate">BillingBudgetBudgetFilterCustomPeriodEndDate</a>

---

##### `putStartDate` <a name="putStartDate" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.putStartDate"></a>

```typescript
public putStartDate(value: BillingBudgetBudgetFilterCustomPeriodStartDate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.putStartDate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate">BillingBudgetBudgetFilterCustomPeriodStartDate</a>

---

##### `resetEndDate` <a name="resetEndDate" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.resetEndDate"></a>

```typescript
public resetEndDate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.endDate">endDate</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference">BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.startDate">startDate</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference">BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.endDateInput">endDateInput</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate">BillingBudgetBudgetFilterCustomPeriodEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.startDateInput">startDateInput</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate">BillingBudgetBudgetFilterCustomPeriodStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod">BillingBudgetBudgetFilterCustomPeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.endDate"></a>

```typescript
public readonly endDate: BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference">BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference</a>

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.startDate"></a>

```typescript
public readonly startDate: BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference">BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference</a>

---

##### `endDateInput`<sup>Optional</sup> <a name="endDateInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.endDateInput"></a>

```typescript
public readonly endDateInput: BillingBudgetBudgetFilterCustomPeriodEndDate;
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate">BillingBudgetBudgetFilterCustomPeriodEndDate</a>

---

##### `startDateInput`<sup>Optional</sup> <a name="startDateInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.startDateInput"></a>

```typescript
public readonly startDateInput: BillingBudgetBudgetFilterCustomPeriodStartDate;
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate">BillingBudgetBudgetFilterCustomPeriodStartDate</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BillingBudgetBudgetFilterCustomPeriod;
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod">BillingBudgetBudgetFilterCustomPeriod</a>

---


### BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference <a name="BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.Initializer"></a>

```typescript
import { billingBudget } from '@cdktf/provider-google'

new billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.dayInput">dayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.monthInput">monthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.yearInput">yearInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.day">day</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.month">month</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.year">year</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate">BillingBudgetBudgetFilterCustomPeriodStartDate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.dayInput"></a>

```typescript
public readonly dayInput: number;
```

- *Type:* number

---

##### `monthInput`<sup>Optional</sup> <a name="monthInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.monthInput"></a>

```typescript
public readonly monthInput: number;
```

- *Type:* number

---

##### `yearInput`<sup>Optional</sup> <a name="yearInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.yearInput"></a>

```typescript
public readonly yearInput: number;
```

- *Type:* number

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.day"></a>

```typescript
public readonly day: number;
```

- *Type:* number

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.month"></a>

```typescript
public readonly month: number;
```

- *Type:* number

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.year"></a>

```typescript
public readonly year: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BillingBudgetBudgetFilterCustomPeriodStartDate;
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate">BillingBudgetBudgetFilterCustomPeriodStartDate</a>

---


### BillingBudgetBudgetFilterOutputReference <a name="BillingBudgetBudgetFilterOutputReference" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.Initializer"></a>

```typescript
import { billingBudget } from '@cdktf/provider-google'

new billingBudget.BillingBudgetBudgetFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.putCustomPeriod">putCustomPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetCalendarPeriod">resetCalendarPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetCreditTypes">resetCreditTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetCreditTypesTreatment">resetCreditTypesTreatment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetCustomPeriod">resetCustomPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetProjects">resetProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetResourceAncestors">resetResourceAncestors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetServices">resetServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetSubaccounts">resetSubaccounts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomPeriod` <a name="putCustomPeriod" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.putCustomPeriod"></a>

```typescript
public putCustomPeriod(value: BillingBudgetBudgetFilterCustomPeriod): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.putCustomPeriod.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod">BillingBudgetBudgetFilterCustomPeriod</a>

---

##### `resetCalendarPeriod` <a name="resetCalendarPeriod" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetCalendarPeriod"></a>

```typescript
public resetCalendarPeriod(): void
```

##### `resetCreditTypes` <a name="resetCreditTypes" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetCreditTypes"></a>

```typescript
public resetCreditTypes(): void
```

##### `resetCreditTypesTreatment` <a name="resetCreditTypesTreatment" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetCreditTypesTreatment"></a>

```typescript
public resetCreditTypesTreatment(): void
```

##### `resetCustomPeriod` <a name="resetCustomPeriod" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetCustomPeriod"></a>

```typescript
public resetCustomPeriod(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProjects` <a name="resetProjects" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetProjects"></a>

```typescript
public resetProjects(): void
```

##### `resetResourceAncestors` <a name="resetResourceAncestors" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetResourceAncestors"></a>

```typescript
public resetResourceAncestors(): void
```

##### `resetServices` <a name="resetServices" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetServices"></a>

```typescript
public resetServices(): void
```

##### `resetSubaccounts` <a name="resetSubaccounts" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetSubaccounts"></a>

```typescript
public resetSubaccounts(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.customPeriod">customPeriod</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference">BillingBudgetBudgetFilterCustomPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.calendarPeriodInput">calendarPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creditTypesInput">creditTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creditTypesTreatmentInput">creditTypesTreatmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.customPeriodInput">customPeriodInput</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod">BillingBudgetBudgetFilterCustomPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.projectsInput">projectsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.resourceAncestorsInput">resourceAncestorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.servicesInput">servicesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.subaccountsInput">subaccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.calendarPeriod">calendarPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creditTypes">creditTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creditTypesTreatment">creditTypesTreatment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.projects">projects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.resourceAncestors">resourceAncestors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.services">services</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.subaccounts">subaccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter">BillingBudgetBudgetFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customPeriod`<sup>Required</sup> <a name="customPeriod" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.customPeriod"></a>

```typescript
public readonly customPeriod: BillingBudgetBudgetFilterCustomPeriodOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference">BillingBudgetBudgetFilterCustomPeriodOutputReference</a>

---

##### `calendarPeriodInput`<sup>Optional</sup> <a name="calendarPeriodInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.calendarPeriodInput"></a>

```typescript
public readonly calendarPeriodInput: string;
```

- *Type:* string

---

##### `creditTypesInput`<sup>Optional</sup> <a name="creditTypesInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creditTypesInput"></a>

```typescript
public readonly creditTypesInput: string[];
```

- *Type:* string[]

---

##### `creditTypesTreatmentInput`<sup>Optional</sup> <a name="creditTypesTreatmentInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creditTypesTreatmentInput"></a>

```typescript
public readonly creditTypesTreatmentInput: string;
```

- *Type:* string

---

##### `customPeriodInput`<sup>Optional</sup> <a name="customPeriodInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.customPeriodInput"></a>

```typescript
public readonly customPeriodInput: BillingBudgetBudgetFilterCustomPeriod;
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod">BillingBudgetBudgetFilterCustomPeriod</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `projectsInput`<sup>Optional</sup> <a name="projectsInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.projectsInput"></a>

```typescript
public readonly projectsInput: string[];
```

- *Type:* string[]

---

##### `resourceAncestorsInput`<sup>Optional</sup> <a name="resourceAncestorsInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.resourceAncestorsInput"></a>

```typescript
public readonly resourceAncestorsInput: string[];
```

- *Type:* string[]

---

##### `servicesInput`<sup>Optional</sup> <a name="servicesInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.servicesInput"></a>

```typescript
public readonly servicesInput: string[];
```

- *Type:* string[]

---

##### `subaccountsInput`<sup>Optional</sup> <a name="subaccountsInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.subaccountsInput"></a>

```typescript
public readonly subaccountsInput: string[];
```

- *Type:* string[]

---

##### `calendarPeriod`<sup>Required</sup> <a name="calendarPeriod" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.calendarPeriod"></a>

```typescript
public readonly calendarPeriod: string;
```

- *Type:* string

---

##### `creditTypes`<sup>Required</sup> <a name="creditTypes" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creditTypes"></a>

```typescript
public readonly creditTypes: string[];
```

- *Type:* string[]

---

##### `creditTypesTreatment`<sup>Required</sup> <a name="creditTypesTreatment" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creditTypesTreatment"></a>

```typescript
public readonly creditTypesTreatment: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `projects`<sup>Required</sup> <a name="projects" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.projects"></a>

```typescript
public readonly projects: string[];
```

- *Type:* string[]

---

##### `resourceAncestors`<sup>Required</sup> <a name="resourceAncestors" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.resourceAncestors"></a>

```typescript
public readonly resourceAncestors: string[];
```

- *Type:* string[]

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.services"></a>

```typescript
public readonly services: string[];
```

- *Type:* string[]

---

##### `subaccounts`<sup>Required</sup> <a name="subaccounts" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.subaccounts"></a>

```typescript
public readonly subaccounts: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BillingBudgetBudgetFilter;
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter">BillingBudgetBudgetFilter</a>

---


### BillingBudgetThresholdRulesList <a name="BillingBudgetThresholdRulesList" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.Initializer"></a>

```typescript
import { billingBudget } from '@cdktf/provider-google'

new billingBudget.BillingBudgetThresholdRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.get"></a>

```typescript
public get(index: number): BillingBudgetThresholdRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules">BillingBudgetThresholdRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BillingBudgetThresholdRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules">BillingBudgetThresholdRules</a>[]

---


### BillingBudgetThresholdRulesOutputReference <a name="BillingBudgetThresholdRulesOutputReference" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.Initializer"></a>

```typescript
import { billingBudget } from '@cdktf/provider-google'

new billingBudget.BillingBudgetThresholdRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.resetSpendBasis">resetSpendBasis</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSpendBasis` <a name="resetSpendBasis" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.resetSpendBasis"></a>

```typescript
public resetSpendBasis(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.spendBasisInput">spendBasisInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.thresholdPercentInput">thresholdPercentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.spendBasis">spendBasis</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.thresholdPercent">thresholdPercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules">BillingBudgetThresholdRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `spendBasisInput`<sup>Optional</sup> <a name="spendBasisInput" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.spendBasisInput"></a>

```typescript
public readonly spendBasisInput: string;
```

- *Type:* string

---

##### `thresholdPercentInput`<sup>Optional</sup> <a name="thresholdPercentInput" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.thresholdPercentInput"></a>

```typescript
public readonly thresholdPercentInput: number;
```

- *Type:* number

---

##### `spendBasis`<sup>Required</sup> <a name="spendBasis" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.spendBasis"></a>

```typescript
public readonly spendBasis: string;
```

- *Type:* string

---

##### `thresholdPercent`<sup>Required</sup> <a name="thresholdPercent" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.thresholdPercent"></a>

```typescript
public readonly thresholdPercent: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BillingBudgetThresholdRules;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules">BillingBudgetThresholdRules</a>

---


### BillingBudgetTimeoutsOutputReference <a name="BillingBudgetTimeoutsOutputReference" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.Initializer"></a>

```typescript
import { billingBudget } from '@cdktf/provider-google'

new billingBudget.BillingBudgetTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeouts">BillingBudgetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BillingBudgetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeouts">BillingBudgetTimeouts</a>

---



