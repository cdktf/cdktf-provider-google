# `secureSourceManagerBranchRule` Submodule <a name="`secureSourceManagerBranchRule` Submodule" id="@cdktf/provider-google.secureSourceManagerBranchRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecureSourceManagerBranchRule <a name="SecureSourceManagerBranchRule" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/secure_source_manager_branch_rule google_secure_source_manager_branch_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer"></a>

```typescript
import { secureSourceManagerBranchRule } from '@cdktf/provider-google'

new secureSourceManagerBranchRule.SecureSourceManagerBranchRule(scope: Construct, id: string, config: SecureSourceManagerBranchRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig">SecureSourceManagerBranchRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig">SecureSourceManagerBranchRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetAllowStaleReviews">resetAllowStaleReviews</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetMinimumApprovalsCount">resetMinimumApprovalsCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetMinimumReviewsCount">resetMinimumReviewsCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetRequireCommentsResolved">resetRequireCommentsResolved</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetRequireLinearHistory">resetRequireLinearHistory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetRequirePullRequest">resetRequirePullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.putTimeouts"></a>

```typescript
public putTimeouts(value: SecureSourceManagerBranchRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts">SecureSourceManagerBranchRuleTimeouts</a>

---

##### `resetAllowStaleReviews` <a name="resetAllowStaleReviews" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetAllowStaleReviews"></a>

```typescript
public resetAllowStaleReviews(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMinimumApprovalsCount` <a name="resetMinimumApprovalsCount" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetMinimumApprovalsCount"></a>

```typescript
public resetMinimumApprovalsCount(): void
```

##### `resetMinimumReviewsCount` <a name="resetMinimumReviewsCount" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetMinimumReviewsCount"></a>

```typescript
public resetMinimumReviewsCount(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRequireCommentsResolved` <a name="resetRequireCommentsResolved" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetRequireCommentsResolved"></a>

```typescript
public resetRequireCommentsResolved(): void
```

##### `resetRequireLinearHistory` <a name="resetRequireLinearHistory" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetRequireLinearHistory"></a>

```typescript
public resetRequireLinearHistory(): void
```

##### `resetRequirePullRequest` <a name="resetRequirePullRequest" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetRequirePullRequest"></a>

```typescript
public resetRequirePullRequest(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SecureSourceManagerBranchRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.isConstruct"></a>

```typescript
import { secureSourceManagerBranchRule } from '@cdktf/provider-google'

secureSourceManagerBranchRule.SecureSourceManagerBranchRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.isTerraformElement"></a>

```typescript
import { secureSourceManagerBranchRule } from '@cdktf/provider-google'

secureSourceManagerBranchRule.SecureSourceManagerBranchRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.isTerraformResource"></a>

```typescript
import { secureSourceManagerBranchRule } from '@cdktf/provider-google'

secureSourceManagerBranchRule.SecureSourceManagerBranchRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.generateConfigForImport"></a>

```typescript
import { secureSourceManagerBranchRule } from '@cdktf/provider-google'

secureSourceManagerBranchRule.SecureSourceManagerBranchRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SecureSourceManagerBranchRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecureSourceManagerBranchRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecureSourceManagerBranchRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/secure_source_manager_branch_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SecureSourceManagerBranchRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference">SecureSourceManagerBranchRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.allowStaleReviewsInput">allowStaleReviewsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.branchRuleIdInput">branchRuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.includePatternInput">includePatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.minimumApprovalsCountInput">minimumApprovalsCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.minimumReviewsCountInput">minimumReviewsCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.repositoryIdInput">repositoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.requireCommentsResolvedInput">requireCommentsResolvedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.requireLinearHistoryInput">requireLinearHistoryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.requirePullRequestInput">requirePullRequestInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts">SecureSourceManagerBranchRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.allowStaleReviews">allowStaleReviews</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.branchRuleId">branchRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.includePattern">includePattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.minimumApprovalsCount">minimumApprovalsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.minimumReviewsCount">minimumReviewsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.repositoryId">repositoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.requireCommentsResolved">requireCommentsResolved</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.requireLinearHistory">requireLinearHistory</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.requirePullRequest">requirePullRequest</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.timeouts"></a>

```typescript
public readonly timeouts: SecureSourceManagerBranchRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference">SecureSourceManagerBranchRuleTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `allowStaleReviewsInput`<sup>Optional</sup> <a name="allowStaleReviewsInput" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.allowStaleReviewsInput"></a>

```typescript
public readonly allowStaleReviewsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `branchRuleIdInput`<sup>Optional</sup> <a name="branchRuleIdInput" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.branchRuleIdInput"></a>

```typescript
public readonly branchRuleIdInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `includePatternInput`<sup>Optional</sup> <a name="includePatternInput" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.includePatternInput"></a>

```typescript
public readonly includePatternInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `minimumApprovalsCountInput`<sup>Optional</sup> <a name="minimumApprovalsCountInput" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.minimumApprovalsCountInput"></a>

```typescript
public readonly minimumApprovalsCountInput: number;
```

- *Type:* number

---

##### `minimumReviewsCountInput`<sup>Optional</sup> <a name="minimumReviewsCountInput" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.minimumReviewsCountInput"></a>

```typescript
public readonly minimumReviewsCountInput: number;
```

- *Type:* number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.repositoryIdInput"></a>

```typescript
public readonly repositoryIdInput: string;
```

- *Type:* string

---

##### `requireCommentsResolvedInput`<sup>Optional</sup> <a name="requireCommentsResolvedInput" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.requireCommentsResolvedInput"></a>

```typescript
public readonly requireCommentsResolvedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireLinearHistoryInput`<sup>Optional</sup> <a name="requireLinearHistoryInput" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.requireLinearHistoryInput"></a>

```typescript
public readonly requireLinearHistoryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requirePullRequestInput`<sup>Optional</sup> <a name="requirePullRequestInput" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.requirePullRequestInput"></a>

```typescript
public readonly requirePullRequestInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SecureSourceManagerBranchRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts">SecureSourceManagerBranchRuleTimeouts</a>

---

##### `allowStaleReviews`<sup>Required</sup> <a name="allowStaleReviews" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.allowStaleReviews"></a>

```typescript
public readonly allowStaleReviews: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `branchRuleId`<sup>Required</sup> <a name="branchRuleId" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.branchRuleId"></a>

```typescript
public readonly branchRuleId: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `includePattern`<sup>Required</sup> <a name="includePattern" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.includePattern"></a>

```typescript
public readonly includePattern: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `minimumApprovalsCount`<sup>Required</sup> <a name="minimumApprovalsCount" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.minimumApprovalsCount"></a>

```typescript
public readonly minimumApprovalsCount: number;
```

- *Type:* number

---

##### `minimumReviewsCount`<sup>Required</sup> <a name="minimumReviewsCount" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.minimumReviewsCount"></a>

```typescript
public readonly minimumReviewsCount: number;
```

- *Type:* number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

---

##### `requireCommentsResolved`<sup>Required</sup> <a name="requireCommentsResolved" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.requireCommentsResolved"></a>

```typescript
public readonly requireCommentsResolved: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireLinearHistory`<sup>Required</sup> <a name="requireLinearHistory" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.requireLinearHistory"></a>

```typescript
public readonly requireLinearHistory: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requirePullRequest`<sup>Required</sup> <a name="requirePullRequest" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.requirePullRequest"></a>

```typescript
public readonly requirePullRequest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecureSourceManagerBranchRuleConfig <a name="SecureSourceManagerBranchRuleConfig" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.Initializer"></a>

```typescript
import { secureSourceManagerBranchRule } from '@cdktf/provider-google'

const secureSourceManagerBranchRuleConfig: secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.branchRuleId">branchRuleId</a></code> | <code>string</code> | The ID for the BranchRule. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.includePattern">includePattern</a></code> | <code>string</code> | The BranchRule matches branches based on the specified regular expression. Use .* to match all branches. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.location">location</a></code> | <code>string</code> | The location for the Repository. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.repositoryId">repositoryId</a></code> | <code>string</code> | The ID for the Repository. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.allowStaleReviews">allowStaleReviews</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determines if allow stale reviews or approvals before merging to the branch. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determines if the branch rule is disabled or not. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/secure_source_manager_branch_rule#id SecureSourceManagerBranchRule#id}. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.minimumApprovalsCount">minimumApprovalsCount</a></code> | <code>number</code> | The minimum number of approvals required for the branch rule to be matched. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.minimumReviewsCount">minimumReviewsCount</a></code> | <code>number</code> | The minimum number of reviews required for the branch rule to be matched. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/secure_source_manager_branch_rule#project SecureSourceManagerBranchRule#project}. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.requireCommentsResolved">requireCommentsResolved</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determines if require comments resolved before merging to the branch. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.requireLinearHistory">requireLinearHistory</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determines if require linear history before merging to the branch. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.requirePullRequest">requirePullRequest</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determines if the branch rule requires a pull request or not. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts">SecureSourceManagerBranchRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `branchRuleId`<sup>Required</sup> <a name="branchRuleId" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.branchRuleId"></a>

```typescript
public readonly branchRuleId: string;
```

- *Type:* string

The ID for the BranchRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/secure_source_manager_branch_rule#branch_rule_id SecureSourceManagerBranchRule#branch_rule_id}

---

##### `includePattern`<sup>Required</sup> <a name="includePattern" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.includePattern"></a>

```typescript
public readonly includePattern: string;
```

- *Type:* string

The BranchRule matches branches based on the specified regular expression. Use .* to match all branches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/secure_source_manager_branch_rule#include_pattern SecureSourceManagerBranchRule#include_pattern}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/secure_source_manager_branch_rule#location SecureSourceManagerBranchRule#location}

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

The ID for the Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/secure_source_manager_branch_rule#repository_id SecureSourceManagerBranchRule#repository_id}

---

##### `allowStaleReviews`<sup>Optional</sup> <a name="allowStaleReviews" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.allowStaleReviews"></a>

```typescript
public readonly allowStaleReviews: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determines if allow stale reviews or approvals before merging to the branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/secure_source_manager_branch_rule#allow_stale_reviews SecureSourceManagerBranchRule#allow_stale_reviews}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determines if the branch rule is disabled or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/secure_source_manager_branch_rule#disabled SecureSourceManagerBranchRule#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/secure_source_manager_branch_rule#id SecureSourceManagerBranchRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `minimumApprovalsCount`<sup>Optional</sup> <a name="minimumApprovalsCount" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.minimumApprovalsCount"></a>

```typescript
public readonly minimumApprovalsCount: number;
```

- *Type:* number

The minimum number of approvals required for the branch rule to be matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/secure_source_manager_branch_rule#minimum_approvals_count SecureSourceManagerBranchRule#minimum_approvals_count}

---

##### `minimumReviewsCount`<sup>Optional</sup> <a name="minimumReviewsCount" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.minimumReviewsCount"></a>

```typescript
public readonly minimumReviewsCount: number;
```

- *Type:* number

The minimum number of reviews required for the branch rule to be matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/secure_source_manager_branch_rule#minimum_reviews_count SecureSourceManagerBranchRule#minimum_reviews_count}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/secure_source_manager_branch_rule#project SecureSourceManagerBranchRule#project}.

---

##### `requireCommentsResolved`<sup>Optional</sup> <a name="requireCommentsResolved" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.requireCommentsResolved"></a>

```typescript
public readonly requireCommentsResolved: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determines if require comments resolved before merging to the branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/secure_source_manager_branch_rule#require_comments_resolved SecureSourceManagerBranchRule#require_comments_resolved}

---

##### `requireLinearHistory`<sup>Optional</sup> <a name="requireLinearHistory" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.requireLinearHistory"></a>

```typescript
public readonly requireLinearHistory: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determines if require linear history before merging to the branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/secure_source_manager_branch_rule#require_linear_history SecureSourceManagerBranchRule#require_linear_history}

---

##### `requirePullRequest`<sup>Optional</sup> <a name="requirePullRequest" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.requirePullRequest"></a>

```typescript
public readonly requirePullRequest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determines if the branch rule requires a pull request or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/secure_source_manager_branch_rule#require_pull_request SecureSourceManagerBranchRule#require_pull_request}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SecureSourceManagerBranchRuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts">SecureSourceManagerBranchRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/secure_source_manager_branch_rule#timeouts SecureSourceManagerBranchRule#timeouts}

---

### SecureSourceManagerBranchRuleTimeouts <a name="SecureSourceManagerBranchRuleTimeouts" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts.Initializer"></a>

```typescript
import { secureSourceManagerBranchRule } from '@cdktf/provider-google'

const secureSourceManagerBranchRuleTimeouts: secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/secure_source_manager_branch_rule#create SecureSourceManagerBranchRule#create}. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/secure_source_manager_branch_rule#delete SecureSourceManagerBranchRule#delete}. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/secure_source_manager_branch_rule#update SecureSourceManagerBranchRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/secure_source_manager_branch_rule#create SecureSourceManagerBranchRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/secure_source_manager_branch_rule#delete SecureSourceManagerBranchRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/secure_source_manager_branch_rule#update SecureSourceManagerBranchRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecureSourceManagerBranchRuleTimeoutsOutputReference <a name="SecureSourceManagerBranchRuleTimeoutsOutputReference" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { secureSourceManagerBranchRule } from '@cdktf/provider-google'

new secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts">SecureSourceManagerBranchRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecureSourceManagerBranchRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts">SecureSourceManagerBranchRuleTimeouts</a>

---



