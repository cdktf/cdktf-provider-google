# `privilegedAccessManagerEntitlement` Submodule <a name="`privilegedAccessManagerEntitlement` Submodule" id="@cdktf/provider-google.privilegedAccessManagerEntitlement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivilegedAccessManagerEntitlement <a name="PrivilegedAccessManagerEntitlement" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/privileged_access_manager_entitlement google_privileged_access_manager_entitlement}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.Initializer"></a>

```typescript
import { privilegedAccessManagerEntitlement } from '@cdktf/provider-google'

new privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement(scope: Construct, id: string, config: PrivilegedAccessManagerEntitlementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig">PrivilegedAccessManagerEntitlementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig">PrivilegedAccessManagerEntitlementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.putAdditionalNotificationTargets">putAdditionalNotificationTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.putApprovalWorkflow">putApprovalWorkflow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.putEligibleUsers">putEligibleUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.putPrivilegedAccess">putPrivilegedAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.putRequesterJustificationConfig">putRequesterJustificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.resetAdditionalNotificationTargets">resetAdditionalNotificationTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.resetApprovalWorkflow">resetApprovalWorkflow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdditionalNotificationTargets` <a name="putAdditionalNotificationTargets" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.putAdditionalNotificationTargets"></a>

```typescript
public putAdditionalNotificationTargets(value: PrivilegedAccessManagerEntitlementAdditionalNotificationTargets): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.putAdditionalNotificationTargets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargets">PrivilegedAccessManagerEntitlementAdditionalNotificationTargets</a>

---

##### `putApprovalWorkflow` <a name="putApprovalWorkflow" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.putApprovalWorkflow"></a>

```typescript
public putApprovalWorkflow(value: PrivilegedAccessManagerEntitlementApprovalWorkflow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.putApprovalWorkflow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflow">PrivilegedAccessManagerEntitlementApprovalWorkflow</a>

---

##### `putEligibleUsers` <a name="putEligibleUsers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.putEligibleUsers"></a>

```typescript
public putEligibleUsers(value: IResolvable | PrivilegedAccessManagerEntitlementEligibleUsers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.putEligibleUsers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsers">PrivilegedAccessManagerEntitlementEligibleUsers</a>[]

---

##### `putPrivilegedAccess` <a name="putPrivilegedAccess" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.putPrivilegedAccess"></a>

```typescript
public putPrivilegedAccess(value: PrivilegedAccessManagerEntitlementPrivilegedAccess): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.putPrivilegedAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccess">PrivilegedAccessManagerEntitlementPrivilegedAccess</a>

---

##### `putRequesterJustificationConfig` <a name="putRequesterJustificationConfig" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.putRequesterJustificationConfig"></a>

```typescript
public putRequesterJustificationConfig(value: PrivilegedAccessManagerEntitlementRequesterJustificationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.putRequesterJustificationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfig">PrivilegedAccessManagerEntitlementRequesterJustificationConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.putTimeouts"></a>

```typescript
public putTimeouts(value: PrivilegedAccessManagerEntitlementTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeouts">PrivilegedAccessManagerEntitlementTimeouts</a>

---

##### `resetAdditionalNotificationTargets` <a name="resetAdditionalNotificationTargets" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.resetAdditionalNotificationTargets"></a>

```typescript
public resetAdditionalNotificationTargets(): void
```

##### `resetApprovalWorkflow` <a name="resetApprovalWorkflow" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.resetApprovalWorkflow"></a>

```typescript
public resetApprovalWorkflow(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PrivilegedAccessManagerEntitlement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.isConstruct"></a>

```typescript
import { privilegedAccessManagerEntitlement } from '@cdktf/provider-google'

privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.isTerraformElement"></a>

```typescript
import { privilegedAccessManagerEntitlement } from '@cdktf/provider-google'

privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.isTerraformResource"></a>

```typescript
import { privilegedAccessManagerEntitlement } from '@cdktf/provider-google'

privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.generateConfigForImport"></a>

```typescript
import { privilegedAccessManagerEntitlement } from '@cdktf/provider-google'

privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PrivilegedAccessManagerEntitlement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PrivilegedAccessManagerEntitlement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PrivilegedAccessManagerEntitlement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/privileged_access_manager_entitlement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PrivilegedAccessManagerEntitlement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.additionalNotificationTargets">additionalNotificationTargets</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference">PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.approvalWorkflow">approvalWorkflow</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference">PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.eligibleUsers">eligibleUsers</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList">PrivilegedAccessManagerEntitlementEligibleUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.privilegedAccess">privilegedAccess</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference">PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.requesterJustificationConfig">requesterJustificationConfig</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference">PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference">PrivilegedAccessManagerEntitlementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.additionalNotificationTargetsInput">additionalNotificationTargetsInput</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargets">PrivilegedAccessManagerEntitlementAdditionalNotificationTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.approvalWorkflowInput">approvalWorkflowInput</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflow">PrivilegedAccessManagerEntitlementApprovalWorkflow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.eligibleUsersInput">eligibleUsersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsers">PrivilegedAccessManagerEntitlementEligibleUsers</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.entitlementIdInput">entitlementIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.maxRequestDurationInput">maxRequestDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.privilegedAccessInput">privilegedAccessInput</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccess">PrivilegedAccessManagerEntitlementPrivilegedAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.requesterJustificationConfigInput">requesterJustificationConfigInput</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfig">PrivilegedAccessManagerEntitlementRequesterJustificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeouts">PrivilegedAccessManagerEntitlementTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.entitlementId">entitlementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.maxRequestDuration">maxRequestDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `additionalNotificationTargets`<sup>Required</sup> <a name="additionalNotificationTargets" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.additionalNotificationTargets"></a>

```typescript
public readonly additionalNotificationTargets: PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference">PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference</a>

---

##### `approvalWorkflow`<sup>Required</sup> <a name="approvalWorkflow" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.approvalWorkflow"></a>

```typescript
public readonly approvalWorkflow: PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference">PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `eligibleUsers`<sup>Required</sup> <a name="eligibleUsers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.eligibleUsers"></a>

```typescript
public readonly eligibleUsers: PrivilegedAccessManagerEntitlementEligibleUsersList;
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList">PrivilegedAccessManagerEntitlementEligibleUsersList</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `privilegedAccess`<sup>Required</sup> <a name="privilegedAccess" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.privilegedAccess"></a>

```typescript
public readonly privilegedAccess: PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference">PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference</a>

---

##### `requesterJustificationConfig`<sup>Required</sup> <a name="requesterJustificationConfig" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.requesterJustificationConfig"></a>

```typescript
public readonly requesterJustificationConfig: PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference">PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.timeouts"></a>

```typescript
public readonly timeouts: PrivilegedAccessManagerEntitlementTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference">PrivilegedAccessManagerEntitlementTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `additionalNotificationTargetsInput`<sup>Optional</sup> <a name="additionalNotificationTargetsInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.additionalNotificationTargetsInput"></a>

```typescript
public readonly additionalNotificationTargetsInput: PrivilegedAccessManagerEntitlementAdditionalNotificationTargets;
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargets">PrivilegedAccessManagerEntitlementAdditionalNotificationTargets</a>

---

##### `approvalWorkflowInput`<sup>Optional</sup> <a name="approvalWorkflowInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.approvalWorkflowInput"></a>

```typescript
public readonly approvalWorkflowInput: PrivilegedAccessManagerEntitlementApprovalWorkflow;
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflow">PrivilegedAccessManagerEntitlementApprovalWorkflow</a>

---

##### `eligibleUsersInput`<sup>Optional</sup> <a name="eligibleUsersInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.eligibleUsersInput"></a>

```typescript
public readonly eligibleUsersInput: IResolvable | PrivilegedAccessManagerEntitlementEligibleUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsers">PrivilegedAccessManagerEntitlementEligibleUsers</a>[]

---

##### `entitlementIdInput`<sup>Optional</sup> <a name="entitlementIdInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.entitlementIdInput"></a>

```typescript
public readonly entitlementIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `maxRequestDurationInput`<sup>Optional</sup> <a name="maxRequestDurationInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.maxRequestDurationInput"></a>

```typescript
public readonly maxRequestDurationInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `privilegedAccessInput`<sup>Optional</sup> <a name="privilegedAccessInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.privilegedAccessInput"></a>

```typescript
public readonly privilegedAccessInput: PrivilegedAccessManagerEntitlementPrivilegedAccess;
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccess">PrivilegedAccessManagerEntitlementPrivilegedAccess</a>

---

##### `requesterJustificationConfigInput`<sup>Optional</sup> <a name="requesterJustificationConfigInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.requesterJustificationConfigInput"></a>

```typescript
public readonly requesterJustificationConfigInput: PrivilegedAccessManagerEntitlementRequesterJustificationConfig;
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfig">PrivilegedAccessManagerEntitlementRequesterJustificationConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PrivilegedAccessManagerEntitlementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeouts">PrivilegedAccessManagerEntitlementTimeouts</a>

---

##### `entitlementId`<sup>Required</sup> <a name="entitlementId" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.entitlementId"></a>

```typescript
public readonly entitlementId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `maxRequestDuration`<sup>Required</sup> <a name="maxRequestDuration" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.maxRequestDuration"></a>

```typescript
public readonly maxRequestDuration: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PrivilegedAccessManagerEntitlementAdditionalNotificationTargets <a name="PrivilegedAccessManagerEntitlementAdditionalNotificationTargets" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargets.Initializer"></a>

```typescript
import { privilegedAccessManagerEntitlement } from '@cdktf/provider-google'

const privilegedAccessManagerEntitlementAdditionalNotificationTargets: privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargets.property.adminEmailRecipients">adminEmailRecipients</a></code> | <code>string[]</code> | Optional. Additional email addresses to be notified when a principal(requester) is granted access. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargets.property.requesterEmailRecipients">requesterEmailRecipients</a></code> | <code>string[]</code> | Optional. Additional email address to be notified about an eligible entitlement. |

---

##### `adminEmailRecipients`<sup>Optional</sup> <a name="adminEmailRecipients" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargets.property.adminEmailRecipients"></a>

```typescript
public readonly adminEmailRecipients: string[];
```

- *Type:* string[]

Optional. Additional email addresses to be notified when a principal(requester) is granted access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/privileged_access_manager_entitlement#admin_email_recipients PrivilegedAccessManagerEntitlement#admin_email_recipients}

---

##### `requesterEmailRecipients`<sup>Optional</sup> <a name="requesterEmailRecipients" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargets.property.requesterEmailRecipients"></a>

```typescript
public readonly requesterEmailRecipients: string[];
```

- *Type:* string[]

Optional. Additional email address to be notified about an eligible entitlement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/privileged_access_manager_entitlement#requester_email_recipients PrivilegedAccessManagerEntitlement#requester_email_recipients}

---

### PrivilegedAccessManagerEntitlementApprovalWorkflow <a name="PrivilegedAccessManagerEntitlementApprovalWorkflow" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflow.Initializer"></a>

```typescript
import { privilegedAccessManagerEntitlement } from '@cdktf/provider-google'

const privilegedAccessManagerEntitlementApprovalWorkflow: privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflow.property.manualApprovals">manualApprovals</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals">PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals</a></code> | manual_approvals block. |

---

##### `manualApprovals`<sup>Required</sup> <a name="manualApprovals" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflow.property.manualApprovals"></a>

```typescript
public readonly manualApprovals: PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals;
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals">PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals</a>

manual_approvals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/privileged_access_manager_entitlement#manual_approvals PrivilegedAccessManagerEntitlement#manual_approvals}

---

### PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals <a name="PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals.Initializer"></a>

```typescript
import { privilegedAccessManagerEntitlement } from '@cdktf/provider-google'

const privilegedAccessManagerEntitlementApprovalWorkflowManualApprovals: privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals.property.steps">steps</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps">PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps</a>[]</code> | steps block. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals.property.requireApproverJustification">requireApproverJustification</a></code> | <code>boolean \| cdktf.IResolvable</code> | Optional. Do the approvers need to provide a justification for their actions? |

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals.property.steps"></a>

```typescript
public readonly steps: IResolvable | PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps">PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps</a>[]

steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/privileged_access_manager_entitlement#steps PrivilegedAccessManagerEntitlement#steps}

---

##### `requireApproverJustification`<sup>Optional</sup> <a name="requireApproverJustification" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals.property.requireApproverJustification"></a>

```typescript
public readonly requireApproverJustification: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Optional. Do the approvers need to provide a justification for their actions?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/privileged_access_manager_entitlement#require_approver_justification PrivilegedAccessManagerEntitlement#require_approver_justification}

---

### PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps <a name="PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps.Initializer"></a>

```typescript
import { privilegedAccessManagerEntitlement } from '@cdktf/provider-google'

const privilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps: privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps.property.approvers">approvers</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers">PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers</a></code> | approvers block. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps.property.approvalsNeeded">approvalsNeeded</a></code> | <code>number</code> | How many users from the above list need to approve. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps.property.approverEmailRecipients">approverEmailRecipients</a></code> | <code>string[]</code> | Optional. Additional email addresses to be notified when a grant is pending approval. |

---

##### `approvers`<sup>Required</sup> <a name="approvers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps.property.approvers"></a>

```typescript
public readonly approvers: PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers;
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers">PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers</a>

approvers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/privileged_access_manager_entitlement#approvers PrivilegedAccessManagerEntitlement#approvers}

---

##### `approvalsNeeded`<sup>Optional</sup> <a name="approvalsNeeded" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps.property.approvalsNeeded"></a>

```typescript
public readonly approvalsNeeded: number;
```

- *Type:* number

How many users from the above list need to approve.

If there are not enough distinct users in the list above then the workflow
will indefinitely block. Should always be greater than 0. Currently 1 is the only
supported value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/privileged_access_manager_entitlement#approvals_needed PrivilegedAccessManagerEntitlement#approvals_needed}

---

##### `approverEmailRecipients`<sup>Optional</sup> <a name="approverEmailRecipients" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps.property.approverEmailRecipients"></a>

```typescript
public readonly approverEmailRecipients: string[];
```

- *Type:* string[]

Optional. Additional email addresses to be notified when a grant is pending approval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/privileged_access_manager_entitlement#approver_email_recipients PrivilegedAccessManagerEntitlement#approver_email_recipients}

---

### PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers <a name="PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers.Initializer"></a>

```typescript
import { privilegedAccessManagerEntitlement } from '@cdktf/provider-google'

const privilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers: privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers.property.principals">principals</a></code> | <code>string[]</code> | Users who are being allowed for the operation. |

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers.property.principals"></a>

```typescript
public readonly principals: string[];
```

- *Type:* string[]

Users who are being allowed for the operation.

Each entry should be a valid v1 IAM Principal Identifier. Format for these is documented at: https://cloud.google.com/iam/docs/principal-identifiers#v1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/privileged_access_manager_entitlement#principals PrivilegedAccessManagerEntitlement#principals}

---

### PrivilegedAccessManagerEntitlementConfig <a name="PrivilegedAccessManagerEntitlementConfig" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.Initializer"></a>

```typescript
import { privilegedAccessManagerEntitlement } from '@cdktf/provider-google'

const privilegedAccessManagerEntitlementConfig: privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.eligibleUsers">eligibleUsers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsers">PrivilegedAccessManagerEntitlementEligibleUsers</a>[]</code> | eligible_users block. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.entitlementId">entitlementId</a></code> | <code>string</code> | The ID to use for this Entitlement. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.location">location</a></code> | <code>string</code> | The region of the Entitlement resource. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.maxRequestDuration">maxRequestDuration</a></code> | <code>string</code> | The maximum amount of time for which access would be granted for a request. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.parent">parent</a></code> | <code>string</code> | Format: projects/{project-id\|project-number} or organizations/{organization-number} or folders/{folder-number}. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.privilegedAccess">privilegedAccess</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccess">PrivilegedAccessManagerEntitlementPrivilegedAccess</a></code> | privileged_access block. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.requesterJustificationConfig">requesterJustificationConfig</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfig">PrivilegedAccessManagerEntitlementRequesterJustificationConfig</a></code> | requester_justification_config block. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.additionalNotificationTargets">additionalNotificationTargets</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargets">PrivilegedAccessManagerEntitlementAdditionalNotificationTargets</a></code> | additional_notification_targets block. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.approvalWorkflow">approvalWorkflow</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflow">PrivilegedAccessManagerEntitlementApprovalWorkflow</a></code> | approval_workflow block. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/privileged_access_manager_entitlement#id PrivilegedAccessManagerEntitlement#id}. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeouts">PrivilegedAccessManagerEntitlementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `eligibleUsers`<sup>Required</sup> <a name="eligibleUsers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.eligibleUsers"></a>

```typescript
public readonly eligibleUsers: IResolvable | PrivilegedAccessManagerEntitlementEligibleUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsers">PrivilegedAccessManagerEntitlementEligibleUsers</a>[]

eligible_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/privileged_access_manager_entitlement#eligible_users PrivilegedAccessManagerEntitlement#eligible_users}

---

##### `entitlementId`<sup>Required</sup> <a name="entitlementId" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.entitlementId"></a>

```typescript
public readonly entitlementId: string;
```

- *Type:* string

The ID to use for this Entitlement.

This will become the last part of the resource name.
This value should be 4-63 characters, and valid characters are "[a-z]", "[0-9]", and "-". The first character should be from [a-z].
This value should be unique among all other Entitlements under the specified 'parent'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/privileged_access_manager_entitlement#entitlement_id PrivilegedAccessManagerEntitlement#entitlement_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The region of the Entitlement resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/privileged_access_manager_entitlement#location PrivilegedAccessManagerEntitlement#location}

---

##### `maxRequestDuration`<sup>Required</sup> <a name="maxRequestDuration" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.maxRequestDuration"></a>

```typescript
public readonly maxRequestDuration: string;
```

- *Type:* string

The maximum amount of time for which access would be granted for a request.

A requester can choose to ask for access for less than this duration but never more.
Format: calculate the time in seconds and concatenate it with 's' i.e. 2 hours = "7200s", 45 minutes = "2700s"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/privileged_access_manager_entitlement#max_request_duration PrivilegedAccessManagerEntitlement#max_request_duration}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

Format: projects/{project-id|project-number} or organizations/{organization-number} or folders/{folder-number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/privileged_access_manager_entitlement#parent PrivilegedAccessManagerEntitlement#parent}

---

##### `privilegedAccess`<sup>Required</sup> <a name="privilegedAccess" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.privilegedAccess"></a>

```typescript
public readonly privilegedAccess: PrivilegedAccessManagerEntitlementPrivilegedAccess;
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccess">PrivilegedAccessManagerEntitlementPrivilegedAccess</a>

privileged_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/privileged_access_manager_entitlement#privileged_access PrivilegedAccessManagerEntitlement#privileged_access}

---

##### `requesterJustificationConfig`<sup>Required</sup> <a name="requesterJustificationConfig" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.requesterJustificationConfig"></a>

```typescript
public readonly requesterJustificationConfig: PrivilegedAccessManagerEntitlementRequesterJustificationConfig;
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfig">PrivilegedAccessManagerEntitlementRequesterJustificationConfig</a>

requester_justification_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/privileged_access_manager_entitlement#requester_justification_config PrivilegedAccessManagerEntitlement#requester_justification_config}

---

##### `additionalNotificationTargets`<sup>Optional</sup> <a name="additionalNotificationTargets" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.additionalNotificationTargets"></a>

```typescript
public readonly additionalNotificationTargets: PrivilegedAccessManagerEntitlementAdditionalNotificationTargets;
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargets">PrivilegedAccessManagerEntitlementAdditionalNotificationTargets</a>

additional_notification_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/privileged_access_manager_entitlement#additional_notification_targets PrivilegedAccessManagerEntitlement#additional_notification_targets}

---

##### `approvalWorkflow`<sup>Optional</sup> <a name="approvalWorkflow" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.approvalWorkflow"></a>

```typescript
public readonly approvalWorkflow: PrivilegedAccessManagerEntitlementApprovalWorkflow;
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflow">PrivilegedAccessManagerEntitlementApprovalWorkflow</a>

approval_workflow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/privileged_access_manager_entitlement#approval_workflow PrivilegedAccessManagerEntitlement#approval_workflow}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/privileged_access_manager_entitlement#id PrivilegedAccessManagerEntitlement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.timeouts"></a>

```typescript
public readonly timeouts: PrivilegedAccessManagerEntitlementTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeouts">PrivilegedAccessManagerEntitlementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/privileged_access_manager_entitlement#timeouts PrivilegedAccessManagerEntitlement#timeouts}

---

### PrivilegedAccessManagerEntitlementEligibleUsers <a name="PrivilegedAccessManagerEntitlementEligibleUsers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsers.Initializer"></a>

```typescript
import { privilegedAccessManagerEntitlement } from '@cdktf/provider-google'

const privilegedAccessManagerEntitlementEligibleUsers: privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsers.property.principals">principals</a></code> | <code>string[]</code> | Users who are being allowed for the operation. |

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsers.property.principals"></a>

```typescript
public readonly principals: string[];
```

- *Type:* string[]

Users who are being allowed for the operation.

Each entry should be a valid v1 IAM Principal Identifier. Format for these is documented at "https://cloud.google.com/iam/docs/principal-identifiers#v1"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/privileged_access_manager_entitlement#principals PrivilegedAccessManagerEntitlement#principals}

---

### PrivilegedAccessManagerEntitlementPrivilegedAccess <a name="PrivilegedAccessManagerEntitlementPrivilegedAccess" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccess.Initializer"></a>

```typescript
import { privilegedAccessManagerEntitlement } from '@cdktf/provider-google'

const privilegedAccessManagerEntitlementPrivilegedAccess: privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccess = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccess.property.gcpIamAccess">gcpIamAccess</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess">PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess</a></code> | gcp_iam_access block. |

---

##### `gcpIamAccess`<sup>Required</sup> <a name="gcpIamAccess" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccess.property.gcpIamAccess"></a>

```typescript
public readonly gcpIamAccess: PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess;
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess">PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess</a>

gcp_iam_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/privileged_access_manager_entitlement#gcp_iam_access PrivilegedAccessManagerEntitlement#gcp_iam_access}

---

### PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess <a name="PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess.Initializer"></a>

```typescript
import { privilegedAccessManagerEntitlement } from '@cdktf/provider-google'

const privilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess: privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess.property.resource">resource</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess.property.resourceType">resourceType</a></code> | <code>string</code> | The type of this resource. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess.property.roleBindings">roleBindings</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings">PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings</a>[]</code> | role_bindings block. |

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

Name of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/privileged_access_manager_entitlement#resource PrivilegedAccessManagerEntitlement#resource}

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

The type of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/privileged_access_manager_entitlement#resource_type PrivilegedAccessManagerEntitlement#resource_type}

---

##### `roleBindings`<sup>Required</sup> <a name="roleBindings" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess.property.roleBindings"></a>

```typescript
public readonly roleBindings: IResolvable | PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings">PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings</a>[]

role_bindings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/privileged_access_manager_entitlement#role_bindings PrivilegedAccessManagerEntitlement#role_bindings}

---

### PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings <a name="PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings.Initializer"></a>

```typescript
import { privilegedAccessManagerEntitlement } from '@cdktf/provider-google'

const privilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings: privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings.property.role">role</a></code> | <code>string</code> | IAM role to be granted. https://cloud.google.com/iam/docs/roles-overview. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings.property.conditionExpression">conditionExpression</a></code> | <code>string</code> | The expression field of the IAM condition to be associated with the role. |

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

IAM role to be granted. https://cloud.google.com/iam/docs/roles-overview.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/privileged_access_manager_entitlement#role PrivilegedAccessManagerEntitlement#role}

---

##### `conditionExpression`<sup>Optional</sup> <a name="conditionExpression" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings.property.conditionExpression"></a>

```typescript
public readonly conditionExpression: string;
```

- *Type:* string

The expression field of the IAM condition to be associated with the role.

If specified, a user with an active grant for this entitlement would be able to access the resource only if this condition evaluates to true for their request.
https://cloud.google.com/iam/docs/conditions-overview#attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/privileged_access_manager_entitlement#condition_expression PrivilegedAccessManagerEntitlement#condition_expression}

---

### PrivilegedAccessManagerEntitlementRequesterJustificationConfig <a name="PrivilegedAccessManagerEntitlementRequesterJustificationConfig" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfig.Initializer"></a>

```typescript
import { privilegedAccessManagerEntitlement } from '@cdktf/provider-google'

const privilegedAccessManagerEntitlementRequesterJustificationConfig: privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfig.property.notMandatory">notMandatory</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory">PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory</a></code> | not_mandatory block. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfig.property.unstructured">unstructured</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured">PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured</a></code> | unstructured block. |

---

##### `notMandatory`<sup>Optional</sup> <a name="notMandatory" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfig.property.notMandatory"></a>

```typescript
public readonly notMandatory: PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory;
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory">PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory</a>

not_mandatory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/privileged_access_manager_entitlement#not_mandatory PrivilegedAccessManagerEntitlement#not_mandatory}

---

##### `unstructured`<sup>Optional</sup> <a name="unstructured" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfig.property.unstructured"></a>

```typescript
public readonly unstructured: PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured;
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured">PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured</a>

unstructured block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/privileged_access_manager_entitlement#unstructured PrivilegedAccessManagerEntitlement#unstructured}

---

### PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory <a name="PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory.Initializer"></a>

```typescript
import { privilegedAccessManagerEntitlement } from '@cdktf/provider-google'

const privilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory: privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory = { ... }
```


### PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured <a name="PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured.Initializer"></a>

```typescript
import { privilegedAccessManagerEntitlement } from '@cdktf/provider-google'

const privilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured: privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured = { ... }
```


### PrivilegedAccessManagerEntitlementTimeouts <a name="PrivilegedAccessManagerEntitlementTimeouts" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeouts.Initializer"></a>

```typescript
import { privilegedAccessManagerEntitlement } from '@cdktf/provider-google'

const privilegedAccessManagerEntitlementTimeouts: privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/privileged_access_manager_entitlement#create PrivilegedAccessManagerEntitlement#create}. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/privileged_access_manager_entitlement#delete PrivilegedAccessManagerEntitlement#delete}. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/privileged_access_manager_entitlement#update PrivilegedAccessManagerEntitlement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/privileged_access_manager_entitlement#create PrivilegedAccessManagerEntitlement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/privileged_access_manager_entitlement#delete PrivilegedAccessManagerEntitlement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/privileged_access_manager_entitlement#update PrivilegedAccessManagerEntitlement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference <a name="PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer"></a>

```typescript
import { privilegedAccessManagerEntitlement } from '@cdktf/provider-google'

new privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.resetAdminEmailRecipients">resetAdminEmailRecipients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.resetRequesterEmailRecipients">resetRequesterEmailRecipients</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdminEmailRecipients` <a name="resetAdminEmailRecipients" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.resetAdminEmailRecipients"></a>

```typescript
public resetAdminEmailRecipients(): void
```

##### `resetRequesterEmailRecipients` <a name="resetRequesterEmailRecipients" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.resetRequesterEmailRecipients"></a>

```typescript
public resetRequesterEmailRecipients(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.adminEmailRecipientsInput">adminEmailRecipientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.requesterEmailRecipientsInput">requesterEmailRecipientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.adminEmailRecipients">adminEmailRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.requesterEmailRecipients">requesterEmailRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargets">PrivilegedAccessManagerEntitlementAdditionalNotificationTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminEmailRecipientsInput`<sup>Optional</sup> <a name="adminEmailRecipientsInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.adminEmailRecipientsInput"></a>

```typescript
public readonly adminEmailRecipientsInput: string[];
```

- *Type:* string[]

---

##### `requesterEmailRecipientsInput`<sup>Optional</sup> <a name="requesterEmailRecipientsInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.requesterEmailRecipientsInput"></a>

```typescript
public readonly requesterEmailRecipientsInput: string[];
```

- *Type:* string[]

---

##### `adminEmailRecipients`<sup>Required</sup> <a name="adminEmailRecipients" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.adminEmailRecipients"></a>

```typescript
public readonly adminEmailRecipients: string[];
```

- *Type:* string[]

---

##### `requesterEmailRecipients`<sup>Required</sup> <a name="requesterEmailRecipients" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.requesterEmailRecipients"></a>

```typescript
public readonly requesterEmailRecipients: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PrivilegedAccessManagerEntitlementAdditionalNotificationTargets;
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargets">PrivilegedAccessManagerEntitlementAdditionalNotificationTargets</a>

---


### PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference <a name="PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer"></a>

```typescript
import { privilegedAccessManagerEntitlement } from '@cdktf/provider-google'

new privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.putSteps">putSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.resetRequireApproverJustification">resetRequireApproverJustification</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSteps` <a name="putSteps" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.putSteps"></a>

```typescript
public putSteps(value: IResolvable | PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.putSteps.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps">PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps</a>[]

---

##### `resetRequireApproverJustification` <a name="resetRequireApproverJustification" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.resetRequireApproverJustification"></a>

```typescript
public resetRequireApproverJustification(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.steps">steps</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList">PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.requireApproverJustificationInput">requireApproverJustificationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.stepsInput">stepsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps">PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.requireApproverJustification">requireApproverJustification</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals">PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.steps"></a>

```typescript
public readonly steps: PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList;
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList">PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList</a>

---

##### `requireApproverJustificationInput`<sup>Optional</sup> <a name="requireApproverJustificationInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.requireApproverJustificationInput"></a>

```typescript
public readonly requireApproverJustificationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `stepsInput`<sup>Optional</sup> <a name="stepsInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.stepsInput"></a>

```typescript
public readonly stepsInput: IResolvable | PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps">PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps</a>[]

---

##### `requireApproverJustification`<sup>Required</sup> <a name="requireApproverJustification" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.requireApproverJustification"></a>

```typescript
public readonly requireApproverJustification: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals;
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals">PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals</a>

---


### PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference <a name="PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer"></a>

```typescript
import { privilegedAccessManagerEntitlement } from '@cdktf/provider-google'

new privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.principalsInput">principalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.principals">principals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers">PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalsInput`<sup>Optional</sup> <a name="principalsInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.principalsInput"></a>

```typescript
public readonly principalsInput: string[];
```

- *Type:* string[]

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.principals"></a>

```typescript
public readonly principals: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers;
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers">PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers</a>

---


### PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList <a name="PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer"></a>

```typescript
import { privilegedAccessManagerEntitlement } from '@cdktf/provider-google'

new privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.get"></a>

```typescript
public get(index: number): PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps">PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps">PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps</a>[]

---


### PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference <a name="PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer"></a>

```typescript
import { privilegedAccessManagerEntitlement } from '@cdktf/provider-google'

new privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.putApprovers">putApprovers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.resetApprovalsNeeded">resetApprovalsNeeded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.resetApproverEmailRecipients">resetApproverEmailRecipients</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApprovers` <a name="putApprovers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.putApprovers"></a>

```typescript
public putApprovers(value: PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.putApprovers.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers">PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers</a>

---

##### `resetApprovalsNeeded` <a name="resetApprovalsNeeded" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.resetApprovalsNeeded"></a>

```typescript
public resetApprovalsNeeded(): void
```

##### `resetApproverEmailRecipients` <a name="resetApproverEmailRecipients" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.resetApproverEmailRecipients"></a>

```typescript
public resetApproverEmailRecipients(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approvers">approvers</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference">PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approvalsNeededInput">approvalsNeededInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approverEmailRecipientsInput">approverEmailRecipientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approversInput">approversInput</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers">PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approvalsNeeded">approvalsNeeded</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approverEmailRecipients">approverEmailRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps">PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `approvers`<sup>Required</sup> <a name="approvers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approvers"></a>

```typescript
public readonly approvers: PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference">PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference</a>

---

##### `approvalsNeededInput`<sup>Optional</sup> <a name="approvalsNeededInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approvalsNeededInput"></a>

```typescript
public readonly approvalsNeededInput: number;
```

- *Type:* number

---

##### `approverEmailRecipientsInput`<sup>Optional</sup> <a name="approverEmailRecipientsInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approverEmailRecipientsInput"></a>

```typescript
public readonly approverEmailRecipientsInput: string[];
```

- *Type:* string[]

---

##### `approversInput`<sup>Optional</sup> <a name="approversInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approversInput"></a>

```typescript
public readonly approversInput: PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers;
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers">PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers</a>

---

##### `approvalsNeeded`<sup>Required</sup> <a name="approvalsNeeded" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approvalsNeeded"></a>

```typescript
public readonly approvalsNeeded: number;
```

- *Type:* number

---

##### `approverEmailRecipients`<sup>Required</sup> <a name="approverEmailRecipients" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approverEmailRecipients"></a>

```typescript
public readonly approverEmailRecipients: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps">PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps</a>

---


### PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference <a name="PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer"></a>

```typescript
import { privilegedAccessManagerEntitlement } from '@cdktf/provider-google'

new privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.putManualApprovals">putManualApprovals</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putManualApprovals` <a name="putManualApprovals" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.putManualApprovals"></a>

```typescript
public putManualApprovals(value: PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.putManualApprovals.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals">PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.manualApprovals">manualApprovals</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference">PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.manualApprovalsInput">manualApprovalsInput</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals">PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflow">PrivilegedAccessManagerEntitlementApprovalWorkflow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `manualApprovals`<sup>Required</sup> <a name="manualApprovals" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.manualApprovals"></a>

```typescript
public readonly manualApprovals: PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference">PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference</a>

---

##### `manualApprovalsInput`<sup>Optional</sup> <a name="manualApprovalsInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.manualApprovalsInput"></a>

```typescript
public readonly manualApprovalsInput: PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals;
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals">PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PrivilegedAccessManagerEntitlementApprovalWorkflow;
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflow">PrivilegedAccessManagerEntitlementApprovalWorkflow</a>

---


### PrivilegedAccessManagerEntitlementEligibleUsersList <a name="PrivilegedAccessManagerEntitlementEligibleUsersList" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.Initializer"></a>

```typescript
import { privilegedAccessManagerEntitlement } from '@cdktf/provider-google'

new privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.get"></a>

```typescript
public get(index: number): PrivilegedAccessManagerEntitlementEligibleUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsers">PrivilegedAccessManagerEntitlementEligibleUsers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivilegedAccessManagerEntitlementEligibleUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsers">PrivilegedAccessManagerEntitlementEligibleUsers</a>[]

---


### PrivilegedAccessManagerEntitlementEligibleUsersOutputReference <a name="PrivilegedAccessManagerEntitlementEligibleUsersOutputReference" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer"></a>

```typescript
import { privilegedAccessManagerEntitlement } from '@cdktf/provider-google'

new privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.principalsInput">principalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.principals">principals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsers">PrivilegedAccessManagerEntitlementEligibleUsers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalsInput`<sup>Optional</sup> <a name="principalsInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.principalsInput"></a>

```typescript
public readonly principalsInput: string[];
```

- *Type:* string[]

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.principals"></a>

```typescript
public readonly principals: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivilegedAccessManagerEntitlementEligibleUsers;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsers">PrivilegedAccessManagerEntitlementEligibleUsers</a>

---


### PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference <a name="PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer"></a>

```typescript
import { privilegedAccessManagerEntitlement } from '@cdktf/provider-google'

new privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.putRoleBindings">putRoleBindings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRoleBindings` <a name="putRoleBindings" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.putRoleBindings"></a>

```typescript
public putRoleBindings(value: IResolvable | PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.putRoleBindings.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings">PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.roleBindings">roleBindings</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList">PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resourceInput">resourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.roleBindingsInput">roleBindingsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings">PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resource">resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess">PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `roleBindings`<sup>Required</sup> <a name="roleBindings" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.roleBindings"></a>

```typescript
public readonly roleBindings: PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList;
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList">PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList</a>

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resourceInput"></a>

```typescript
public readonly resourceInput: string;
```

- *Type:* string

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `roleBindingsInput`<sup>Optional</sup> <a name="roleBindingsInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.roleBindingsInput"></a>

```typescript
public readonly roleBindingsInput: IResolvable | PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings">PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings</a>[]

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess;
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess">PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess</a>

---


### PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList <a name="PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer"></a>

```typescript
import { privilegedAccessManagerEntitlement } from '@cdktf/provider-google'

new privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.get"></a>

```typescript
public get(index: number): PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings">PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings">PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings</a>[]

---


### PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference <a name="PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer"></a>

```typescript
import { privilegedAccessManagerEntitlement } from '@cdktf/provider-google'

new privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.resetConditionExpression">resetConditionExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConditionExpression` <a name="resetConditionExpression" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.resetConditionExpression"></a>

```typescript
public resetConditionExpression(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.conditionExpressionInput">conditionExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.conditionExpression">conditionExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings">PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditionExpressionInput`<sup>Optional</sup> <a name="conditionExpressionInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.conditionExpressionInput"></a>

```typescript
public readonly conditionExpressionInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `conditionExpression`<sup>Required</sup> <a name="conditionExpression" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.conditionExpression"></a>

```typescript
public readonly conditionExpression: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings">PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings</a>

---


### PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference <a name="PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer"></a>

```typescript
import { privilegedAccessManagerEntitlement } from '@cdktf/provider-google'

new privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.putGcpIamAccess">putGcpIamAccess</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGcpIamAccess` <a name="putGcpIamAccess" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.putGcpIamAccess"></a>

```typescript
public putGcpIamAccess(value: PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.putGcpIamAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess">PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.gcpIamAccess">gcpIamAccess</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference">PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.gcpIamAccessInput">gcpIamAccessInput</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess">PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccess">PrivilegedAccessManagerEntitlementPrivilegedAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gcpIamAccess`<sup>Required</sup> <a name="gcpIamAccess" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.gcpIamAccess"></a>

```typescript
public readonly gcpIamAccess: PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference">PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference</a>

---

##### `gcpIamAccessInput`<sup>Optional</sup> <a name="gcpIamAccessInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.gcpIamAccessInput"></a>

```typescript
public readonly gcpIamAccessInput: PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess;
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess">PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PrivilegedAccessManagerEntitlementPrivilegedAccess;
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccess">PrivilegedAccessManagerEntitlementPrivilegedAccess</a>

---


### PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference <a name="PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer"></a>

```typescript
import { privilegedAccessManagerEntitlement } from '@cdktf/provider-google'

new privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory">PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory;
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory">PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory</a>

---


### PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference <a name="PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer"></a>

```typescript
import { privilegedAccessManagerEntitlement } from '@cdktf/provider-google'

new privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.putNotMandatory">putNotMandatory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.putUnstructured">putUnstructured</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.resetNotMandatory">resetNotMandatory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.resetUnstructured">resetUnstructured</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNotMandatory` <a name="putNotMandatory" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.putNotMandatory"></a>

```typescript
public putNotMandatory(value: PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.putNotMandatory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory">PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory</a>

---

##### `putUnstructured` <a name="putUnstructured" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.putUnstructured"></a>

```typescript
public putUnstructured(value: PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.putUnstructured.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured">PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured</a>

---

##### `resetNotMandatory` <a name="resetNotMandatory" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.resetNotMandatory"></a>

```typescript
public resetNotMandatory(): void
```

##### `resetUnstructured` <a name="resetUnstructured" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.resetUnstructured"></a>

```typescript
public resetUnstructured(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.notMandatory">notMandatory</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference">PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.unstructured">unstructured</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference">PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.notMandatoryInput">notMandatoryInput</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory">PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.unstructuredInput">unstructuredInput</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured">PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfig">PrivilegedAccessManagerEntitlementRequesterJustificationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `notMandatory`<sup>Required</sup> <a name="notMandatory" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.notMandatory"></a>

```typescript
public readonly notMandatory: PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference">PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference</a>

---

##### `unstructured`<sup>Required</sup> <a name="unstructured" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.unstructured"></a>

```typescript
public readonly unstructured: PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference">PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference</a>

---

##### `notMandatoryInput`<sup>Optional</sup> <a name="notMandatoryInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.notMandatoryInput"></a>

```typescript
public readonly notMandatoryInput: PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory;
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory">PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory</a>

---

##### `unstructuredInput`<sup>Optional</sup> <a name="unstructuredInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.unstructuredInput"></a>

```typescript
public readonly unstructuredInput: PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured;
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured">PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PrivilegedAccessManagerEntitlementRequesterJustificationConfig;
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfig">PrivilegedAccessManagerEntitlementRequesterJustificationConfig</a>

---


### PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference <a name="PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer"></a>

```typescript
import { privilegedAccessManagerEntitlement } from '@cdktf/provider-google'

new privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured">PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured;
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured">PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured</a>

---


### PrivilegedAccessManagerEntitlementTimeoutsOutputReference <a name="PrivilegedAccessManagerEntitlementTimeoutsOutputReference" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.Initializer"></a>

```typescript
import { privilegedAccessManagerEntitlement } from '@cdktf/provider-google'

new privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeouts">PrivilegedAccessManagerEntitlementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivilegedAccessManagerEntitlementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeouts">PrivilegedAccessManagerEntitlementTimeouts</a>

---



