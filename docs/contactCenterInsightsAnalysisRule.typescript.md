# `contactCenterInsightsAnalysisRule` Submodule <a name="`contactCenterInsightsAnalysisRule` Submodule" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContactCenterInsightsAnalysisRule <a name="ContactCenterInsightsAnalysisRule" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/contact_center_insights_analysis_rule google_contact_center_insights_analysis_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer"></a>

```typescript
import { contactCenterInsightsAnalysisRule } from '@cdktf/provider-google'

new contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule(scope: Construct, id: string, config: ContactCenterInsightsAnalysisRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig">ContactCenterInsightsAnalysisRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig">ContactCenterInsightsAnalysisRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.putAnnotatorSelector">putAnnotatorSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetActive">resetActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetAnalysisPercentage">resetAnalysisPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetAnnotatorSelector">resetAnnotatorSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetConversationFilter">resetConversationFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAnnotatorSelector` <a name="putAnnotatorSelector" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.putAnnotatorSelector"></a>

```typescript
public putAnnotatorSelector(value: ContactCenterInsightsAnalysisRuleAnnotatorSelector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.putAnnotatorSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector">ContactCenterInsightsAnalysisRuleAnnotatorSelector</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.putTimeouts"></a>

```typescript
public putTimeouts(value: ContactCenterInsightsAnalysisRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts">ContactCenterInsightsAnalysisRuleTimeouts</a>

---

##### `resetActive` <a name="resetActive" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetActive"></a>

```typescript
public resetActive(): void
```

##### `resetAnalysisPercentage` <a name="resetAnalysisPercentage" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetAnalysisPercentage"></a>

```typescript
public resetAnalysisPercentage(): void
```

##### `resetAnnotatorSelector` <a name="resetAnnotatorSelector" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetAnnotatorSelector"></a>

```typescript
public resetAnnotatorSelector(): void
```

##### `resetConversationFilter` <a name="resetConversationFilter" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetConversationFilter"></a>

```typescript
public resetConversationFilter(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ContactCenterInsightsAnalysisRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.isConstruct"></a>

```typescript
import { contactCenterInsightsAnalysisRule } from '@cdktf/provider-google'

contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.isTerraformElement"></a>

```typescript
import { contactCenterInsightsAnalysisRule } from '@cdktf/provider-google'

contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.isTerraformResource"></a>

```typescript
import { contactCenterInsightsAnalysisRule } from '@cdktf/provider-google'

contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.generateConfigForImport"></a>

```typescript
import { contactCenterInsightsAnalysisRule } from '@cdktf/provider-google'

contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ContactCenterInsightsAnalysisRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContactCenterInsightsAnalysisRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContactCenterInsightsAnalysisRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/contact_center_insights_analysis_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ContactCenterInsightsAnalysisRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.annotatorSelector">annotatorSelector</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference">ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference">ContactCenterInsightsAnalysisRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.activeInput">activeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.analysisPercentageInput">analysisPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.annotatorSelectorInput">annotatorSelectorInput</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector">ContactCenterInsightsAnalysisRuleAnnotatorSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.conversationFilterInput">conversationFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts">ContactCenterInsightsAnalysisRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.active">active</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.analysisPercentage">analysisPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.conversationFilter">conversationFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `annotatorSelector`<sup>Required</sup> <a name="annotatorSelector" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.annotatorSelector"></a>

```typescript
public readonly annotatorSelector: ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference">ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.timeouts"></a>

```typescript
public readonly timeouts: ContactCenterInsightsAnalysisRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference">ContactCenterInsightsAnalysisRuleTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.activeInput"></a>

```typescript
public readonly activeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `analysisPercentageInput`<sup>Optional</sup> <a name="analysisPercentageInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.analysisPercentageInput"></a>

```typescript
public readonly analysisPercentageInput: number;
```

- *Type:* number

---

##### `annotatorSelectorInput`<sup>Optional</sup> <a name="annotatorSelectorInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.annotatorSelectorInput"></a>

```typescript
public readonly annotatorSelectorInput: ContactCenterInsightsAnalysisRuleAnnotatorSelector;
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector">ContactCenterInsightsAnalysisRuleAnnotatorSelector</a>

---

##### `conversationFilterInput`<sup>Optional</sup> <a name="conversationFilterInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.conversationFilterInput"></a>

```typescript
public readonly conversationFilterInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ContactCenterInsightsAnalysisRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts">ContactCenterInsightsAnalysisRuleTimeouts</a>

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `analysisPercentage`<sup>Required</sup> <a name="analysisPercentage" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.analysisPercentage"></a>

```typescript
public readonly analysisPercentage: number;
```

- *Type:* number

---

##### `conversationFilter`<sup>Required</sup> <a name="conversationFilter" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.conversationFilter"></a>

```typescript
public readonly conversationFilter: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContactCenterInsightsAnalysisRuleAnnotatorSelector <a name="ContactCenterInsightsAnalysisRuleAnnotatorSelector" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.Initializer"></a>

```typescript
import { contactCenterInsightsAnalysisRule } from '@cdktf/provider-google'

const contactCenterInsightsAnalysisRuleAnnotatorSelector: contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.issueModels">issueModels</a></code> | <code>string[]</code> | The issue model to run. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.phraseMatchers">phraseMatchers</a></code> | <code>string[]</code> | The list of phrase matchers to run. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.qaConfig">qaConfig</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a></code> | qa_config block. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runEntityAnnotator">runEntityAnnotator</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to run the entity annotator. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runIntentAnnotator">runIntentAnnotator</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to run the intent annotator. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runInterruptionAnnotator">runInterruptionAnnotator</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to run the interruption annotator. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runIssueModelAnnotator">runIssueModelAnnotator</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to run the issue model annotator. A model should have already been deployed for this to take effect. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runPhraseMatcherAnnotator">runPhraseMatcherAnnotator</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to run the active phrase matcher annotator(s). |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runQaAnnotator">runQaAnnotator</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to run the QA annotator. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runSentimentAnnotator">runSentimentAnnotator</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to run the sentiment annotator. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runSilenceAnnotator">runSilenceAnnotator</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to run the silence annotator. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runSummarizationAnnotator">runSummarizationAnnotator</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to run the summarization annotator. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.summarizationConfig">summarizationConfig</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a></code> | summarization_config block. |

---

##### `issueModels`<sup>Optional</sup> <a name="issueModels" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.issueModels"></a>

```typescript
public readonly issueModels: string[];
```

- *Type:* string[]

The issue model to run.

If not provided, the most recently deployed topic
model will be used. The provided issue model will only be used for
inference if the issue model is deployed and if run_issue_model_annotator
is set to true. If more than one issue model is provided, only the first
provided issue model will be used for inference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/contact_center_insights_analysis_rule#issue_models ContactCenterInsightsAnalysisRule#issue_models}

---

##### `phraseMatchers`<sup>Optional</sup> <a name="phraseMatchers" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.phraseMatchers"></a>

```typescript
public readonly phraseMatchers: string[];
```

- *Type:* string[]

The list of phrase matchers to run.

If not provided, all active phrase
matchers will be used. If inactive phrase matchers are provided, they will
not be used. Phrase matchers will be run only if
run_phrase_matcher_annotator is set to true. Format:
projects/{project}/locations/{location}/phraseMatchers/{phrase_matcher}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/contact_center_insights_analysis_rule#phrase_matchers ContactCenterInsightsAnalysisRule#phrase_matchers}

---

##### `qaConfig`<sup>Optional</sup> <a name="qaConfig" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.qaConfig"></a>

```typescript
public readonly qaConfig: ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig;
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a>

qa_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/contact_center_insights_analysis_rule#qa_config ContactCenterInsightsAnalysisRule#qa_config}

---

##### `runEntityAnnotator`<sup>Optional</sup> <a name="runEntityAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runEntityAnnotator"></a>

```typescript
public readonly runEntityAnnotator: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to run the entity annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/contact_center_insights_analysis_rule#run_entity_annotator ContactCenterInsightsAnalysisRule#run_entity_annotator}

---

##### `runIntentAnnotator`<sup>Optional</sup> <a name="runIntentAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runIntentAnnotator"></a>

```typescript
public readonly runIntentAnnotator: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to run the intent annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/contact_center_insights_analysis_rule#run_intent_annotator ContactCenterInsightsAnalysisRule#run_intent_annotator}

---

##### `runInterruptionAnnotator`<sup>Optional</sup> <a name="runInterruptionAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runInterruptionAnnotator"></a>

```typescript
public readonly runInterruptionAnnotator: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to run the interruption annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/contact_center_insights_analysis_rule#run_interruption_annotator ContactCenterInsightsAnalysisRule#run_interruption_annotator}

---

##### `runIssueModelAnnotator`<sup>Optional</sup> <a name="runIssueModelAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runIssueModelAnnotator"></a>

```typescript
public readonly runIssueModelAnnotator: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to run the issue model annotator. A model should have already been deployed for this to take effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/contact_center_insights_analysis_rule#run_issue_model_annotator ContactCenterInsightsAnalysisRule#run_issue_model_annotator}

---

##### `runPhraseMatcherAnnotator`<sup>Optional</sup> <a name="runPhraseMatcherAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runPhraseMatcherAnnotator"></a>

```typescript
public readonly runPhraseMatcherAnnotator: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to run the active phrase matcher annotator(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/contact_center_insights_analysis_rule#run_phrase_matcher_annotator ContactCenterInsightsAnalysisRule#run_phrase_matcher_annotator}

---

##### `runQaAnnotator`<sup>Optional</sup> <a name="runQaAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runQaAnnotator"></a>

```typescript
public readonly runQaAnnotator: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to run the QA annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/contact_center_insights_analysis_rule#run_qa_annotator ContactCenterInsightsAnalysisRule#run_qa_annotator}

---

##### `runSentimentAnnotator`<sup>Optional</sup> <a name="runSentimentAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runSentimentAnnotator"></a>

```typescript
public readonly runSentimentAnnotator: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to run the sentiment annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/contact_center_insights_analysis_rule#run_sentiment_annotator ContactCenterInsightsAnalysisRule#run_sentiment_annotator}

---

##### `runSilenceAnnotator`<sup>Optional</sup> <a name="runSilenceAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runSilenceAnnotator"></a>

```typescript
public readonly runSilenceAnnotator: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to run the silence annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/contact_center_insights_analysis_rule#run_silence_annotator ContactCenterInsightsAnalysisRule#run_silence_annotator}

---

##### `runSummarizationAnnotator`<sup>Optional</sup> <a name="runSummarizationAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runSummarizationAnnotator"></a>

```typescript
public readonly runSummarizationAnnotator: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to run the summarization annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/contact_center_insights_analysis_rule#run_summarization_annotator ContactCenterInsightsAnalysisRule#run_summarization_annotator}

---

##### `summarizationConfig`<sup>Optional</sup> <a name="summarizationConfig" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.summarizationConfig"></a>

```typescript
public readonly summarizationConfig: ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig;
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a>

summarization_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/contact_center_insights_analysis_rule#summarization_config ContactCenterInsightsAnalysisRule#summarization_config}

---

### ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig <a name="ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig.Initializer"></a>

```typescript
import { contactCenterInsightsAnalysisRule } from '@cdktf/provider-google'

const contactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig: contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig.property.scorecardList">scorecardList</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a></code> | scorecard_list block. |

---

##### `scorecardList`<sup>Optional</sup> <a name="scorecardList" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig.property.scorecardList"></a>

```typescript
public readonly scorecardList: ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct;
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a>

scorecard_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/contact_center_insights_analysis_rule#scorecard_list ContactCenterInsightsAnalysisRule#scorecard_list}

---

### ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct <a name="ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct.Initializer"></a>

```typescript
import { contactCenterInsightsAnalysisRule } from '@cdktf/provider-google'

const contactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct: contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct.property.qaScorecardRevisions">qaScorecardRevisions</a></code> | <code>string[]</code> | List of QaScorecardRevisions. |

---

##### `qaScorecardRevisions`<sup>Optional</sup> <a name="qaScorecardRevisions" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct.property.qaScorecardRevisions"></a>

```typescript
public readonly qaScorecardRevisions: string[];
```

- *Type:* string[]

List of QaScorecardRevisions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/contact_center_insights_analysis_rule#qa_scorecard_revisions ContactCenterInsightsAnalysisRule#qa_scorecard_revisions}

---

### ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig <a name="ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig.Initializer"></a>

```typescript
import { contactCenterInsightsAnalysisRule } from '@cdktf/provider-google'

const contactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig: contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig.property.conversationProfile">conversationProfile</a></code> | <code>string</code> | Resource name of the Dialogflow conversation profile. Format: projects/{project}/locations/{location}/conversationProfiles/{conversation_profile}. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig.property.summarizationModel">summarizationModel</a></code> | <code>string</code> | Default summarization model to be used. Possible values: SUMMARIZATION_MODEL_UNSPECIFIED BASELINE_MODEL BASELINE_MODEL_V2_0 Possible values: ["BASELINE_MODEL", "BASELINE_MODEL_V2_0"]. |

---

##### `conversationProfile`<sup>Optional</sup> <a name="conversationProfile" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig.property.conversationProfile"></a>

```typescript
public readonly conversationProfile: string;
```

- *Type:* string

Resource name of the Dialogflow conversation profile. Format: projects/{project}/locations/{location}/conversationProfiles/{conversation_profile}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/contact_center_insights_analysis_rule#conversation_profile ContactCenterInsightsAnalysisRule#conversation_profile}

---

##### `summarizationModel`<sup>Optional</sup> <a name="summarizationModel" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig.property.summarizationModel"></a>

```typescript
public readonly summarizationModel: string;
```

- *Type:* string

Default summarization model to be used. Possible values: SUMMARIZATION_MODEL_UNSPECIFIED BASELINE_MODEL BASELINE_MODEL_V2_0 Possible values: ["BASELINE_MODEL", "BASELINE_MODEL_V2_0"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/contact_center_insights_analysis_rule#summarization_model ContactCenterInsightsAnalysisRule#summarization_model}

---

### ContactCenterInsightsAnalysisRuleConfig <a name="ContactCenterInsightsAnalysisRuleConfig" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.Initializer"></a>

```typescript
import { contactCenterInsightsAnalysisRule } from '@cdktf/provider-google'

const contactCenterInsightsAnalysisRuleConfig: contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.location">location</a></code> | <code>string</code> | Location of the resource. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.active">active</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, apply this rule to conversations. Otherwise, this rule is inactive and saved as a draft. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.analysisPercentage">analysisPercentage</a></code> | <code>number</code> | Percentage of conversations that we should apply this analysis setting automatically, between [0, 1]. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.annotatorSelector">annotatorSelector</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector">ContactCenterInsightsAnalysisRuleAnnotatorSelector</a></code> | annotator_selector block. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.conversationFilter">conversationFilter</a></code> | <code>string</code> | Filter for the conversations that should apply this analysis rule. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.displayName">displayName</a></code> | <code>string</code> | Display Name of the analysis rule. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/contact_center_insights_analysis_rule#id ContactCenterInsightsAnalysisRule#id}. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/contact_center_insights_analysis_rule#project ContactCenterInsightsAnalysisRule#project}. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts">ContactCenterInsightsAnalysisRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/contact_center_insights_analysis_rule#location ContactCenterInsightsAnalysisRule#location}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, apply this rule to conversations. Otherwise, this rule is inactive and saved as a draft.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/contact_center_insights_analysis_rule#active ContactCenterInsightsAnalysisRule#active}

---

##### `analysisPercentage`<sup>Optional</sup> <a name="analysisPercentage" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.analysisPercentage"></a>

```typescript
public readonly analysisPercentage: number;
```

- *Type:* number

Percentage of conversations that we should apply this analysis setting automatically, between [0, 1].

For example, 0.1 means 10%. Conversations
are sampled in a determenestic way. The original runtime_percentage &
upload percentage will be replaced by defining filters on the conversation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/contact_center_insights_analysis_rule#analysis_percentage ContactCenterInsightsAnalysisRule#analysis_percentage}

---

##### `annotatorSelector`<sup>Optional</sup> <a name="annotatorSelector" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.annotatorSelector"></a>

```typescript
public readonly annotatorSelector: ContactCenterInsightsAnalysisRuleAnnotatorSelector;
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector">ContactCenterInsightsAnalysisRuleAnnotatorSelector</a>

annotator_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/contact_center_insights_analysis_rule#annotator_selector ContactCenterInsightsAnalysisRule#annotator_selector}

---

##### `conversationFilter`<sup>Optional</sup> <a name="conversationFilter" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.conversationFilter"></a>

```typescript
public readonly conversationFilter: string;
```

- *Type:* string

Filter for the conversations that should apply this analysis rule.

An empty filter means this analysis rule applies to all
conversations.
Refer to https://cloud.google.com/contact-center/insights/docs/filtering
for details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/contact_center_insights_analysis_rule#conversation_filter ContactCenterInsightsAnalysisRule#conversation_filter}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display Name of the analysis rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/contact_center_insights_analysis_rule#display_name ContactCenterInsightsAnalysisRule#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/contact_center_insights_analysis_rule#id ContactCenterInsightsAnalysisRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/contact_center_insights_analysis_rule#project ContactCenterInsightsAnalysisRule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ContactCenterInsightsAnalysisRuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts">ContactCenterInsightsAnalysisRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/contact_center_insights_analysis_rule#timeouts ContactCenterInsightsAnalysisRule#timeouts}

---

### ContactCenterInsightsAnalysisRuleTimeouts <a name="ContactCenterInsightsAnalysisRuleTimeouts" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts.Initializer"></a>

```typescript
import { contactCenterInsightsAnalysisRule } from '@cdktf/provider-google'

const contactCenterInsightsAnalysisRuleTimeouts: contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/contact_center_insights_analysis_rule#create ContactCenterInsightsAnalysisRule#create}. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/contact_center_insights_analysis_rule#delete ContactCenterInsightsAnalysisRule#delete}. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/contact_center_insights_analysis_rule#update ContactCenterInsightsAnalysisRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/contact_center_insights_analysis_rule#create ContactCenterInsightsAnalysisRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/contact_center_insights_analysis_rule#delete ContactCenterInsightsAnalysisRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/contact_center_insights_analysis_rule#update ContactCenterInsightsAnalysisRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference <a name="ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.Initializer"></a>

```typescript
import { contactCenterInsightsAnalysisRule } from '@cdktf/provider-google'

new contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putQaConfig">putQaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putSummarizationConfig">putSummarizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetIssueModels">resetIssueModels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetPhraseMatchers">resetPhraseMatchers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetQaConfig">resetQaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunEntityAnnotator">resetRunEntityAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunIntentAnnotator">resetRunIntentAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunInterruptionAnnotator">resetRunInterruptionAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunIssueModelAnnotator">resetRunIssueModelAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunPhraseMatcherAnnotator">resetRunPhraseMatcherAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunQaAnnotator">resetRunQaAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunSentimentAnnotator">resetRunSentimentAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunSilenceAnnotator">resetRunSilenceAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunSummarizationAnnotator">resetRunSummarizationAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetSummarizationConfig">resetSummarizationConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putQaConfig` <a name="putQaConfig" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putQaConfig"></a>

```typescript
public putQaConfig(value: ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putQaConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a>

---

##### `putSummarizationConfig` <a name="putSummarizationConfig" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putSummarizationConfig"></a>

```typescript
public putSummarizationConfig(value: ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putSummarizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a>

---

##### `resetIssueModels` <a name="resetIssueModels" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetIssueModels"></a>

```typescript
public resetIssueModels(): void
```

##### `resetPhraseMatchers` <a name="resetPhraseMatchers" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetPhraseMatchers"></a>

```typescript
public resetPhraseMatchers(): void
```

##### `resetQaConfig` <a name="resetQaConfig" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetQaConfig"></a>

```typescript
public resetQaConfig(): void
```

##### `resetRunEntityAnnotator` <a name="resetRunEntityAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunEntityAnnotator"></a>

```typescript
public resetRunEntityAnnotator(): void
```

##### `resetRunIntentAnnotator` <a name="resetRunIntentAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunIntentAnnotator"></a>

```typescript
public resetRunIntentAnnotator(): void
```

##### `resetRunInterruptionAnnotator` <a name="resetRunInterruptionAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunInterruptionAnnotator"></a>

```typescript
public resetRunInterruptionAnnotator(): void
```

##### `resetRunIssueModelAnnotator` <a name="resetRunIssueModelAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunIssueModelAnnotator"></a>

```typescript
public resetRunIssueModelAnnotator(): void
```

##### `resetRunPhraseMatcherAnnotator` <a name="resetRunPhraseMatcherAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunPhraseMatcherAnnotator"></a>

```typescript
public resetRunPhraseMatcherAnnotator(): void
```

##### `resetRunQaAnnotator` <a name="resetRunQaAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunQaAnnotator"></a>

```typescript
public resetRunQaAnnotator(): void
```

##### `resetRunSentimentAnnotator` <a name="resetRunSentimentAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunSentimentAnnotator"></a>

```typescript
public resetRunSentimentAnnotator(): void
```

##### `resetRunSilenceAnnotator` <a name="resetRunSilenceAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunSilenceAnnotator"></a>

```typescript
public resetRunSilenceAnnotator(): void
```

##### `resetRunSummarizationAnnotator` <a name="resetRunSummarizationAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunSummarizationAnnotator"></a>

```typescript
public resetRunSummarizationAnnotator(): void
```

##### `resetSummarizationConfig` <a name="resetSummarizationConfig" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetSummarizationConfig"></a>

```typescript
public resetSummarizationConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.qaConfig">qaConfig</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.summarizationConfig">summarizationConfig</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference">ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.issueModelsInput">issueModelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.phraseMatchersInput">phraseMatchersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.qaConfigInput">qaConfigInput</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runEntityAnnotatorInput">runEntityAnnotatorInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIntentAnnotatorInput">runIntentAnnotatorInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runInterruptionAnnotatorInput">runInterruptionAnnotatorInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIssueModelAnnotatorInput">runIssueModelAnnotatorInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runPhraseMatcherAnnotatorInput">runPhraseMatcherAnnotatorInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runQaAnnotatorInput">runQaAnnotatorInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSentimentAnnotatorInput">runSentimentAnnotatorInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSilenceAnnotatorInput">runSilenceAnnotatorInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSummarizationAnnotatorInput">runSummarizationAnnotatorInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.summarizationConfigInput">summarizationConfigInput</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.issueModels">issueModels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.phraseMatchers">phraseMatchers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runEntityAnnotator">runEntityAnnotator</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIntentAnnotator">runIntentAnnotator</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runInterruptionAnnotator">runInterruptionAnnotator</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIssueModelAnnotator">runIssueModelAnnotator</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runPhraseMatcherAnnotator">runPhraseMatcherAnnotator</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runQaAnnotator">runQaAnnotator</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSentimentAnnotator">runSentimentAnnotator</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSilenceAnnotator">runSilenceAnnotator</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSummarizationAnnotator">runSummarizationAnnotator</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector">ContactCenterInsightsAnalysisRuleAnnotatorSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `qaConfig`<sup>Required</sup> <a name="qaConfig" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.qaConfig"></a>

```typescript
public readonly qaConfig: ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference</a>

---

##### `summarizationConfig`<sup>Required</sup> <a name="summarizationConfig" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.summarizationConfig"></a>

```typescript
public readonly summarizationConfig: ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference">ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference</a>

---

##### `issueModelsInput`<sup>Optional</sup> <a name="issueModelsInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.issueModelsInput"></a>

```typescript
public readonly issueModelsInput: string[];
```

- *Type:* string[]

---

##### `phraseMatchersInput`<sup>Optional</sup> <a name="phraseMatchersInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.phraseMatchersInput"></a>

```typescript
public readonly phraseMatchersInput: string[];
```

- *Type:* string[]

---

##### `qaConfigInput`<sup>Optional</sup> <a name="qaConfigInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.qaConfigInput"></a>

```typescript
public readonly qaConfigInput: ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig;
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a>

---

##### `runEntityAnnotatorInput`<sup>Optional</sup> <a name="runEntityAnnotatorInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runEntityAnnotatorInput"></a>

```typescript
public readonly runEntityAnnotatorInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runIntentAnnotatorInput`<sup>Optional</sup> <a name="runIntentAnnotatorInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIntentAnnotatorInput"></a>

```typescript
public readonly runIntentAnnotatorInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runInterruptionAnnotatorInput`<sup>Optional</sup> <a name="runInterruptionAnnotatorInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runInterruptionAnnotatorInput"></a>

```typescript
public readonly runInterruptionAnnotatorInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runIssueModelAnnotatorInput`<sup>Optional</sup> <a name="runIssueModelAnnotatorInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIssueModelAnnotatorInput"></a>

```typescript
public readonly runIssueModelAnnotatorInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runPhraseMatcherAnnotatorInput`<sup>Optional</sup> <a name="runPhraseMatcherAnnotatorInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runPhraseMatcherAnnotatorInput"></a>

```typescript
public readonly runPhraseMatcherAnnotatorInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runQaAnnotatorInput`<sup>Optional</sup> <a name="runQaAnnotatorInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runQaAnnotatorInput"></a>

```typescript
public readonly runQaAnnotatorInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runSentimentAnnotatorInput`<sup>Optional</sup> <a name="runSentimentAnnotatorInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSentimentAnnotatorInput"></a>

```typescript
public readonly runSentimentAnnotatorInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runSilenceAnnotatorInput`<sup>Optional</sup> <a name="runSilenceAnnotatorInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSilenceAnnotatorInput"></a>

```typescript
public readonly runSilenceAnnotatorInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runSummarizationAnnotatorInput`<sup>Optional</sup> <a name="runSummarizationAnnotatorInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSummarizationAnnotatorInput"></a>

```typescript
public readonly runSummarizationAnnotatorInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `summarizationConfigInput`<sup>Optional</sup> <a name="summarizationConfigInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.summarizationConfigInput"></a>

```typescript
public readonly summarizationConfigInput: ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig;
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a>

---

##### `issueModels`<sup>Required</sup> <a name="issueModels" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.issueModels"></a>

```typescript
public readonly issueModels: string[];
```

- *Type:* string[]

---

##### `phraseMatchers`<sup>Required</sup> <a name="phraseMatchers" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.phraseMatchers"></a>

```typescript
public readonly phraseMatchers: string[];
```

- *Type:* string[]

---

##### `runEntityAnnotator`<sup>Required</sup> <a name="runEntityAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runEntityAnnotator"></a>

```typescript
public readonly runEntityAnnotator: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runIntentAnnotator`<sup>Required</sup> <a name="runIntentAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIntentAnnotator"></a>

```typescript
public readonly runIntentAnnotator: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runInterruptionAnnotator`<sup>Required</sup> <a name="runInterruptionAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runInterruptionAnnotator"></a>

```typescript
public readonly runInterruptionAnnotator: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runIssueModelAnnotator`<sup>Required</sup> <a name="runIssueModelAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIssueModelAnnotator"></a>

```typescript
public readonly runIssueModelAnnotator: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runPhraseMatcherAnnotator`<sup>Required</sup> <a name="runPhraseMatcherAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runPhraseMatcherAnnotator"></a>

```typescript
public readonly runPhraseMatcherAnnotator: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runQaAnnotator`<sup>Required</sup> <a name="runQaAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runQaAnnotator"></a>

```typescript
public readonly runQaAnnotator: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runSentimentAnnotator`<sup>Required</sup> <a name="runSentimentAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSentimentAnnotator"></a>

```typescript
public readonly runSentimentAnnotator: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runSilenceAnnotator`<sup>Required</sup> <a name="runSilenceAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSilenceAnnotator"></a>

```typescript
public readonly runSilenceAnnotator: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runSummarizationAnnotator`<sup>Required</sup> <a name="runSummarizationAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSummarizationAnnotator"></a>

```typescript
public readonly runSummarizationAnnotator: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContactCenterInsightsAnalysisRuleAnnotatorSelector;
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector">ContactCenterInsightsAnalysisRuleAnnotatorSelector</a>

---


### ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference <a name="ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.Initializer"></a>

```typescript
import { contactCenterInsightsAnalysisRule } from '@cdktf/provider-google'

new contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.putScorecardList">putScorecardList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.resetScorecardList">resetScorecardList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScorecardList` <a name="putScorecardList" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.putScorecardList"></a>

```typescript
public putScorecardList(value: ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.putScorecardList.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a>

---

##### `resetScorecardList` <a name="resetScorecardList" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.resetScorecardList"></a>

```typescript
public resetScorecardList(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.scorecardList">scorecardList</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.scorecardListInput">scorecardListInput</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scorecardList`<sup>Required</sup> <a name="scorecardList" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.scorecardList"></a>

```typescript
public readonly scorecardList: ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference</a>

---

##### `scorecardListInput`<sup>Optional</sup> <a name="scorecardListInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.scorecardListInput"></a>

```typescript
public readonly scorecardListInput: ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct;
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig;
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a>

---


### ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference <a name="ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.Initializer"></a>

```typescript
import { contactCenterInsightsAnalysisRule } from '@cdktf/provider-google'

new contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.resetQaScorecardRevisions">resetQaScorecardRevisions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQaScorecardRevisions` <a name="resetQaScorecardRevisions" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.resetQaScorecardRevisions"></a>

```typescript
public resetQaScorecardRevisions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.qaScorecardRevisionsInput">qaScorecardRevisionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.qaScorecardRevisions">qaScorecardRevisions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `qaScorecardRevisionsInput`<sup>Optional</sup> <a name="qaScorecardRevisionsInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.qaScorecardRevisionsInput"></a>

```typescript
public readonly qaScorecardRevisionsInput: string[];
```

- *Type:* string[]

---

##### `qaScorecardRevisions`<sup>Required</sup> <a name="qaScorecardRevisions" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.qaScorecardRevisions"></a>

```typescript
public readonly qaScorecardRevisions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct;
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a>

---


### ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference <a name="ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.Initializer"></a>

```typescript
import { contactCenterInsightsAnalysisRule } from '@cdktf/provider-google'

new contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resetConversationProfile">resetConversationProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resetSummarizationModel">resetSummarizationModel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConversationProfile` <a name="resetConversationProfile" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resetConversationProfile"></a>

```typescript
public resetConversationProfile(): void
```

##### `resetSummarizationModel` <a name="resetSummarizationModel" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resetSummarizationModel"></a>

```typescript
public resetSummarizationModel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.conversationProfileInput">conversationProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.summarizationModelInput">summarizationModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.conversationProfile">conversationProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.summarizationModel">summarizationModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conversationProfileInput`<sup>Optional</sup> <a name="conversationProfileInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.conversationProfileInput"></a>

```typescript
public readonly conversationProfileInput: string;
```

- *Type:* string

---

##### `summarizationModelInput`<sup>Optional</sup> <a name="summarizationModelInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.summarizationModelInput"></a>

```typescript
public readonly summarizationModelInput: string;
```

- *Type:* string

---

##### `conversationProfile`<sup>Required</sup> <a name="conversationProfile" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.conversationProfile"></a>

```typescript
public readonly conversationProfile: string;
```

- *Type:* string

---

##### `summarizationModel`<sup>Required</sup> <a name="summarizationModel" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.summarizationModel"></a>

```typescript
public readonly summarizationModel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig;
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a>

---


### ContactCenterInsightsAnalysisRuleTimeoutsOutputReference <a name="ContactCenterInsightsAnalysisRuleTimeoutsOutputReference" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { contactCenterInsightsAnalysisRule } from '@cdktf/provider-google'

new contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts">ContactCenterInsightsAnalysisRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactCenterInsightsAnalysisRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts">ContactCenterInsightsAnalysisRuleTimeouts</a>

---



