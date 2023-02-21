# `cloudbuildTrigger` Submodule <a name="`cloudbuildTrigger` Submodule" id="@cdktf/provider-google.cloudbuildTrigger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudbuildTrigger <a name="CloudbuildTrigger" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger google_cloudbuild_trigger}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTrigger(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  approval_config: CloudbuildTriggerApprovalConfig = None,
  build_attribute: CloudbuildTriggerBuild = None,
  description: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  filename: str = None,
  filter: str = None,
  git_file_source: CloudbuildTriggerGitFileSource = None,
  github: CloudbuildTriggerGithub = None,
  id: str = None,
  ignored_files: typing.List[str] = None,
  include_build_logs: str = None,
  included_files: typing.List[str] = None,
  location: str = None,
  name: str = None,
  project: str = None,
  pubsub_config: CloudbuildTriggerPubsubConfig = None,
  service_account: str = None,
  source_to_build: CloudbuildTriggerSourceToBuild = None,
  substitutions: typing.Mapping[str] = None,
  tags: typing.List[str] = None,
  timeouts: CloudbuildTriggerTimeouts = None,
  trigger_template: CloudbuildTriggerTriggerTemplate = None,
  webhook_config: CloudbuildTriggerWebhookConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.approvalConfig">approval_config</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfig">CloudbuildTriggerApprovalConfig</a></code> | approval_config block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.buildAttribute">build_attribute</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild">CloudbuildTriggerBuild</a></code> | build block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.description">description</a></code> | <code>str</code> | Human-readable description of the trigger. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the trigger is disabled or not. If true, the trigger will never result in a build. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.filename">filename</a></code> | <code>str</code> | Path, from the source root, to a file whose contents is used for the template. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.filter">filter</a></code> | <code>str</code> | A Common Expression Language string. Used only with Pub/Sub and Webhook. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.gitFileSource">git_file_source</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource">CloudbuildTriggerGitFileSource</a></code> | git_file_source block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.github">github</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub">CloudbuildTriggerGithub</a></code> | github block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#id CloudbuildTrigger#id}. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.ignoredFiles">ignored_files</a></code> | <code>typing.List[str]</code> | ignoredFiles and includedFiles are file glob matches using https://golang.org/pkg/path/filepath/#Match extended with support for '**'. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.includeBuildLogs">include_build_logs</a></code> | <code>str</code> | Build logs will be sent back to GitHub as part of the checkrun result. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.includedFiles">included_files</a></code> | <code>typing.List[str]</code> | ignoredFiles and includedFiles are file glob matches using https://golang.org/pkg/path/filepath/#Match extended with support for '**'. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.location">location</a></code> | <code>str</code> | The [Cloud Build location](https://cloud.google.com/build/docs/locations) for the trigger. If not specified, "global" is used. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the trigger. Must be unique within the project. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#project CloudbuildTrigger#project}. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.pubsubConfig">pubsub_config</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig">CloudbuildTriggerPubsubConfig</a></code> | pubsub_config block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.serviceAccount">service_account</a></code> | <code>str</code> | The service account used for all user-controlled operations including triggers.patch, triggers.run, builds.create, and builds.cancel. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.sourceToBuild">source_to_build</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild">CloudbuildTriggerSourceToBuild</a></code> | source_to_build block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.substitutions">substitutions</a></code> | <code>typing.Mapping[str]</code> | Substitutions data for Build resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Tags for annotation of a BuildTrigger. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts">CloudbuildTriggerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.triggerTemplate">trigger_template</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate">CloudbuildTriggerTriggerTemplate</a></code> | trigger_template block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.webhookConfig">webhook_config</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfig">CloudbuildTriggerWebhookConfig</a></code> | webhook_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `approval_config`<sup>Optional</sup> <a name="approval_config" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.approvalConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfig">CloudbuildTriggerApprovalConfig</a>

approval_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#approval_config CloudbuildTrigger#approval_config}

---

##### `build_attribute`<sup>Optional</sup> <a name="build_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.buildAttribute"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild">CloudbuildTriggerBuild</a>

build block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#build CloudbuildTrigger#build}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.description"></a>

- *Type:* str

Human-readable description of the trigger.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#description CloudbuildTrigger#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.disabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the trigger is disabled or not. If true, the trigger will never result in a build.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#disabled CloudbuildTrigger#disabled}

---

##### `filename`<sup>Optional</sup> <a name="filename" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.filename"></a>

- *Type:* str

Path, from the source root, to a file whose contents is used for the template.

Either a filename or build template must be provided. Set this only when using trigger_template or github.
When using Pub/Sub, Webhook or Manual set the file name using git_file_source instead.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#filename CloudbuildTrigger#filename}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.filter"></a>

- *Type:* str

A Common Expression Language string. Used only with Pub/Sub and Webhook.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#filter CloudbuildTrigger#filter}

---

##### `git_file_source`<sup>Optional</sup> <a name="git_file_source" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.gitFileSource"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource">CloudbuildTriggerGitFileSource</a>

git_file_source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#git_file_source CloudbuildTrigger#git_file_source}

---

##### `github`<sup>Optional</sup> <a name="github" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.github"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub">CloudbuildTriggerGithub</a>

github block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#github CloudbuildTrigger#github}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#id CloudbuildTrigger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignored_files`<sup>Optional</sup> <a name="ignored_files" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.ignoredFiles"></a>

- *Type:* typing.List[str]

ignoredFiles and includedFiles are file glob matches using https://golang.org/pkg/path/filepath/#Match extended with support for '**'.

If ignoredFiles and changed files are both empty, then they are not
used to determine whether or not to trigger a build.

If ignoredFiles is not empty, then we ignore any files that match any
of the ignored_file globs. If the change has no files that are outside
of the ignoredFiles globs, then we do not trigger a build.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#ignored_files CloudbuildTrigger#ignored_files}

---

##### `include_build_logs`<sup>Optional</sup> <a name="include_build_logs" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.includeBuildLogs"></a>

- *Type:* str

Build logs will be sent back to GitHub as part of the checkrun result.

Values can be INCLUDE_BUILD_LOGS_UNSPECIFIED or
INCLUDE_BUILD_LOGS_WITH_STATUS Possible values: ["INCLUDE_BUILD_LOGS_UNSPECIFIED", "INCLUDE_BUILD_LOGS_WITH_STATUS"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#include_build_logs CloudbuildTrigger#include_build_logs}

---

##### `included_files`<sup>Optional</sup> <a name="included_files" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.includedFiles"></a>

- *Type:* typing.List[str]

ignoredFiles and includedFiles are file glob matches using https://golang.org/pkg/path/filepath/#Match extended with support for '**'.

If any of the files altered in the commit pass the ignoredFiles filter
and includedFiles is empty, then as far as this filter is concerned, we
should trigger the build.

If any of the files altered in the commit pass the ignoredFiles filter
and includedFiles is not empty, then we make sure that at least one of
those files matches a includedFiles glob. If not, then we do not trigger
a build.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#included_files CloudbuildTrigger#included_files}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.location"></a>

- *Type:* str

The [Cloud Build location](https://cloud.google.com/build/docs/locations) for the trigger. If not specified, "global" is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#location CloudbuildTrigger#location}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.name"></a>

- *Type:* str

Name of the trigger. Must be unique within the project.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#name CloudbuildTrigger#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#project CloudbuildTrigger#project}.

---

##### `pubsub_config`<sup>Optional</sup> <a name="pubsub_config" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.pubsubConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig">CloudbuildTriggerPubsubConfig</a>

pubsub_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#pubsub_config CloudbuildTrigger#pubsub_config}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.serviceAccount"></a>

- *Type:* str

The service account used for all user-controlled operations including triggers.patch, triggers.run, builds.create, and builds.cancel.

If no service account is set, then the standard Cloud Build service account
([PROJECT_NUM]@system.gserviceaccount.com) will be used instead.

Format: projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT_ID_OR_EMAIL}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#service_account CloudbuildTrigger#service_account}

---

##### `source_to_build`<sup>Optional</sup> <a name="source_to_build" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.sourceToBuild"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild">CloudbuildTriggerSourceToBuild</a>

source_to_build block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#source_to_build CloudbuildTrigger#source_to_build}

---

##### `substitutions`<sup>Optional</sup> <a name="substitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.substitutions"></a>

- *Type:* typing.Mapping[str]

Substitutions data for Build resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#substitutions CloudbuildTrigger#substitutions}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Tags for annotation of a BuildTrigger.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#tags CloudbuildTrigger#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts">CloudbuildTriggerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#timeouts CloudbuildTrigger#timeouts}

---

##### `trigger_template`<sup>Optional</sup> <a name="trigger_template" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.triggerTemplate"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate">CloudbuildTriggerTriggerTemplate</a>

trigger_template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#trigger_template CloudbuildTrigger#trigger_template}

---

##### `webhook_config`<sup>Optional</sup> <a name="webhook_config" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.webhookConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfig">CloudbuildTriggerWebhookConfig</a>

webhook_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#webhook_config CloudbuildTrigger#webhook_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putApprovalConfig">put_approval_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putBuildAttribute">put_build_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putGitFileSource">put_git_file_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putGithub">put_github</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putPubsubConfig">put_pubsub_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putSourceToBuild">put_source_to_build</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putTriggerTemplate">put_trigger_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putWebhookConfig">put_webhook_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetApprovalConfig">reset_approval_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetBuildAttribute">reset_build_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetFilename">reset_filename</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetGitFileSource">reset_git_file_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetGithub">reset_github</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetIgnoredFiles">reset_ignored_files</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetIncludeBuildLogs">reset_include_build_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetIncludedFiles">reset_included_files</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetPubsubConfig">reset_pubsub_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetServiceAccount">reset_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetSourceToBuild">reset_source_to_build</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetSubstitutions">reset_substitutions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetTriggerTemplate">reset_trigger_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetWebhookConfig">reset_webhook_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_approval_config` <a name="put_approval_config" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putApprovalConfig"></a>

```python
def put_approval_config(
  approval_required: typing.Union[bool, IResolvable] = None
) -> None
```

###### `approval_required`<sup>Optional</sup> <a name="approval_required" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putApprovalConfig.parameter.approvalRequired"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not approval is needed.

If this is set on a build, it will become pending when run,
and will need to be explicitly approved to start.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#approval_required CloudbuildTrigger#approval_required}

---

##### `put_build_attribute` <a name="put_build_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putBuildAttribute"></a>

```python
def put_build_attribute(
  step: typing.Union[IResolvable, typing.List[CloudbuildTriggerBuildStep]],
  artifacts: CloudbuildTriggerBuildArtifacts = None,
  available_secrets: CloudbuildTriggerBuildAvailableSecrets = None,
  images: typing.List[str] = None,
  logs_bucket: str = None,
  options: CloudbuildTriggerBuildOptions = None,
  queue_ttl: str = None,
  secret: typing.Union[IResolvable, typing.List[CloudbuildTriggerBuildSecret]] = None,
  source: CloudbuildTriggerBuildSource = None,
  substitutions: typing.Mapping[str] = None,
  tags: typing.List[str] = None,
  timeout: str = None
) -> None
```

###### `step`<sup>Required</sup> <a name="step" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putBuildAttribute.parameter.step"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep">CloudbuildTriggerBuildStep</a>]]

step block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#step CloudbuildTrigger#step}

---

###### `artifacts`<sup>Optional</sup> <a name="artifacts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putBuildAttribute.parameter.artifacts"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts">CloudbuildTriggerBuildArtifacts</a>

artifacts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#artifacts CloudbuildTrigger#artifacts}

---

###### `available_secrets`<sup>Optional</sup> <a name="available_secrets" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putBuildAttribute.parameter.availableSecrets"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecrets">CloudbuildTriggerBuildAvailableSecrets</a>

available_secrets block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#available_secrets CloudbuildTrigger#available_secrets}

---

###### `images`<sup>Optional</sup> <a name="images" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putBuildAttribute.parameter.images"></a>

- *Type:* typing.List[str]

A list of images to be pushed upon the successful completion of all build steps.

The images are pushed using the builder service account's credentials.
The digests of the pushed images will be stored in the Build resource's results field.
If any of the images fail to be pushed, the build status is marked FAILURE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#images CloudbuildTrigger#images}

---

###### `logs_bucket`<sup>Optional</sup> <a name="logs_bucket" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putBuildAttribute.parameter.logsBucket"></a>

- *Type:* str

Google Cloud Storage bucket where logs should be written.  Logs file names will be of the format ${logsBucket}/log-${build_id}.txt.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#logs_bucket CloudbuildTrigger#logs_bucket}

---

###### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putBuildAttribute.parameter.options"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions">CloudbuildTriggerBuildOptions</a>

options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#options CloudbuildTrigger#options}

---

###### `queue_ttl`<sup>Optional</sup> <a name="queue_ttl" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putBuildAttribute.parameter.queueTtl"></a>

- *Type:* str

TTL in queue for this build.

If provided and the build is enqueued longer than this value,
the build will expire and the build status will be EXPIRED.
The TTL starts ticking from createTime.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#queue_ttl CloudbuildTrigger#queue_ttl}

---

###### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putBuildAttribute.parameter.secret"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecret">CloudbuildTriggerBuildSecret</a>]]

secret block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#secret CloudbuildTrigger#secret}

---

###### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putBuildAttribute.parameter.source"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource">CloudbuildTriggerBuildSource</a>

source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#source CloudbuildTrigger#source}

---

###### `substitutions`<sup>Optional</sup> <a name="substitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putBuildAttribute.parameter.substitutions"></a>

- *Type:* typing.Mapping[str]

Substitutions data for Build resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#substitutions CloudbuildTrigger#substitutions}

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putBuildAttribute.parameter.tags"></a>

- *Type:* typing.List[str]

Tags for annotation of a Build. These are not docker tags.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#tags CloudbuildTrigger#tags}

---

###### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putBuildAttribute.parameter.timeout"></a>

- *Type:* str

Amount of time that this build should be allowed to run, to second granularity.

If this amount of time elapses, work on the build will cease and the build status will be TIMEOUT.
This timeout must be equal to or greater than the sum of the timeouts for build steps within the build.
The expected format is the number of seconds followed by s.
Default time is ten minutes (600s).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#timeout CloudbuildTrigger#timeout}

---

##### `put_git_file_source` <a name="put_git_file_source" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putGitFileSource"></a>

```python
def put_git_file_source(
  path: str,
  repo_type: str,
  github_enterprise_config: str = None,
  revision: str = None,
  uri: str = None
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putGitFileSource.parameter.path"></a>

- *Type:* str

The path of the file, with the repo root as the root of the path.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#path CloudbuildTrigger#path}

---

###### `repo_type`<sup>Required</sup> <a name="repo_type" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putGitFileSource.parameter.repoType"></a>

- *Type:* str

The type of the repo, since it may not be explicit from the repo field (e.g from a URL).  Values can be UNKNOWN, CLOUD_SOURCE_REPOSITORIES, GITHUB, BITBUCKET_SERVER Possible values: ["UNKNOWN", "CLOUD_SOURCE_REPOSITORIES", "GITHUB", "BITBUCKET_SERVER"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#repo_type CloudbuildTrigger#repo_type}

---

###### `github_enterprise_config`<sup>Optional</sup> <a name="github_enterprise_config" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putGitFileSource.parameter.githubEnterpriseConfig"></a>

- *Type:* str

The full resource name of the github enterprise config. Format: projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}. projects/{project}/githubEnterpriseConfigs/{id}.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#github_enterprise_config CloudbuildTrigger#github_enterprise_config}

---

###### `revision`<sup>Optional</sup> <a name="revision" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putGitFileSource.parameter.revision"></a>

- *Type:* str

The branch, tag, arbitrary ref, or SHA version of the repo to use when resolving the  filename (optional).

This field respects the same syntax/resolution as described here: https://git-scm.com/docs/gitrevisions
If unspecified, the revision from which the trigger invocation originated is assumed to be the revision from which to read the specified path.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#revision CloudbuildTrigger#revision}

---

###### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putGitFileSource.parameter.uri"></a>

- *Type:* str

The URI of the repo (optional).

If unspecified, the repo from which the trigger
invocation originated is assumed to be the repo from which to read the specified path.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#uri CloudbuildTrigger#uri}

---

##### `put_github` <a name="put_github" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putGithub"></a>

```python
def put_github(
  name: str = None,
  owner: str = None,
  pull_request: CloudbuildTriggerGithubPullRequest = None,
  push: CloudbuildTriggerGithubPush = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putGithub.parameter.name"></a>

- *Type:* str

Name of the repository. For example: The name for https://github.com/googlecloudplatform/cloud-builders is "cloud-builders".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#name CloudbuildTrigger#name}

---

###### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putGithub.parameter.owner"></a>

- *Type:* str

Owner of the repository. For example: The owner for https://github.com/googlecloudplatform/cloud-builders is "googlecloudplatform".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#owner CloudbuildTrigger#owner}

---

###### `pull_request`<sup>Optional</sup> <a name="pull_request" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putGithub.parameter.pullRequest"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest">CloudbuildTriggerGithubPullRequest</a>

pull_request block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#pull_request CloudbuildTrigger#pull_request}

---

###### `push`<sup>Optional</sup> <a name="push" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putGithub.parameter.push"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush">CloudbuildTriggerGithubPush</a>

push block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#push CloudbuildTrigger#push}

---

##### `put_pubsub_config` <a name="put_pubsub_config" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putPubsubConfig"></a>

```python
def put_pubsub_config(
  topic: str,
  service_account_email: str = None
) -> None
```

###### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putPubsubConfig.parameter.topic"></a>

- *Type:* str

The name of the topic from which this subscription is receiving messages.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#topic CloudbuildTrigger#topic}

---

###### `service_account_email`<sup>Optional</sup> <a name="service_account_email" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putPubsubConfig.parameter.serviceAccountEmail"></a>

- *Type:* str

Service account that will make the push request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#service_account_email CloudbuildTrigger#service_account_email}

---

##### `put_source_to_build` <a name="put_source_to_build" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putSourceToBuild"></a>

```python
def put_source_to_build(
  ref: str,
  repo_type: str,
  uri: str,
  github_enterprise_config: str = None
) -> None
```

###### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putSourceToBuild.parameter.ref"></a>

- *Type:* str

The branch or tag to use. Must start with "refs/" (required).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#ref CloudbuildTrigger#ref}

---

###### `repo_type`<sup>Required</sup> <a name="repo_type" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putSourceToBuild.parameter.repoType"></a>

- *Type:* str

The type of the repo, since it may not be explicit from the repo field (e.g from a URL). Values can be UNKNOWN, CLOUD_SOURCE_REPOSITORIES, GITHUB, BITBUCKET_SERVER Possible values: ["UNKNOWN", "CLOUD_SOURCE_REPOSITORIES", "GITHUB", "BITBUCKET_SERVER"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#repo_type CloudbuildTrigger#repo_type}

---

###### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putSourceToBuild.parameter.uri"></a>

- *Type:* str

The URI of the repo (required).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#uri CloudbuildTrigger#uri}

---

###### `github_enterprise_config`<sup>Optional</sup> <a name="github_enterprise_config" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putSourceToBuild.parameter.githubEnterpriseConfig"></a>

- *Type:* str

The full resource name of the github enterprise config. Format: projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}. projects/{project}/githubEnterpriseConfigs/{id}.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#github_enterprise_config CloudbuildTrigger#github_enterprise_config}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#create CloudbuildTrigger#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#delete CloudbuildTrigger#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#update CloudbuildTrigger#update}.

---

##### `put_trigger_template` <a name="put_trigger_template" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putTriggerTemplate"></a>

```python
def put_trigger_template(
  branch_name: str = None,
  commit_sha: str = None,
  dir: str = None,
  invert_regex: typing.Union[bool, IResolvable] = None,
  project_id: str = None,
  repo_name: str = None,
  tag_name: str = None
) -> None
```

###### `branch_name`<sup>Optional</sup> <a name="branch_name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putTriggerTemplate.parameter.branchName"></a>

- *Type:* str

Name of the branch to build.

Exactly one a of branch name, tag, or commit SHA must be provided.
This field is a regular expression.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#branch_name CloudbuildTrigger#branch_name}

---

###### `commit_sha`<sup>Optional</sup> <a name="commit_sha" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putTriggerTemplate.parameter.commitSha"></a>

- *Type:* str

Explicit commit SHA to build. Exactly one of a branch name, tag, or commit SHA must be provided.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#commit_sha CloudbuildTrigger#commit_sha}

---

###### `dir`<sup>Optional</sup> <a name="dir" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putTriggerTemplate.parameter.dir"></a>

- *Type:* str

Directory, relative to the source root, in which to run the build.

This must be a relative path. If a step's dir is specified and
is an absolute path, this value is ignored for that step's
execution.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#dir CloudbuildTrigger#dir}

---

###### `invert_regex`<sup>Optional</sup> <a name="invert_regex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putTriggerTemplate.parameter.invertRegex"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Only trigger a build if the revision regex does NOT match the revision regex.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#invert_regex CloudbuildTrigger#invert_regex}

---

###### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putTriggerTemplate.parameter.projectId"></a>

- *Type:* str

ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#project_id CloudbuildTrigger#project_id}

---

###### `repo_name`<sup>Optional</sup> <a name="repo_name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putTriggerTemplate.parameter.repoName"></a>

- *Type:* str

Name of the Cloud Source Repository. If omitted, the name "default" is assumed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#repo_name CloudbuildTrigger#repo_name}

---

###### `tag_name`<sup>Optional</sup> <a name="tag_name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putTriggerTemplate.parameter.tagName"></a>

- *Type:* str

Name of the tag to build.

Exactly one of a branch name, tag, or commit SHA must be provided.
This field is a regular expression.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#tag_name CloudbuildTrigger#tag_name}

---

##### `put_webhook_config` <a name="put_webhook_config" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putWebhookConfig"></a>

```python
def put_webhook_config(
  secret: str
) -> None
```

###### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putWebhookConfig.parameter.secret"></a>

- *Type:* str

Resource name for the secret required as a URL parameter.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#secret CloudbuildTrigger#secret}

---

##### `reset_approval_config` <a name="reset_approval_config" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetApprovalConfig"></a>

```python
def reset_approval_config() -> None
```

##### `reset_build_attribute` <a name="reset_build_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetBuildAttribute"></a>

```python
def reset_build_attribute() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_filename` <a name="reset_filename" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetFilename"></a>

```python
def reset_filename() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_git_file_source` <a name="reset_git_file_source" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetGitFileSource"></a>

```python
def reset_git_file_source() -> None
```

##### `reset_github` <a name="reset_github" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetGithub"></a>

```python
def reset_github() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ignored_files` <a name="reset_ignored_files" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetIgnoredFiles"></a>

```python
def reset_ignored_files() -> None
```

##### `reset_include_build_logs` <a name="reset_include_build_logs" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetIncludeBuildLogs"></a>

```python
def reset_include_build_logs() -> None
```

##### `reset_included_files` <a name="reset_included_files" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetIncludedFiles"></a>

```python
def reset_included_files() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_pubsub_config` <a name="reset_pubsub_config" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetPubsubConfig"></a>

```python
def reset_pubsub_config() -> None
```

##### `reset_service_account` <a name="reset_service_account" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetServiceAccount"></a>

```python
def reset_service_account() -> None
```

##### `reset_source_to_build` <a name="reset_source_to_build" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetSourceToBuild"></a>

```python
def reset_source_to_build() -> None
```

##### `reset_substitutions` <a name="reset_substitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetSubstitutions"></a>

```python
def reset_substitutions() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_trigger_template` <a name="reset_trigger_template" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetTriggerTemplate"></a>

```python
def reset_trigger_template() -> None
```

##### `reset_webhook_config` <a name="reset_webhook_config" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetWebhookConfig"></a>

```python
def reset_webhook_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTrigger.is_construct(
  x: typing.Any
)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTrigger.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTrigger.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.approvalConfig">approval_config</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference">CloudbuildTriggerApprovalConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.buildAttribute">build_attribute</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference">CloudbuildTriggerBuildOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.gitFileSource">git_file_source</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference">CloudbuildTriggerGitFileSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.github">github</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference">CloudbuildTriggerGithubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.pubsubConfig">pubsub_config</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference">CloudbuildTriggerPubsubConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.sourceToBuild">source_to_build</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference">CloudbuildTriggerSourceToBuildOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference">CloudbuildTriggerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.triggerId">trigger_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.triggerTemplate">trigger_template</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference">CloudbuildTriggerTriggerTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.webhookConfig">webhook_config</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference">CloudbuildTriggerWebhookConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.approvalConfigInput">approval_config_input</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfig">CloudbuildTriggerApprovalConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.buildAttributeInput">build_attribute_input</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild">CloudbuildTriggerBuild</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.disabledInput">disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.filenameInput">filename_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.gitFileSourceInput">git_file_source_input</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource">CloudbuildTriggerGitFileSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.githubInput">github_input</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub">CloudbuildTriggerGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.ignoredFilesInput">ignored_files_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.includeBuildLogsInput">include_build_logs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.includedFilesInput">included_files_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.pubsubConfigInput">pubsub_config_input</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig">CloudbuildTriggerPubsubConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.sourceToBuildInput">source_to_build_input</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild">CloudbuildTriggerSourceToBuild</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.substitutionsInput">substitutions_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts">CloudbuildTriggerTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.triggerTemplateInput">trigger_template_input</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate">CloudbuildTriggerTriggerTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.webhookConfigInput">webhook_config_input</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfig">CloudbuildTriggerWebhookConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.filename">filename</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.ignoredFiles">ignored_files</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.includeBuildLogs">include_build_logs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.includedFiles">included_files</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.substitutions">substitutions</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `approval_config`<sup>Required</sup> <a name="approval_config" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.approvalConfig"></a>

```python
approval_config: CloudbuildTriggerApprovalConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference">CloudbuildTriggerApprovalConfigOutputReference</a>

---

##### `build_attribute`<sup>Required</sup> <a name="build_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.buildAttribute"></a>

```python
build_attribute: CloudbuildTriggerBuildOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference">CloudbuildTriggerBuildOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `git_file_source`<sup>Required</sup> <a name="git_file_source" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.gitFileSource"></a>

```python
git_file_source: CloudbuildTriggerGitFileSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference">CloudbuildTriggerGitFileSourceOutputReference</a>

---

##### `github`<sup>Required</sup> <a name="github" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.github"></a>

```python
github: CloudbuildTriggerGithubOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference">CloudbuildTriggerGithubOutputReference</a>

---

##### `pubsub_config`<sup>Required</sup> <a name="pubsub_config" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.pubsubConfig"></a>

```python
pubsub_config: CloudbuildTriggerPubsubConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference">CloudbuildTriggerPubsubConfigOutputReference</a>

---

##### `source_to_build`<sup>Required</sup> <a name="source_to_build" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.sourceToBuild"></a>

```python
source_to_build: CloudbuildTriggerSourceToBuildOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference">CloudbuildTriggerSourceToBuildOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.timeouts"></a>

```python
timeouts: CloudbuildTriggerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference">CloudbuildTriggerTimeoutsOutputReference</a>

---

##### `trigger_id`<sup>Required</sup> <a name="trigger_id" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.triggerId"></a>

```python
trigger_id: str
```

- *Type:* str

---

##### `trigger_template`<sup>Required</sup> <a name="trigger_template" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.triggerTemplate"></a>

```python
trigger_template: CloudbuildTriggerTriggerTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference">CloudbuildTriggerTriggerTemplateOutputReference</a>

---

##### `webhook_config`<sup>Required</sup> <a name="webhook_config" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.webhookConfig"></a>

```python
webhook_config: CloudbuildTriggerWebhookConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference">CloudbuildTriggerWebhookConfigOutputReference</a>

---

##### `approval_config_input`<sup>Optional</sup> <a name="approval_config_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.approvalConfigInput"></a>

```python
approval_config_input: CloudbuildTriggerApprovalConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfig">CloudbuildTriggerApprovalConfig</a>

---

##### `build_attribute_input`<sup>Optional</sup> <a name="build_attribute_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.buildAttributeInput"></a>

```python
build_attribute_input: CloudbuildTriggerBuild
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild">CloudbuildTriggerBuild</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.disabledInput"></a>

```python
disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filename_input`<sup>Optional</sup> <a name="filename_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.filenameInput"></a>

```python
filename_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `git_file_source_input`<sup>Optional</sup> <a name="git_file_source_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.gitFileSourceInput"></a>

```python
git_file_source_input: CloudbuildTriggerGitFileSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource">CloudbuildTriggerGitFileSource</a>

---

##### `github_input`<sup>Optional</sup> <a name="github_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.githubInput"></a>

```python
github_input: CloudbuildTriggerGithub
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub">CloudbuildTriggerGithub</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ignored_files_input`<sup>Optional</sup> <a name="ignored_files_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.ignoredFilesInput"></a>

```python
ignored_files_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_build_logs_input`<sup>Optional</sup> <a name="include_build_logs_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.includeBuildLogsInput"></a>

```python
include_build_logs_input: str
```

- *Type:* str

---

##### `included_files_input`<sup>Optional</sup> <a name="included_files_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.includedFilesInput"></a>

```python
included_files_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `pubsub_config_input`<sup>Optional</sup> <a name="pubsub_config_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.pubsubConfigInput"></a>

```python
pubsub_config_input: CloudbuildTriggerPubsubConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig">CloudbuildTriggerPubsubConfig</a>

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `source_to_build_input`<sup>Optional</sup> <a name="source_to_build_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.sourceToBuildInput"></a>

```python
source_to_build_input: CloudbuildTriggerSourceToBuild
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild">CloudbuildTriggerSourceToBuild</a>

---

##### `substitutions_input`<sup>Optional</sup> <a name="substitutions_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.substitutionsInput"></a>

```python
substitutions_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[CloudbuildTriggerTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts">CloudbuildTriggerTimeouts</a>, cdktf.IResolvable]

---

##### `trigger_template_input`<sup>Optional</sup> <a name="trigger_template_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.triggerTemplateInput"></a>

```python
trigger_template_input: CloudbuildTriggerTriggerTemplate
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate">CloudbuildTriggerTriggerTemplate</a>

---

##### `webhook_config_input`<sup>Optional</sup> <a name="webhook_config_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.webhookConfigInput"></a>

```python
webhook_config_input: CloudbuildTriggerWebhookConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfig">CloudbuildTriggerWebhookConfig</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.filename"></a>

```python
filename: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ignored_files`<sup>Required</sup> <a name="ignored_files" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.ignoredFiles"></a>

```python
ignored_files: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_build_logs`<sup>Required</sup> <a name="include_build_logs" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.includeBuildLogs"></a>

```python
include_build_logs: str
```

- *Type:* str

---

##### `included_files`<sup>Required</sup> <a name="included_files" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.includedFiles"></a>

```python
included_files: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `substitutions`<sup>Required</sup> <a name="substitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.substitutions"></a>

```python
substitutions: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudbuildTriggerApprovalConfig <a name="CloudbuildTriggerApprovalConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerApprovalConfig(
  approval_required: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfig.property.approvalRequired">approval_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not approval is needed. |

---

##### `approval_required`<sup>Optional</sup> <a name="approval_required" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfig.property.approvalRequired"></a>

```python
approval_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not approval is needed.

If this is set on a build, it will become pending when run,
and will need to be explicitly approved to start.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#approval_required CloudbuildTrigger#approval_required}

---

### CloudbuildTriggerBuild <a name="CloudbuildTriggerBuild" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerBuild(
  step: typing.Union[IResolvable, typing.List[CloudbuildTriggerBuildStep]],
  artifacts: CloudbuildTriggerBuildArtifacts = None,
  available_secrets: CloudbuildTriggerBuildAvailableSecrets = None,
  images: typing.List[str] = None,
  logs_bucket: str = None,
  options: CloudbuildTriggerBuildOptions = None,
  queue_ttl: str = None,
  secret: typing.Union[IResolvable, typing.List[CloudbuildTriggerBuildSecret]] = None,
  source: CloudbuildTriggerBuildSource = None,
  substitutions: typing.Mapping[str] = None,
  tags: typing.List[str] = None,
  timeout: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.step">step</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep">CloudbuildTriggerBuildStep</a>]]</code> | step block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.artifacts">artifacts</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts">CloudbuildTriggerBuildArtifacts</a></code> | artifacts block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.availableSecrets">available_secrets</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecrets">CloudbuildTriggerBuildAvailableSecrets</a></code> | available_secrets block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.images">images</a></code> | <code>typing.List[str]</code> | A list of images to be pushed upon the successful completion of all build steps. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.logsBucket">logs_bucket</a></code> | <code>str</code> | Google Cloud Storage bucket where logs should be written.  Logs file names will be of the format ${logsBucket}/log-${build_id}.txt. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.options">options</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions">CloudbuildTriggerBuildOptions</a></code> | options block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.queueTtl">queue_ttl</a></code> | <code>str</code> | TTL in queue for this build. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.secret">secret</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecret">CloudbuildTriggerBuildSecret</a>]]</code> | secret block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.source">source</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource">CloudbuildTriggerBuildSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.substitutions">substitutions</a></code> | <code>typing.Mapping[str]</code> | Substitutions data for Build resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.tags">tags</a></code> | <code>typing.List[str]</code> | Tags for annotation of a Build. These are not docker tags. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.timeout">timeout</a></code> | <code>str</code> | Amount of time that this build should be allowed to run, to second granularity. |

---

##### `step`<sup>Required</sup> <a name="step" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.step"></a>

```python
step: typing.Union[IResolvable, typing.List[CloudbuildTriggerBuildStep]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep">CloudbuildTriggerBuildStep</a>]]

step block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#step CloudbuildTrigger#step}

---

##### `artifacts`<sup>Optional</sup> <a name="artifacts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.artifacts"></a>

```python
artifacts: CloudbuildTriggerBuildArtifacts
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts">CloudbuildTriggerBuildArtifacts</a>

artifacts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#artifacts CloudbuildTrigger#artifacts}

---

##### `available_secrets`<sup>Optional</sup> <a name="available_secrets" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.availableSecrets"></a>

```python
available_secrets: CloudbuildTriggerBuildAvailableSecrets
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecrets">CloudbuildTriggerBuildAvailableSecrets</a>

available_secrets block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#available_secrets CloudbuildTrigger#available_secrets}

---

##### `images`<sup>Optional</sup> <a name="images" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.images"></a>

```python
images: typing.List[str]
```

- *Type:* typing.List[str]

A list of images to be pushed upon the successful completion of all build steps.

The images are pushed using the builder service account's credentials.
The digests of the pushed images will be stored in the Build resource's results field.
If any of the images fail to be pushed, the build status is marked FAILURE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#images CloudbuildTrigger#images}

---

##### `logs_bucket`<sup>Optional</sup> <a name="logs_bucket" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.logsBucket"></a>

```python
logs_bucket: str
```

- *Type:* str

Google Cloud Storage bucket where logs should be written.  Logs file names will be of the format ${logsBucket}/log-${build_id}.txt.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#logs_bucket CloudbuildTrigger#logs_bucket}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.options"></a>

```python
options: CloudbuildTriggerBuildOptions
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions">CloudbuildTriggerBuildOptions</a>

options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#options CloudbuildTrigger#options}

---

##### `queue_ttl`<sup>Optional</sup> <a name="queue_ttl" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.queueTtl"></a>

```python
queue_ttl: str
```

- *Type:* str

TTL in queue for this build.

If provided and the build is enqueued longer than this value,
the build will expire and the build status will be EXPIRED.
The TTL starts ticking from createTime.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#queue_ttl CloudbuildTrigger#queue_ttl}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.secret"></a>

```python
secret: typing.Union[IResolvable, typing.List[CloudbuildTriggerBuildSecret]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecret">CloudbuildTriggerBuildSecret</a>]]

secret block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#secret CloudbuildTrigger#secret}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.source"></a>

```python
source: CloudbuildTriggerBuildSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource">CloudbuildTriggerBuildSource</a>

source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#source CloudbuildTrigger#source}

---

##### `substitutions`<sup>Optional</sup> <a name="substitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.substitutions"></a>

```python
substitutions: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Substitutions data for Build resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#substitutions CloudbuildTrigger#substitutions}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Tags for annotation of a Build. These are not docker tags.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#tags CloudbuildTrigger#tags}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

Amount of time that this build should be allowed to run, to second granularity.

If this amount of time elapses, work on the build will cease and the build status will be TIMEOUT.
This timeout must be equal to or greater than the sum of the timeouts for build steps within the build.
The expected format is the number of seconds followed by s.
Default time is ten minutes (600s).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#timeout CloudbuildTrigger#timeout}

---

### CloudbuildTriggerBuildArtifacts <a name="CloudbuildTriggerBuildArtifacts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerBuildArtifacts(
  images: typing.List[str] = None,
  objects: CloudbuildTriggerBuildArtifactsObjects = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts.property.images">images</a></code> | <code>typing.List[str]</code> | A list of images to be pushed upon the successful completion of all build steps. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts.property.objects">objects</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects">CloudbuildTriggerBuildArtifactsObjects</a></code> | objects block. |

---

##### `images`<sup>Optional</sup> <a name="images" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts.property.images"></a>

```python
images: typing.List[str]
```

- *Type:* typing.List[str]

A list of images to be pushed upon the successful completion of all build steps.

The images will be pushed using the builder service account's credentials.

The digests of the pushed images will be stored in the Build resource's results field.

If any of the images fail to be pushed, the build is marked FAILURE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#images CloudbuildTrigger#images}

---

##### `objects`<sup>Optional</sup> <a name="objects" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts.property.objects"></a>

```python
objects: CloudbuildTriggerBuildArtifactsObjects
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects">CloudbuildTriggerBuildArtifactsObjects</a>

objects block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#objects CloudbuildTrigger#objects}

---

### CloudbuildTriggerBuildArtifactsObjects <a name="CloudbuildTriggerBuildArtifactsObjects" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects(
  location: str = None,
  paths: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects.property.location">location</a></code> | <code>str</code> | Cloud Storage bucket and optional object path, in the form "gs://bucket/path/to/somewhere/". |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects.property.paths">paths</a></code> | <code>typing.List[str]</code> | Path globs used to match files in the build's workspace. |

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects.property.location"></a>

```python
location: str
```

- *Type:* str

Cloud Storage bucket and optional object path, in the form "gs://bucket/path/to/somewhere/".

Files in the workspace matching any path pattern will be uploaded to Cloud Storage with
this location as a prefix.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#location CloudbuildTrigger#location}

---

##### `paths`<sup>Optional</sup> <a name="paths" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects.property.paths"></a>

```python
paths: typing.List[str]
```

- *Type:* typing.List[str]

Path globs used to match files in the build's workspace.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#paths CloudbuildTrigger#paths}

---

### CloudbuildTriggerBuildArtifactsObjectsTiming <a name="CloudbuildTriggerBuildArtifactsObjectsTiming" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTiming"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTiming.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTiming()
```


### CloudbuildTriggerBuildAvailableSecrets <a name="CloudbuildTriggerBuildAvailableSecrets" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecrets.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecrets(
  secret_manager: typing.Union[IResolvable, typing.List[CloudbuildTriggerBuildAvailableSecretsSecretManager]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecrets.property.secretManager">secret_manager</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManager">CloudbuildTriggerBuildAvailableSecretsSecretManager</a>]]</code> | secret_manager block. |

---

##### `secret_manager`<sup>Required</sup> <a name="secret_manager" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecrets.property.secretManager"></a>

```python
secret_manager: typing.Union[IResolvable, typing.List[CloudbuildTriggerBuildAvailableSecretsSecretManager]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManager">CloudbuildTriggerBuildAvailableSecretsSecretManager</a>]]

secret_manager block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#secret_manager CloudbuildTrigger#secret_manager}

---

### CloudbuildTriggerBuildAvailableSecretsSecretManager <a name="CloudbuildTriggerBuildAvailableSecretsSecretManager" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManager"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManager.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManager(
  env: str,
  version_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManager.property.env">env</a></code> | <code>str</code> | Environment variable name to associate with the secret. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManager.property.versionName">version_name</a></code> | <code>str</code> | Resource name of the SecretVersion. In format: projects/*\/secrets/*\/versions/*. |

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManager.property.env"></a>

```python
env: str
```

- *Type:* str

Environment variable name to associate with the secret.

Secret environment
variables must be unique across all of a build's secrets, and must be used
by at least one build step.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#env CloudbuildTrigger#env}

---

##### `version_name`<sup>Required</sup> <a name="version_name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManager.property.versionName"></a>

```python
version_name: str
```

- *Type:* str

Resource name of the SecretVersion. In format: projects/*\/secrets/*\/versions/*.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#version_name CloudbuildTrigger#version_name}

---

### CloudbuildTriggerBuildOptions <a name="CloudbuildTriggerBuildOptions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerBuildOptions(
  disk_size_gb: typing.Union[int, float] = None,
  dynamic_substitutions: typing.Union[bool, IResolvable] = None,
  env: typing.List[str] = None,
  logging: str = None,
  log_streaming_option: str = None,
  machine_type: str = None,
  requested_verify_option: str = None,
  secret_env: typing.List[str] = None,
  source_provenance_hash: typing.List[str] = None,
  substitution_option: str = None,
  volumes: typing.Union[IResolvable, typing.List[CloudbuildTriggerBuildOptionsVolumes]] = None,
  worker_pool: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | Requested disk size for the VM that runs the build. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.dynamicSubstitutions">dynamic_substitutions</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Option to specify whether or not to apply bash style string operations to the substitutions. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.env">env</a></code> | <code>typing.List[str]</code> | A list of global environment variable definitions that will exist for all build steps in this build. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.logging">logging</a></code> | <code>str</code> | Option to specify the logging mode, which determines if and where build logs are stored. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.logStreamingOption">log_streaming_option</a></code> | <code>str</code> | Option to define build log streaming behavior to Google Cloud Storage. Possible values: ["STREAM_DEFAULT", "STREAM_ON", "STREAM_OFF"]. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.machineType">machine_type</a></code> | <code>str</code> | Compute Engine machine type on which to run the build. Possible values: ["UNSPECIFIED", "N1_HIGHCPU_8", "N1_HIGHCPU_32", "E2_HIGHCPU_8", "E2_HIGHCPU_32"]. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.requestedVerifyOption">requested_verify_option</a></code> | <code>str</code> | Requested verifiability options. Possible values: ["NOT_VERIFIED", "VERIFIED"]. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.secretEnv">secret_env</a></code> | <code>typing.List[str]</code> | A list of global environment variables, which are encrypted using a Cloud Key Management Service crypto key. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.sourceProvenanceHash">source_provenance_hash</a></code> | <code>typing.List[str]</code> | Requested hash for SourceProvenance. Possible values: ["NONE", "SHA256", "MD5"]. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.substitutionOption">substitution_option</a></code> | <code>str</code> | Option to specify behavior when there is an error in the substitution checks. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.volumes">volumes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumes">CloudbuildTriggerBuildOptionsVolumes</a>]]</code> | volumes block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.workerPool">worker_pool</a></code> | <code>str</code> | Option to specify a WorkerPool for the build. Format projects/{project}/workerPools/{workerPool}. |

---

##### `disk_size_gb`<sup>Optional</sup> <a name="disk_size_gb" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Requested disk size for the VM that runs the build.

Note that this is NOT "disk free";
some of the space will be used by the operating system and build utilities.
Also note that this is the minimum disk size that will be allocated for the build --
the build may run with a larger disk than requested. At present, the maximum disk size
is 1000GB; builds that request more than the maximum are rejected with an error.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#disk_size_gb CloudbuildTrigger#disk_size_gb}

---

##### `dynamic_substitutions`<sup>Optional</sup> <a name="dynamic_substitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.dynamicSubstitutions"></a>

```python
dynamic_substitutions: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Option to specify whether or not to apply bash style string operations to the substitutions.

NOTE this is always enabled for triggered builds and cannot be overridden in the build configuration file.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#dynamic_substitutions CloudbuildTrigger#dynamic_substitutions}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.env"></a>

```python
env: typing.List[str]
```

- *Type:* typing.List[str]

A list of global environment variable definitions that will exist for all build steps in this build.

If a variable is defined in both globally and in a build step,
the variable will use the build step value.

The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#env CloudbuildTrigger#env}

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.logging"></a>

```python
logging: str
```

- *Type:* str

Option to specify the logging mode, which determines if and where build logs are stored.

Possible values: ["LOGGING_UNSPECIFIED", "LEGACY", "GCS_ONLY", "STACKDRIVER_ONLY", "CLOUD_LOGGING_ONLY", "NONE"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#logging CloudbuildTrigger#logging}

---

##### `log_streaming_option`<sup>Optional</sup> <a name="log_streaming_option" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.logStreamingOption"></a>

```python
log_streaming_option: str
```

- *Type:* str

Option to define build log streaming behavior to Google Cloud Storage. Possible values: ["STREAM_DEFAULT", "STREAM_ON", "STREAM_OFF"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#log_streaming_option CloudbuildTrigger#log_streaming_option}

---

##### `machine_type`<sup>Optional</sup> <a name="machine_type" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

Compute Engine machine type on which to run the build. Possible values: ["UNSPECIFIED", "N1_HIGHCPU_8", "N1_HIGHCPU_32", "E2_HIGHCPU_8", "E2_HIGHCPU_32"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#machine_type CloudbuildTrigger#machine_type}

---

##### `requested_verify_option`<sup>Optional</sup> <a name="requested_verify_option" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.requestedVerifyOption"></a>

```python
requested_verify_option: str
```

- *Type:* str

Requested verifiability options. Possible values: ["NOT_VERIFIED", "VERIFIED"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#requested_verify_option CloudbuildTrigger#requested_verify_option}

---

##### `secret_env`<sup>Optional</sup> <a name="secret_env" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.secretEnv"></a>

```python
secret_env: typing.List[str]
```

- *Type:* typing.List[str]

A list of global environment variables, which are encrypted using a Cloud Key Management Service crypto key.

These values must be specified in the build's Secret. These variables
will be available to all build steps in this build.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#secret_env CloudbuildTrigger#secret_env}

---

##### `source_provenance_hash`<sup>Optional</sup> <a name="source_provenance_hash" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.sourceProvenanceHash"></a>

```python
source_provenance_hash: typing.List[str]
```

- *Type:* typing.List[str]

Requested hash for SourceProvenance. Possible values: ["NONE", "SHA256", "MD5"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#source_provenance_hash CloudbuildTrigger#source_provenance_hash}

---

##### `substitution_option`<sup>Optional</sup> <a name="substitution_option" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.substitutionOption"></a>

```python
substitution_option: str
```

- *Type:* str

Option to specify behavior when there is an error in the substitution checks.

NOTE this is always set to ALLOW_LOOSE for triggered builds and cannot be overridden
in the build configuration file. Possible values: ["MUST_MATCH", "ALLOW_LOOSE"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#substitution_option CloudbuildTrigger#substitution_option}

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.volumes"></a>

```python
volumes: typing.Union[IResolvable, typing.List[CloudbuildTriggerBuildOptionsVolumes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumes">CloudbuildTriggerBuildOptionsVolumes</a>]]

volumes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#volumes CloudbuildTrigger#volumes}

---

##### `worker_pool`<sup>Optional</sup> <a name="worker_pool" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.workerPool"></a>

```python
worker_pool: str
```

- *Type:* str

Option to specify a WorkerPool for the build. Format projects/{project}/workerPools/{workerPool}.

This field is experimental.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#worker_pool CloudbuildTrigger#worker_pool}

---

### CloudbuildTriggerBuildOptionsVolumes <a name="CloudbuildTriggerBuildOptionsVolumes" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumes.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumes(
  name: str = None,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumes.property.name">name</a></code> | <code>str</code> | Name of the volume to mount. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumes.property.path">path</a></code> | <code>str</code> | Path at which to mount the volume. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumes.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the volume to mount.

Volume names must be unique per build step and must be valid names for Docker volumes.
Each named volume must be used by at least two build steps.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#name CloudbuildTrigger#name}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumes.property.path"></a>

```python
path: str
```

- *Type:* str

Path at which to mount the volume.

Paths must be absolute and cannot conflict with other volume paths on the same
build step or with certain reserved volume paths.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#path CloudbuildTrigger#path}

---

### CloudbuildTriggerBuildSecret <a name="CloudbuildTriggerBuildSecret" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecret.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerBuildSecret(
  kms_key_name: str,
  secret_env: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecret.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | Cloud KMS key name to use to decrypt these envs. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecret.property.secretEnv">secret_env</a></code> | <code>typing.Mapping[str]</code> | Map of environment variable name to its encrypted value. |

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecret.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

Cloud KMS key name to use to decrypt these envs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#kms_key_name CloudbuildTrigger#kms_key_name}

---

##### `secret_env`<sup>Optional</sup> <a name="secret_env" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecret.property.secretEnv"></a>

```python
secret_env: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Map of environment variable name to its encrypted value.

Secret environment variables must be unique across all of a build's secrets,
and must be used by at least one build step. Values can be at most 64 KB in size.
There can be at most 100 secret values across all of a build's secrets.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#secret_env CloudbuildTrigger#secret_env}

---

### CloudbuildTriggerBuildSource <a name="CloudbuildTriggerBuildSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerBuildSource(
  repo_source: CloudbuildTriggerBuildSourceRepoSource = None,
  storage_source: CloudbuildTriggerBuildSourceStorageSource = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource.property.repoSource">repo_source</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource">CloudbuildTriggerBuildSourceRepoSource</a></code> | repo_source block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource.property.storageSource">storage_source</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource">CloudbuildTriggerBuildSourceStorageSource</a></code> | storage_source block. |

---

##### `repo_source`<sup>Optional</sup> <a name="repo_source" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource.property.repoSource"></a>

```python
repo_source: CloudbuildTriggerBuildSourceRepoSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource">CloudbuildTriggerBuildSourceRepoSource</a>

repo_source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#repo_source CloudbuildTrigger#repo_source}

---

##### `storage_source`<sup>Optional</sup> <a name="storage_source" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource.property.storageSource"></a>

```python
storage_source: CloudbuildTriggerBuildSourceStorageSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource">CloudbuildTriggerBuildSourceStorageSource</a>

storage_source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#storage_source CloudbuildTrigger#storage_source}

---

### CloudbuildTriggerBuildSourceRepoSource <a name="CloudbuildTriggerBuildSourceRepoSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource(
  repo_name: str,
  branch_name: str = None,
  commit_sha: str = None,
  dir: str = None,
  invert_regex: typing.Union[bool, IResolvable] = None,
  project_id: str = None,
  substitutions: typing.Mapping[str] = None,
  tag_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.repoName">repo_name</a></code> | <code>str</code> | Name of the Cloud Source Repository. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.branchName">branch_name</a></code> | <code>str</code> | Regex matching branches to build. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.commitSha">commit_sha</a></code> | <code>str</code> | Explicit commit SHA to build. Exactly one a of branch name, tag, or commit SHA must be provided. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.dir">dir</a></code> | <code>str</code> | Directory, relative to the source root, in which to run the build. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.invertRegex">invert_regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Only trigger a build if the revision regex does NOT match the revision regex. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.projectId">project_id</a></code> | <code>str</code> | ID of the project that owns the Cloud Source Repository. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.substitutions">substitutions</a></code> | <code>typing.Mapping[str]</code> | Substitutions to use in a triggered build. Should only be used with triggers.run. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.tagName">tag_name</a></code> | <code>str</code> | Regex matching tags to build. |

---

##### `repo_name`<sup>Required</sup> <a name="repo_name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.repoName"></a>

```python
repo_name: str
```

- *Type:* str

Name of the Cloud Source Repository.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#repo_name CloudbuildTrigger#repo_name}

---

##### `branch_name`<sup>Optional</sup> <a name="branch_name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.branchName"></a>

```python
branch_name: str
```

- *Type:* str

Regex matching branches to build.

Exactly one a of branch name, tag, or commit SHA must be provided.
The syntax of the regular expressions accepted is the syntax accepted by RE2 and
described at https://github.com/google/re2/wiki/Syntax

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#branch_name CloudbuildTrigger#branch_name}

---

##### `commit_sha`<sup>Optional</sup> <a name="commit_sha" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.commitSha"></a>

```python
commit_sha: str
```

- *Type:* str

Explicit commit SHA to build. Exactly one a of branch name, tag, or commit SHA must be provided.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#commit_sha CloudbuildTrigger#commit_sha}

---

##### `dir`<sup>Optional</sup> <a name="dir" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.dir"></a>

```python
dir: str
```

- *Type:* str

Directory, relative to the source root, in which to run the build.

This must be a relative path. If a step's dir is specified and is an absolute path,
this value is ignored for that step's execution.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#dir CloudbuildTrigger#dir}

---

##### `invert_regex`<sup>Optional</sup> <a name="invert_regex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.invertRegex"></a>

```python
invert_regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Only trigger a build if the revision regex does NOT match the revision regex.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#invert_regex CloudbuildTrigger#invert_regex}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

ID of the project that owns the Cloud Source Repository.

If omitted, the project ID requesting the build is assumed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#project_id CloudbuildTrigger#project_id}

---

##### `substitutions`<sup>Optional</sup> <a name="substitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.substitutions"></a>

```python
substitutions: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Substitutions to use in a triggered build. Should only be used with triggers.run.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#substitutions CloudbuildTrigger#substitutions}

---

##### `tag_name`<sup>Optional</sup> <a name="tag_name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.tagName"></a>

```python
tag_name: str
```

- *Type:* str

Regex matching tags to build.

Exactly one a of branch name, tag, or commit SHA must be provided.
The syntax of the regular expressions accepted is the syntax accepted by RE2 and
described at https://github.com/google/re2/wiki/Syntax

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#tag_name CloudbuildTrigger#tag_name}

---

### CloudbuildTriggerBuildSourceStorageSource <a name="CloudbuildTriggerBuildSourceStorageSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource(
  bucket: str,
  object: str,
  generation: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource.property.bucket">bucket</a></code> | <code>str</code> | Google Cloud Storage bucket containing the source. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource.property.object">object</a></code> | <code>str</code> | Google Cloud Storage object containing the source. This object must be a gzipped archive file (.tar.gz) containing source to build. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource.property.generation">generation</a></code> | <code>str</code> | Google Cloud Storage generation for the object.  If the generation is omitted, the latest generation will be used. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Google Cloud Storage bucket containing the source.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#bucket CloudbuildTrigger#bucket}

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource.property.object"></a>

```python
object: str
```

- *Type:* str

Google Cloud Storage object containing the source. This object must be a gzipped archive file (.tar.gz) containing source to build.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#object CloudbuildTrigger#object}

---

##### `generation`<sup>Optional</sup> <a name="generation" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource.property.generation"></a>

```python
generation: str
```

- *Type:* str

Google Cloud Storage generation for the object.  If the generation is omitted, the latest generation will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#generation CloudbuildTrigger#generation}

---

### CloudbuildTriggerBuildStep <a name="CloudbuildTriggerBuildStep" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerBuildStep(
  name: str,
  args: typing.List[str] = None,
  dir: str = None,
  entrypoint: str = None,
  env: typing.List[str] = None,
  id: str = None,
  script: str = None,
  secret_env: typing.List[str] = None,
  timeout: str = None,
  timing: str = None,
  volumes: typing.Union[IResolvable, typing.List[CloudbuildTriggerBuildStepVolumes]] = None,
  wait_for: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.name">name</a></code> | <code>str</code> | The name of the container image that will run this particular build step. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.args">args</a></code> | <code>typing.List[str]</code> | A list of arguments that will be presented to the step when it is started. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.dir">dir</a></code> | <code>str</code> | Working directory to use when running this step's container. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.entrypoint">entrypoint</a></code> | <code>str</code> | Entrypoint to be used instead of the build step image's default entrypoint. If unset, the image's default entrypoint is used. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.env">env</a></code> | <code>typing.List[str]</code> | A list of environment variable definitions to be used when running a step. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.id">id</a></code> | <code>str</code> | Unique identifier for this build step, used in 'wait_for' to reference this build step as a dependency. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.script">script</a></code> | <code>str</code> | A shell script to be executed in the step. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.secretEnv">secret_env</a></code> | <code>typing.List[str]</code> | A list of environment variables which are encrypted using a Cloud Key Management Service crypto key. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.timeout">timeout</a></code> | <code>str</code> | Time limit for executing this build step. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.timing">timing</a></code> | <code>str</code> | Output only. Stores timing information for executing this build step. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.volumes">volumes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumes">CloudbuildTriggerBuildStepVolumes</a>]]</code> | volumes block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.waitFor">wait_for</a></code> | <code>typing.List[str]</code> | The ID(s) of the step(s) that this build step depends on. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the container image that will run this particular build step.

If the image is available in the host's Docker daemon's cache, it will be
run directly. If not, the host will attempt to pull the image first, using
the builder service account's credentials if necessary.

The Docker daemon's cache will already have the latest versions of all of
the officially supported build steps (see https://github.com/GoogleCloudPlatform/cloud-builders
for images and examples).
The Docker daemon will also have cached many of the layers for some popular
images, like "ubuntu", "debian", but they will be refreshed at the time
you attempt to use them.

If you built an image in a previous build step, it will be stored in the
host's Docker daemon's cache and is available to use as the name for a
later build step.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#name CloudbuildTrigger#name}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

A list of arguments that will be presented to the step when it is started.

If the image used to run the step's container has an entrypoint, the args
are used as arguments to that entrypoint. If the image does not define an
entrypoint, the first element in args is used as the entrypoint, and the
remainder will be used as arguments.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#args CloudbuildTrigger#args}

---

##### `dir`<sup>Optional</sup> <a name="dir" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.dir"></a>

```python
dir: str
```

- *Type:* str

Working directory to use when running this step's container.

If this value is a relative path, it is relative to the build's working
directory. If this value is absolute, it may be outside the build's working
directory, in which case the contents of the path may not be persisted
across build step executions, unless a 'volume' for that path is specified.

If the build specifies a 'RepoSource' with 'dir' and a step with a
'dir',
which specifies an absolute path, the 'RepoSource' 'dir' is ignored
for the step's execution.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#dir CloudbuildTrigger#dir}

---

##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.entrypoint"></a>

```python
entrypoint: str
```

- *Type:* str

Entrypoint to be used instead of the build step image's default entrypoint. If unset, the image's default entrypoint is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#entrypoint CloudbuildTrigger#entrypoint}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.env"></a>

```python
env: typing.List[str]
```

- *Type:* typing.List[str]

A list of environment variable definitions to be used when running a step.

The elements are of the form "KEY=VALUE" for the environment variable
"KEY" being given the value "VALUE".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#env CloudbuildTrigger#env}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.id"></a>

```python
id: str
```

- *Type:* str

Unique identifier for this build step, used in 'wait_for' to reference this build step as a dependency.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#id CloudbuildTrigger#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `script`<sup>Optional</sup> <a name="script" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.script"></a>

```python
script: str
```

- *Type:* str

A shell script to be executed in the step.

When script is provided, the user cannot specify the entrypoint or args.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#script CloudbuildTrigger#script}

---

##### `secret_env`<sup>Optional</sup> <a name="secret_env" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.secretEnv"></a>

```python
secret_env: typing.List[str]
```

- *Type:* typing.List[str]

A list of environment variables which are encrypted using a Cloud Key Management Service crypto key.

These values must be specified in
the build's 'Secret'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#secret_env CloudbuildTrigger#secret_env}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

Time limit for executing this build step.

If not defined,
the step has no
time limit and will be allowed to continue to run until either it
completes or the build itself times out.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#timeout CloudbuildTrigger#timeout}

---

##### `timing`<sup>Optional</sup> <a name="timing" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.timing"></a>

```python
timing: str
```

- *Type:* str

Output only. Stores timing information for executing this build step.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#timing CloudbuildTrigger#timing}

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.volumes"></a>

```python
volumes: typing.Union[IResolvable, typing.List[CloudbuildTriggerBuildStepVolumes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumes">CloudbuildTriggerBuildStepVolumes</a>]]

volumes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#volumes CloudbuildTrigger#volumes}

---

##### `wait_for`<sup>Optional</sup> <a name="wait_for" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.waitFor"></a>

```python
wait_for: typing.List[str]
```

- *Type:* typing.List[str]

The ID(s) of the step(s) that this build step depends on.

This build step will not start until all the build steps in 'wait_for'
have completed successfully. If 'wait_for' is empty, this build step
will start when all previous build steps in the 'Build.Steps' list
have completed successfully.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#wait_for CloudbuildTrigger#wait_for}

---

### CloudbuildTriggerBuildStepVolumes <a name="CloudbuildTriggerBuildStepVolumes" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumes.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerBuildStepVolumes(
  name: str,
  path: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumes.property.name">name</a></code> | <code>str</code> | Name of the volume to mount. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumes.property.path">path</a></code> | <code>str</code> | Path at which to mount the volume. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumes.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the volume to mount.

Volume names must be unique per build step and must be valid names for
Docker volumes. Each named volume must be used by at least two build steps.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#name CloudbuildTrigger#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumes.property.path"></a>

```python
path: str
```

- *Type:* str

Path at which to mount the volume.

Paths must be absolute and cannot conflict with other volume paths on
the same build step or with certain reserved volume paths.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#path CloudbuildTrigger#path}

---

### CloudbuildTriggerConfig <a name="CloudbuildTriggerConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  approval_config: CloudbuildTriggerApprovalConfig = None,
  build_attribute: CloudbuildTriggerBuild = None,
  description: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  filename: str = None,
  filter: str = None,
  git_file_source: CloudbuildTriggerGitFileSource = None,
  github: CloudbuildTriggerGithub = None,
  id: str = None,
  ignored_files: typing.List[str] = None,
  include_build_logs: str = None,
  included_files: typing.List[str] = None,
  location: str = None,
  name: str = None,
  project: str = None,
  pubsub_config: CloudbuildTriggerPubsubConfig = None,
  service_account: str = None,
  source_to_build: CloudbuildTriggerSourceToBuild = None,
  substitutions: typing.Mapping[str] = None,
  tags: typing.List[str] = None,
  timeouts: CloudbuildTriggerTimeouts = None,
  trigger_template: CloudbuildTriggerTriggerTemplate = None,
  webhook_config: CloudbuildTriggerWebhookConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.approvalConfig">approval_config</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfig">CloudbuildTriggerApprovalConfig</a></code> | approval_config block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.buildAttribute">build_attribute</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild">CloudbuildTriggerBuild</a></code> | build block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.description">description</a></code> | <code>str</code> | Human-readable description of the trigger. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the trigger is disabled or not. If true, the trigger will never result in a build. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.filename">filename</a></code> | <code>str</code> | Path, from the source root, to a file whose contents is used for the template. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.filter">filter</a></code> | <code>str</code> | A Common Expression Language string. Used only with Pub/Sub and Webhook. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.gitFileSource">git_file_source</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource">CloudbuildTriggerGitFileSource</a></code> | git_file_source block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.github">github</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub">CloudbuildTriggerGithub</a></code> | github block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#id CloudbuildTrigger#id}. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.ignoredFiles">ignored_files</a></code> | <code>typing.List[str]</code> | ignoredFiles and includedFiles are file glob matches using https://golang.org/pkg/path/filepath/#Match extended with support for '**'. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.includeBuildLogs">include_build_logs</a></code> | <code>str</code> | Build logs will be sent back to GitHub as part of the checkrun result. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.includedFiles">included_files</a></code> | <code>typing.List[str]</code> | ignoredFiles and includedFiles are file glob matches using https://golang.org/pkg/path/filepath/#Match extended with support for '**'. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.location">location</a></code> | <code>str</code> | The [Cloud Build location](https://cloud.google.com/build/docs/locations) for the trigger. If not specified, "global" is used. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.name">name</a></code> | <code>str</code> | Name of the trigger. Must be unique within the project. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#project CloudbuildTrigger#project}. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.pubsubConfig">pubsub_config</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig">CloudbuildTriggerPubsubConfig</a></code> | pubsub_config block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.serviceAccount">service_account</a></code> | <code>str</code> | The service account used for all user-controlled operations including triggers.patch, triggers.run, builds.create, and builds.cancel. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.sourceToBuild">source_to_build</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild">CloudbuildTriggerSourceToBuild</a></code> | source_to_build block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.substitutions">substitutions</a></code> | <code>typing.Mapping[str]</code> | Substitutions data for Build resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | Tags for annotation of a BuildTrigger. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts">CloudbuildTriggerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.triggerTemplate">trigger_template</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate">CloudbuildTriggerTriggerTemplate</a></code> | trigger_template block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.webhookConfig">webhook_config</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfig">CloudbuildTriggerWebhookConfig</a></code> | webhook_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `approval_config`<sup>Optional</sup> <a name="approval_config" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.approvalConfig"></a>

```python
approval_config: CloudbuildTriggerApprovalConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfig">CloudbuildTriggerApprovalConfig</a>

approval_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#approval_config CloudbuildTrigger#approval_config}

---

##### `build_attribute`<sup>Optional</sup> <a name="build_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.buildAttribute"></a>

```python
build_attribute: CloudbuildTriggerBuild
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild">CloudbuildTriggerBuild</a>

build block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#build CloudbuildTrigger#build}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Human-readable description of the trigger.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#description CloudbuildTrigger#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the trigger is disabled or not. If true, the trigger will never result in a build.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#disabled CloudbuildTrigger#disabled}

---

##### `filename`<sup>Optional</sup> <a name="filename" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.filename"></a>

```python
filename: str
```

- *Type:* str

Path, from the source root, to a file whose contents is used for the template.

Either a filename or build template must be provided. Set this only when using trigger_template or github.
When using Pub/Sub, Webhook or Manual set the file name using git_file_source instead.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#filename CloudbuildTrigger#filename}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.filter"></a>

```python
filter: str
```

- *Type:* str

A Common Expression Language string. Used only with Pub/Sub and Webhook.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#filter CloudbuildTrigger#filter}

---

##### `git_file_source`<sup>Optional</sup> <a name="git_file_source" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.gitFileSource"></a>

```python
git_file_source: CloudbuildTriggerGitFileSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource">CloudbuildTriggerGitFileSource</a>

git_file_source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#git_file_source CloudbuildTrigger#git_file_source}

---

##### `github`<sup>Optional</sup> <a name="github" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.github"></a>

```python
github: CloudbuildTriggerGithub
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub">CloudbuildTriggerGithub</a>

github block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#github CloudbuildTrigger#github}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#id CloudbuildTrigger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignored_files`<sup>Optional</sup> <a name="ignored_files" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.ignoredFiles"></a>

```python
ignored_files: typing.List[str]
```

- *Type:* typing.List[str]

ignoredFiles and includedFiles are file glob matches using https://golang.org/pkg/path/filepath/#Match extended with support for '**'.

If ignoredFiles and changed files are both empty, then they are not
used to determine whether or not to trigger a build.

If ignoredFiles is not empty, then we ignore any files that match any
of the ignored_file globs. If the change has no files that are outside
of the ignoredFiles globs, then we do not trigger a build.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#ignored_files CloudbuildTrigger#ignored_files}

---

##### `include_build_logs`<sup>Optional</sup> <a name="include_build_logs" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.includeBuildLogs"></a>

```python
include_build_logs: str
```

- *Type:* str

Build logs will be sent back to GitHub as part of the checkrun result.

Values can be INCLUDE_BUILD_LOGS_UNSPECIFIED or
INCLUDE_BUILD_LOGS_WITH_STATUS Possible values: ["INCLUDE_BUILD_LOGS_UNSPECIFIED", "INCLUDE_BUILD_LOGS_WITH_STATUS"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#include_build_logs CloudbuildTrigger#include_build_logs}

---

##### `included_files`<sup>Optional</sup> <a name="included_files" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.includedFiles"></a>

```python
included_files: typing.List[str]
```

- *Type:* typing.List[str]

ignoredFiles and includedFiles are file glob matches using https://golang.org/pkg/path/filepath/#Match extended with support for '**'.

If any of the files altered in the commit pass the ignoredFiles filter
and includedFiles is empty, then as far as this filter is concerned, we
should trigger the build.

If any of the files altered in the commit pass the ignoredFiles filter
and includedFiles is not empty, then we make sure that at least one of
those files matches a includedFiles glob. If not, then we do not trigger
a build.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#included_files CloudbuildTrigger#included_files}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The [Cloud Build location](https://cloud.google.com/build/docs/locations) for the trigger. If not specified, "global" is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#location CloudbuildTrigger#location}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the trigger. Must be unique within the project.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#name CloudbuildTrigger#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#project CloudbuildTrigger#project}.

---

##### `pubsub_config`<sup>Optional</sup> <a name="pubsub_config" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.pubsubConfig"></a>

```python
pubsub_config: CloudbuildTriggerPubsubConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig">CloudbuildTriggerPubsubConfig</a>

pubsub_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#pubsub_config CloudbuildTrigger#pubsub_config}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

The service account used for all user-controlled operations including triggers.patch, triggers.run, builds.create, and builds.cancel.

If no service account is set, then the standard Cloud Build service account
([PROJECT_NUM]@system.gserviceaccount.com) will be used instead.

Format: projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT_ID_OR_EMAIL}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#service_account CloudbuildTrigger#service_account}

---

##### `source_to_build`<sup>Optional</sup> <a name="source_to_build" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.sourceToBuild"></a>

```python
source_to_build: CloudbuildTriggerSourceToBuild
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild">CloudbuildTriggerSourceToBuild</a>

source_to_build block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#source_to_build CloudbuildTrigger#source_to_build}

---

##### `substitutions`<sup>Optional</sup> <a name="substitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.substitutions"></a>

```python
substitutions: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Substitutions data for Build resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#substitutions CloudbuildTrigger#substitutions}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Tags for annotation of a BuildTrigger.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#tags CloudbuildTrigger#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.timeouts"></a>

```python
timeouts: CloudbuildTriggerTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts">CloudbuildTriggerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#timeouts CloudbuildTrigger#timeouts}

---

##### `trigger_template`<sup>Optional</sup> <a name="trigger_template" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.triggerTemplate"></a>

```python
trigger_template: CloudbuildTriggerTriggerTemplate
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate">CloudbuildTriggerTriggerTemplate</a>

trigger_template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#trigger_template CloudbuildTrigger#trigger_template}

---

##### `webhook_config`<sup>Optional</sup> <a name="webhook_config" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.webhookConfig"></a>

```python
webhook_config: CloudbuildTriggerWebhookConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfig">CloudbuildTriggerWebhookConfig</a>

webhook_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#webhook_config CloudbuildTrigger#webhook_config}

---

### CloudbuildTriggerGitFileSource <a name="CloudbuildTriggerGitFileSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerGitFileSource(
  path: str,
  repo_type: str,
  github_enterprise_config: str = None,
  revision: str = None,
  uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.property.path">path</a></code> | <code>str</code> | The path of the file, with the repo root as the root of the path. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.property.repoType">repo_type</a></code> | <code>str</code> | The type of the repo, since it may not be explicit from the repo field (e.g from a URL).  Values can be UNKNOWN, CLOUD_SOURCE_REPOSITORIES, GITHUB, BITBUCKET_SERVER Possible values: ["UNKNOWN", "CLOUD_SOURCE_REPOSITORIES", "GITHUB", "BITBUCKET_SERVER"]. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.property.githubEnterpriseConfig">github_enterprise_config</a></code> | <code>str</code> | The full resource name of the github enterprise config. Format: projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}. projects/{project}/githubEnterpriseConfigs/{id}. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.property.revision">revision</a></code> | <code>str</code> | The branch, tag, arbitrary ref, or SHA version of the repo to use when resolving the  filename (optional). |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.property.uri">uri</a></code> | <code>str</code> | The URI of the repo (optional). |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.property.path"></a>

```python
path: str
```

- *Type:* str

The path of the file, with the repo root as the root of the path.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#path CloudbuildTrigger#path}

---

##### `repo_type`<sup>Required</sup> <a name="repo_type" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.property.repoType"></a>

```python
repo_type: str
```

- *Type:* str

The type of the repo, since it may not be explicit from the repo field (e.g from a URL).  Values can be UNKNOWN, CLOUD_SOURCE_REPOSITORIES, GITHUB, BITBUCKET_SERVER Possible values: ["UNKNOWN", "CLOUD_SOURCE_REPOSITORIES", "GITHUB", "BITBUCKET_SERVER"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#repo_type CloudbuildTrigger#repo_type}

---

##### `github_enterprise_config`<sup>Optional</sup> <a name="github_enterprise_config" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.property.githubEnterpriseConfig"></a>

```python
github_enterprise_config: str
```

- *Type:* str

The full resource name of the github enterprise config. Format: projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}. projects/{project}/githubEnterpriseConfigs/{id}.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#github_enterprise_config CloudbuildTrigger#github_enterprise_config}

---

##### `revision`<sup>Optional</sup> <a name="revision" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.property.revision"></a>

```python
revision: str
```

- *Type:* str

The branch, tag, arbitrary ref, or SHA version of the repo to use when resolving the  filename (optional).

This field respects the same syntax/resolution as described here: https://git-scm.com/docs/gitrevisions
If unspecified, the revision from which the trigger invocation originated is assumed to be the revision from which to read the specified path.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#revision CloudbuildTrigger#revision}

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.property.uri"></a>

```python
uri: str
```

- *Type:* str

The URI of the repo (optional).

If unspecified, the repo from which the trigger
invocation originated is assumed to be the repo from which to read the specified path.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#uri CloudbuildTrigger#uri}

---

### CloudbuildTriggerGithub <a name="CloudbuildTriggerGithub" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerGithub(
  name: str = None,
  owner: str = None,
  pull_request: CloudbuildTriggerGithubPullRequest = None,
  push: CloudbuildTriggerGithubPush = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub.property.name">name</a></code> | <code>str</code> | Name of the repository. For example: The name for https://github.com/googlecloudplatform/cloud-builders is "cloud-builders". |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub.property.owner">owner</a></code> | <code>str</code> | Owner of the repository. For example: The owner for https://github.com/googlecloudplatform/cloud-builders is "googlecloudplatform". |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub.property.pullRequest">pull_request</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest">CloudbuildTriggerGithubPullRequest</a></code> | pull_request block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub.property.push">push</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush">CloudbuildTriggerGithubPush</a></code> | push block. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the repository. For example: The name for https://github.com/googlecloudplatform/cloud-builders is "cloud-builders".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#name CloudbuildTrigger#name}

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub.property.owner"></a>

```python
owner: str
```

- *Type:* str

Owner of the repository. For example: The owner for https://github.com/googlecloudplatform/cloud-builders is "googlecloudplatform".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#owner CloudbuildTrigger#owner}

---

##### `pull_request`<sup>Optional</sup> <a name="pull_request" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub.property.pullRequest"></a>

```python
pull_request: CloudbuildTriggerGithubPullRequest
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest">CloudbuildTriggerGithubPullRequest</a>

pull_request block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#pull_request CloudbuildTrigger#pull_request}

---

##### `push`<sup>Optional</sup> <a name="push" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub.property.push"></a>

```python
push: CloudbuildTriggerGithubPush
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush">CloudbuildTriggerGithubPush</a>

push block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#push CloudbuildTrigger#push}

---

### CloudbuildTriggerGithubPullRequest <a name="CloudbuildTriggerGithubPullRequest" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerGithubPullRequest(
  branch: str,
  comment_control: str = None,
  invert_regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest.property.branch">branch</a></code> | <code>str</code> | Regex of branches to match. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest.property.commentControl">comment_control</a></code> | <code>str</code> | Whether to block builds on a "/gcbrun" comment from a repository owner or collaborator. Possible values: ["COMMENTS_DISABLED", "COMMENTS_ENABLED", "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY"]. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest.property.invertRegex">invert_regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, branches that do NOT match the git_ref will trigger a build. |

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest.property.branch"></a>

```python
branch: str
```

- *Type:* str

Regex of branches to match.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#branch CloudbuildTrigger#branch}

---

##### `comment_control`<sup>Optional</sup> <a name="comment_control" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest.property.commentControl"></a>

```python
comment_control: str
```

- *Type:* str

Whether to block builds on a "/gcbrun" comment from a repository owner or collaborator. Possible values: ["COMMENTS_DISABLED", "COMMENTS_ENABLED", "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#comment_control CloudbuildTrigger#comment_control}

---

##### `invert_regex`<sup>Optional</sup> <a name="invert_regex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest.property.invertRegex"></a>

```python
invert_regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, branches that do NOT match the git_ref will trigger a build.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#invert_regex CloudbuildTrigger#invert_regex}

---

### CloudbuildTriggerGithubPush <a name="CloudbuildTriggerGithubPush" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerGithubPush(
  branch: str = None,
  invert_regex: typing.Union[bool, IResolvable] = None,
  tag: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush.property.branch">branch</a></code> | <code>str</code> | Regex of branches to match.  Specify only one of branch or tag. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush.property.invertRegex">invert_regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When true, only trigger a build if the revision regex does NOT match the git_ref regex. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush.property.tag">tag</a></code> | <code>str</code> | Regex of tags to match.  Specify only one of branch or tag. |

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush.property.branch"></a>

```python
branch: str
```

- *Type:* str

Regex of branches to match.  Specify only one of branch or tag.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#branch CloudbuildTrigger#branch}

---

##### `invert_regex`<sup>Optional</sup> <a name="invert_regex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush.property.invertRegex"></a>

```python
invert_regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, only trigger a build if the revision regex does NOT match the git_ref regex.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#invert_regex CloudbuildTrigger#invert_regex}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush.property.tag"></a>

```python
tag: str
```

- *Type:* str

Regex of tags to match.  Specify only one of branch or tag.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#tag CloudbuildTrigger#tag}

---

### CloudbuildTriggerPubsubConfig <a name="CloudbuildTriggerPubsubConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerPubsubConfig(
  topic: str,
  service_account_email: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig.property.topic">topic</a></code> | <code>str</code> | The name of the topic from which this subscription is receiving messages. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | Service account that will make the push request. |

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig.property.topic"></a>

```python
topic: str
```

- *Type:* str

The name of the topic from which this subscription is receiving messages.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#topic CloudbuildTrigger#topic}

---

##### `service_account_email`<sup>Optional</sup> <a name="service_account_email" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

Service account that will make the push request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#service_account_email CloudbuildTrigger#service_account_email}

---

### CloudbuildTriggerSourceToBuild <a name="CloudbuildTriggerSourceToBuild" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerSourceToBuild(
  ref: str,
  repo_type: str,
  uri: str,
  github_enterprise_config: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild.property.ref">ref</a></code> | <code>str</code> | The branch or tag to use. Must start with "refs/" (required). |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild.property.repoType">repo_type</a></code> | <code>str</code> | The type of the repo, since it may not be explicit from the repo field (e.g from a URL). Values can be UNKNOWN, CLOUD_SOURCE_REPOSITORIES, GITHUB, BITBUCKET_SERVER Possible values: ["UNKNOWN", "CLOUD_SOURCE_REPOSITORIES", "GITHUB", "BITBUCKET_SERVER"]. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild.property.uri">uri</a></code> | <code>str</code> | The URI of the repo (required). |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild.property.githubEnterpriseConfig">github_enterprise_config</a></code> | <code>str</code> | The full resource name of the github enterprise config. Format: projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}. projects/{project}/githubEnterpriseConfigs/{id}. |

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild.property.ref"></a>

```python
ref: str
```

- *Type:* str

The branch or tag to use. Must start with "refs/" (required).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#ref CloudbuildTrigger#ref}

---

##### `repo_type`<sup>Required</sup> <a name="repo_type" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild.property.repoType"></a>

```python
repo_type: str
```

- *Type:* str

The type of the repo, since it may not be explicit from the repo field (e.g from a URL). Values can be UNKNOWN, CLOUD_SOURCE_REPOSITORIES, GITHUB, BITBUCKET_SERVER Possible values: ["UNKNOWN", "CLOUD_SOURCE_REPOSITORIES", "GITHUB", "BITBUCKET_SERVER"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#repo_type CloudbuildTrigger#repo_type}

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild.property.uri"></a>

```python
uri: str
```

- *Type:* str

The URI of the repo (required).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#uri CloudbuildTrigger#uri}

---

##### `github_enterprise_config`<sup>Optional</sup> <a name="github_enterprise_config" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild.property.githubEnterpriseConfig"></a>

```python
github_enterprise_config: str
```

- *Type:* str

The full resource name of the github enterprise config. Format: projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}. projects/{project}/githubEnterpriseConfigs/{id}.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#github_enterprise_config CloudbuildTrigger#github_enterprise_config}

---

### CloudbuildTriggerTimeouts <a name="CloudbuildTriggerTimeouts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#create CloudbuildTrigger#create}. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#delete CloudbuildTrigger#delete}. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#update CloudbuildTrigger#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#create CloudbuildTrigger#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#delete CloudbuildTrigger#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#update CloudbuildTrigger#update}.

---

### CloudbuildTriggerTriggerTemplate <a name="CloudbuildTriggerTriggerTemplate" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerTriggerTemplate(
  branch_name: str = None,
  commit_sha: str = None,
  dir: str = None,
  invert_regex: typing.Union[bool, IResolvable] = None,
  project_id: str = None,
  repo_name: str = None,
  tag_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.branchName">branch_name</a></code> | <code>str</code> | Name of the branch to build. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.commitSha">commit_sha</a></code> | <code>str</code> | Explicit commit SHA to build. Exactly one of a branch name, tag, or commit SHA must be provided. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.dir">dir</a></code> | <code>str</code> | Directory, relative to the source root, in which to run the build. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.invertRegex">invert_regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Only trigger a build if the revision regex does NOT match the revision regex. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.projectId">project_id</a></code> | <code>str</code> | ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.repoName">repo_name</a></code> | <code>str</code> | Name of the Cloud Source Repository. If omitted, the name "default" is assumed. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.tagName">tag_name</a></code> | <code>str</code> | Name of the tag to build. |

---

##### `branch_name`<sup>Optional</sup> <a name="branch_name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.branchName"></a>

```python
branch_name: str
```

- *Type:* str

Name of the branch to build.

Exactly one a of branch name, tag, or commit SHA must be provided.
This field is a regular expression.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#branch_name CloudbuildTrigger#branch_name}

---

##### `commit_sha`<sup>Optional</sup> <a name="commit_sha" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.commitSha"></a>

```python
commit_sha: str
```

- *Type:* str

Explicit commit SHA to build. Exactly one of a branch name, tag, or commit SHA must be provided.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#commit_sha CloudbuildTrigger#commit_sha}

---

##### `dir`<sup>Optional</sup> <a name="dir" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.dir"></a>

```python
dir: str
```

- *Type:* str

Directory, relative to the source root, in which to run the build.

This must be a relative path. If a step's dir is specified and
is an absolute path, this value is ignored for that step's
execution.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#dir CloudbuildTrigger#dir}

---

##### `invert_regex`<sup>Optional</sup> <a name="invert_regex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.invertRegex"></a>

```python
invert_regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Only trigger a build if the revision regex does NOT match the revision regex.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#invert_regex CloudbuildTrigger#invert_regex}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#project_id CloudbuildTrigger#project_id}

---

##### `repo_name`<sup>Optional</sup> <a name="repo_name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.repoName"></a>

```python
repo_name: str
```

- *Type:* str

Name of the Cloud Source Repository. If omitted, the name "default" is assumed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#repo_name CloudbuildTrigger#repo_name}

---

##### `tag_name`<sup>Optional</sup> <a name="tag_name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.tagName"></a>

```python
tag_name: str
```

- *Type:* str

Name of the tag to build.

Exactly one of a branch name, tag, or commit SHA must be provided.
This field is a regular expression.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#tag_name CloudbuildTrigger#tag_name}

---

### CloudbuildTriggerWebhookConfig <a name="CloudbuildTriggerWebhookConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerWebhookConfig(
  secret: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfig.property.secret">secret</a></code> | <code>str</code> | Resource name for the secret required as a URL parameter. |

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfig.property.secret"></a>

```python
secret: str
```

- *Type:* str

Resource name for the secret required as a URL parameter.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#secret CloudbuildTrigger#secret}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudbuildTriggerApprovalConfigOutputReference <a name="CloudbuildTriggerApprovalConfigOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.resetApprovalRequired">reset_approval_required</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_approval_required` <a name="reset_approval_required" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.resetApprovalRequired"></a>

```python
def reset_approval_required() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.property.approvalRequiredInput">approval_required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.property.approvalRequired">approval_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfig">CloudbuildTriggerApprovalConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `approval_required_input`<sup>Optional</sup> <a name="approval_required_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.property.approvalRequiredInput"></a>

```python
approval_required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `approval_required`<sup>Required</sup> <a name="approval_required" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.property.approvalRequired"></a>

```python
approval_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.property.internalValue"></a>

```python
internal_value: CloudbuildTriggerApprovalConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfig">CloudbuildTriggerApprovalConfig</a>

---


### CloudbuildTriggerBuildArtifactsObjectsOutputReference <a name="CloudbuildTriggerBuildArtifactsObjectsOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.resetPaths">reset_paths</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_paths` <a name="reset_paths" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.resetPaths"></a>

```python
def reset_paths() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.timing">timing</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList">CloudbuildTriggerBuildArtifactsObjectsTimingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.pathsInput">paths_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.paths">paths</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects">CloudbuildTriggerBuildArtifactsObjects</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `timing`<sup>Required</sup> <a name="timing" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.timing"></a>

```python
timing: CloudbuildTriggerBuildArtifactsObjectsTimingList
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList">CloudbuildTriggerBuildArtifactsObjectsTimingList</a>

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `paths_input`<sup>Optional</sup> <a name="paths_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.pathsInput"></a>

```python
paths_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.paths"></a>

```python
paths: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.internalValue"></a>

```python
internal_value: CloudbuildTriggerBuildArtifactsObjects
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects">CloudbuildTriggerBuildArtifactsObjects</a>

---


### CloudbuildTriggerBuildArtifactsObjectsTimingList <a name="CloudbuildTriggerBuildArtifactsObjectsTimingList" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference <a name="CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTiming">CloudbuildTriggerBuildArtifactsObjectsTiming</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.internalValue"></a>

```python
internal_value: CloudbuildTriggerBuildArtifactsObjectsTiming
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTiming">CloudbuildTriggerBuildArtifactsObjectsTiming</a>

---


### CloudbuildTriggerBuildArtifactsOutputReference <a name="CloudbuildTriggerBuildArtifactsOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.putObjects">put_objects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.resetImages">reset_images</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.resetObjects">reset_objects</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_objects` <a name="put_objects" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.putObjects"></a>

```python
def put_objects(
  location: str = None,
  paths: typing.List[str] = None
) -> None
```

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.putObjects.parameter.location"></a>

- *Type:* str

Cloud Storage bucket and optional object path, in the form "gs://bucket/path/to/somewhere/".

Files in the workspace matching any path pattern will be uploaded to Cloud Storage with
this location as a prefix.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#location CloudbuildTrigger#location}

---

###### `paths`<sup>Optional</sup> <a name="paths" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.putObjects.parameter.paths"></a>

- *Type:* typing.List[str]

Path globs used to match files in the build's workspace.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#paths CloudbuildTrigger#paths}

---

##### `reset_images` <a name="reset_images" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.resetImages"></a>

```python
def reset_images() -> None
```

##### `reset_objects` <a name="reset_objects" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.resetObjects"></a>

```python
def reset_objects() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.objects">objects</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference">CloudbuildTriggerBuildArtifactsObjectsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.imagesInput">images_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.objectsInput">objects_input</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects">CloudbuildTriggerBuildArtifactsObjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.images">images</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts">CloudbuildTriggerBuildArtifacts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `objects`<sup>Required</sup> <a name="objects" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.objects"></a>

```python
objects: CloudbuildTriggerBuildArtifactsObjectsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference">CloudbuildTriggerBuildArtifactsObjectsOutputReference</a>

---

##### `images_input`<sup>Optional</sup> <a name="images_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.imagesInput"></a>

```python
images_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `objects_input`<sup>Optional</sup> <a name="objects_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.objectsInput"></a>

```python
objects_input: CloudbuildTriggerBuildArtifactsObjects
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects">CloudbuildTriggerBuildArtifactsObjects</a>

---

##### `images`<sup>Required</sup> <a name="images" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.images"></a>

```python
images: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.internalValue"></a>

```python
internal_value: CloudbuildTriggerBuildArtifacts
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts">CloudbuildTriggerBuildArtifacts</a>

---


### CloudbuildTriggerBuildAvailableSecretsOutputReference <a name="CloudbuildTriggerBuildAvailableSecretsOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.putSecretManager">put_secret_manager</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_secret_manager` <a name="put_secret_manager" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.putSecretManager"></a>

```python
def put_secret_manager(
  value: typing.Union[IResolvable, typing.List[CloudbuildTriggerBuildAvailableSecretsSecretManager]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.putSecretManager.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManager">CloudbuildTriggerBuildAvailableSecretsSecretManager</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.property.secretManager">secret_manager</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList">CloudbuildTriggerBuildAvailableSecretsSecretManagerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.property.secretManagerInput">secret_manager_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManager">CloudbuildTriggerBuildAvailableSecretsSecretManager</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecrets">CloudbuildTriggerBuildAvailableSecrets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_manager`<sup>Required</sup> <a name="secret_manager" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.property.secretManager"></a>

```python
secret_manager: CloudbuildTriggerBuildAvailableSecretsSecretManagerList
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList">CloudbuildTriggerBuildAvailableSecretsSecretManagerList</a>

---

##### `secret_manager_input`<sup>Optional</sup> <a name="secret_manager_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.property.secretManagerInput"></a>

```python
secret_manager_input: typing.Union[IResolvable, typing.List[CloudbuildTriggerBuildAvailableSecretsSecretManager]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManager">CloudbuildTriggerBuildAvailableSecretsSecretManager</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.property.internalValue"></a>

```python
internal_value: CloudbuildTriggerBuildAvailableSecrets
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecrets">CloudbuildTriggerBuildAvailableSecrets</a>

---


### CloudbuildTriggerBuildAvailableSecretsSecretManagerList <a name="CloudbuildTriggerBuildAvailableSecretsSecretManagerList" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManager">CloudbuildTriggerBuildAvailableSecretsSecretManager</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudbuildTriggerBuildAvailableSecretsSecretManager]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManager">CloudbuildTriggerBuildAvailableSecretsSecretManager</a>]]

---


### CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference <a name="CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.envInput">env_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.versionNameInput">version_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.env">env</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.versionName">version_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManager">CloudbuildTriggerBuildAvailableSecretsSecretManager</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `env_input`<sup>Optional</sup> <a name="env_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.envInput"></a>

```python
env_input: str
```

- *Type:* str

---

##### `version_name_input`<sup>Optional</sup> <a name="version_name_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.versionNameInput"></a>

```python
version_name_input: str
```

- *Type:* str

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.env"></a>

```python
env: str
```

- *Type:* str

---

##### `version_name`<sup>Required</sup> <a name="version_name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.versionName"></a>

```python
version_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudbuildTriggerBuildAvailableSecretsSecretManager, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManager">CloudbuildTriggerBuildAvailableSecretsSecretManager</a>, cdktf.IResolvable]

---


### CloudbuildTriggerBuildOptionsOutputReference <a name="CloudbuildTriggerBuildOptionsOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.putVolumes">put_volumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetDiskSizeGb">reset_disk_size_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetDynamicSubstitutions">reset_dynamic_substitutions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetEnv">reset_env</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetLogging">reset_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetLogStreamingOption">reset_log_streaming_option</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetMachineType">reset_machine_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetRequestedVerifyOption">reset_requested_verify_option</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetSecretEnv">reset_secret_env</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetSourceProvenanceHash">reset_source_provenance_hash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetSubstitutionOption">reset_substitution_option</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetVolumes">reset_volumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetWorkerPool">reset_worker_pool</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_volumes` <a name="put_volumes" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.putVolumes"></a>

```python
def put_volumes(
  value: typing.Union[IResolvable, typing.List[CloudbuildTriggerBuildOptionsVolumes]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.putVolumes.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumes">CloudbuildTriggerBuildOptionsVolumes</a>]]

---

##### `reset_disk_size_gb` <a name="reset_disk_size_gb" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetDiskSizeGb"></a>

```python
def reset_disk_size_gb() -> None
```

##### `reset_dynamic_substitutions` <a name="reset_dynamic_substitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetDynamicSubstitutions"></a>

```python
def reset_dynamic_substitutions() -> None
```

##### `reset_env` <a name="reset_env" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetEnv"></a>

```python
def reset_env() -> None
```

##### `reset_logging` <a name="reset_logging" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetLogging"></a>

```python
def reset_logging() -> None
```

##### `reset_log_streaming_option` <a name="reset_log_streaming_option" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetLogStreamingOption"></a>

```python
def reset_log_streaming_option() -> None
```

##### `reset_machine_type` <a name="reset_machine_type" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetMachineType"></a>

```python
def reset_machine_type() -> None
```

##### `reset_requested_verify_option` <a name="reset_requested_verify_option" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetRequestedVerifyOption"></a>

```python
def reset_requested_verify_option() -> None
```

##### `reset_secret_env` <a name="reset_secret_env" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetSecretEnv"></a>

```python
def reset_secret_env() -> None
```

##### `reset_source_provenance_hash` <a name="reset_source_provenance_hash" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetSourceProvenanceHash"></a>

```python
def reset_source_provenance_hash() -> None
```

##### `reset_substitution_option` <a name="reset_substitution_option" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetSubstitutionOption"></a>

```python
def reset_substitution_option() -> None
```

##### `reset_volumes` <a name="reset_volumes" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetVolumes"></a>

```python
def reset_volumes() -> None
```

##### `reset_worker_pool` <a name="reset_worker_pool" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetWorkerPool"></a>

```python
def reset_worker_pool() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.volumes">volumes</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList">CloudbuildTriggerBuildOptionsVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.diskSizeGbInput">disk_size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.dynamicSubstitutionsInput">dynamic_substitutions_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.envInput">env_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.loggingInput">logging_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.logStreamingOptionInput">log_streaming_option_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.machineTypeInput">machine_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.requestedVerifyOptionInput">requested_verify_option_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.secretEnvInput">secret_env_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.sourceProvenanceHashInput">source_provenance_hash_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.substitutionOptionInput">substitution_option_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.volumesInput">volumes_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumes">CloudbuildTriggerBuildOptionsVolumes</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.workerPoolInput">worker_pool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.dynamicSubstitutions">dynamic_substitutions</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.env">env</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.logging">logging</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.logStreamingOption">log_streaming_option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.machineType">machine_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.requestedVerifyOption">requested_verify_option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.secretEnv">secret_env</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.sourceProvenanceHash">source_provenance_hash</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.substitutionOption">substitution_option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.workerPool">worker_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions">CloudbuildTriggerBuildOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.volumes"></a>

```python
volumes: CloudbuildTriggerBuildOptionsVolumesList
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList">CloudbuildTriggerBuildOptionsVolumesList</a>

---

##### `disk_size_gb_input`<sup>Optional</sup> <a name="disk_size_gb_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.diskSizeGbInput"></a>

```python
disk_size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dynamic_substitutions_input`<sup>Optional</sup> <a name="dynamic_substitutions_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.dynamicSubstitutionsInput"></a>

```python
dynamic_substitutions_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `env_input`<sup>Optional</sup> <a name="env_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.envInput"></a>

```python
env_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `logging_input`<sup>Optional</sup> <a name="logging_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.loggingInput"></a>

```python
logging_input: str
```

- *Type:* str

---

##### `log_streaming_option_input`<sup>Optional</sup> <a name="log_streaming_option_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.logStreamingOptionInput"></a>

```python
log_streaming_option_input: str
```

- *Type:* str

---

##### `machine_type_input`<sup>Optional</sup> <a name="machine_type_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.machineTypeInput"></a>

```python
machine_type_input: str
```

- *Type:* str

---

##### `requested_verify_option_input`<sup>Optional</sup> <a name="requested_verify_option_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.requestedVerifyOptionInput"></a>

```python
requested_verify_option_input: str
```

- *Type:* str

---

##### `secret_env_input`<sup>Optional</sup> <a name="secret_env_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.secretEnvInput"></a>

```python
secret_env_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_provenance_hash_input`<sup>Optional</sup> <a name="source_provenance_hash_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.sourceProvenanceHashInput"></a>

```python
source_provenance_hash_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `substitution_option_input`<sup>Optional</sup> <a name="substitution_option_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.substitutionOptionInput"></a>

```python
substitution_option_input: str
```

- *Type:* str

---

##### `volumes_input`<sup>Optional</sup> <a name="volumes_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.volumesInput"></a>

```python
volumes_input: typing.Union[IResolvable, typing.List[CloudbuildTriggerBuildOptionsVolumes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumes">CloudbuildTriggerBuildOptionsVolumes</a>]]

---

##### `worker_pool_input`<sup>Optional</sup> <a name="worker_pool_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.workerPoolInput"></a>

```python
worker_pool_input: str
```

- *Type:* str

---

##### `disk_size_gb`<sup>Required</sup> <a name="disk_size_gb" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dynamic_substitutions`<sup>Required</sup> <a name="dynamic_substitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.dynamicSubstitutions"></a>

```python
dynamic_substitutions: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.env"></a>

```python
env: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.logging"></a>

```python
logging: str
```

- *Type:* str

---

##### `log_streaming_option`<sup>Required</sup> <a name="log_streaming_option" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.logStreamingOption"></a>

```python
log_streaming_option: str
```

- *Type:* str

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

---

##### `requested_verify_option`<sup>Required</sup> <a name="requested_verify_option" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.requestedVerifyOption"></a>

```python
requested_verify_option: str
```

- *Type:* str

---

##### `secret_env`<sup>Required</sup> <a name="secret_env" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.secretEnv"></a>

```python
secret_env: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_provenance_hash`<sup>Required</sup> <a name="source_provenance_hash" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.sourceProvenanceHash"></a>

```python
source_provenance_hash: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `substitution_option`<sup>Required</sup> <a name="substitution_option" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.substitutionOption"></a>

```python
substitution_option: str
```

- *Type:* str

---

##### `worker_pool`<sup>Required</sup> <a name="worker_pool" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.workerPool"></a>

```python
worker_pool: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.internalValue"></a>

```python
internal_value: CloudbuildTriggerBuildOptions
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions">CloudbuildTriggerBuildOptions</a>

---


### CloudbuildTriggerBuildOptionsVolumesList <a name="CloudbuildTriggerBuildOptionsVolumesList" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudbuildTriggerBuildOptionsVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumes">CloudbuildTriggerBuildOptionsVolumes</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudbuildTriggerBuildOptionsVolumes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumes">CloudbuildTriggerBuildOptionsVolumes</a>]]

---


### CloudbuildTriggerBuildOptionsVolumesOutputReference <a name="CloudbuildTriggerBuildOptionsVolumesOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumes">CloudbuildTriggerBuildOptionsVolumes</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudbuildTriggerBuildOptionsVolumes, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumes">CloudbuildTriggerBuildOptionsVolumes</a>, cdktf.IResolvable]

---


### CloudbuildTriggerBuildOutputReference <a name="CloudbuildTriggerBuildOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerBuildOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putArtifacts">put_artifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putAvailableSecrets">put_available_secrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putOptions">put_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putSecret">put_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putSource">put_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putStep">put_step</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetArtifacts">reset_artifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetAvailableSecrets">reset_available_secrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetImages">reset_images</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetLogsBucket">reset_logs_bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetOptions">reset_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetQueueTtl">reset_queue_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetSecret">reset_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetSubstitutions">reset_substitutions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_artifacts` <a name="put_artifacts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putArtifacts"></a>

```python
def put_artifacts(
  images: typing.List[str] = None,
  objects: CloudbuildTriggerBuildArtifactsObjects = None
) -> None
```

###### `images`<sup>Optional</sup> <a name="images" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putArtifacts.parameter.images"></a>

- *Type:* typing.List[str]

A list of images to be pushed upon the successful completion of all build steps.

The images will be pushed using the builder service account's credentials.

The digests of the pushed images will be stored in the Build resource's results field.

If any of the images fail to be pushed, the build is marked FAILURE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#images CloudbuildTrigger#images}

---

###### `objects`<sup>Optional</sup> <a name="objects" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putArtifacts.parameter.objects"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects">CloudbuildTriggerBuildArtifactsObjects</a>

objects block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#objects CloudbuildTrigger#objects}

---

##### `put_available_secrets` <a name="put_available_secrets" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putAvailableSecrets"></a>

```python
def put_available_secrets(
  secret_manager: typing.Union[IResolvable, typing.List[CloudbuildTriggerBuildAvailableSecretsSecretManager]]
) -> None
```

###### `secret_manager`<sup>Required</sup> <a name="secret_manager" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putAvailableSecrets.parameter.secretManager"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManager">CloudbuildTriggerBuildAvailableSecretsSecretManager</a>]]

secret_manager block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#secret_manager CloudbuildTrigger#secret_manager}

---

##### `put_options` <a name="put_options" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putOptions"></a>

```python
def put_options(
  disk_size_gb: typing.Union[int, float] = None,
  dynamic_substitutions: typing.Union[bool, IResolvable] = None,
  env: typing.List[str] = None,
  logging: str = None,
  log_streaming_option: str = None,
  machine_type: str = None,
  requested_verify_option: str = None,
  secret_env: typing.List[str] = None,
  source_provenance_hash: typing.List[str] = None,
  substitution_option: str = None,
  volumes: typing.Union[IResolvable, typing.List[CloudbuildTriggerBuildOptionsVolumes]] = None,
  worker_pool: str = None
) -> None
```

###### `disk_size_gb`<sup>Optional</sup> <a name="disk_size_gb" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putOptions.parameter.diskSizeGb"></a>

- *Type:* typing.Union[int, float]

Requested disk size for the VM that runs the build.

Note that this is NOT "disk free";
some of the space will be used by the operating system and build utilities.
Also note that this is the minimum disk size that will be allocated for the build --
the build may run with a larger disk than requested. At present, the maximum disk size
is 1000GB; builds that request more than the maximum are rejected with an error.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#disk_size_gb CloudbuildTrigger#disk_size_gb}

---

###### `dynamic_substitutions`<sup>Optional</sup> <a name="dynamic_substitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putOptions.parameter.dynamicSubstitutions"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Option to specify whether or not to apply bash style string operations to the substitutions.

NOTE this is always enabled for triggered builds and cannot be overridden in the build configuration file.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#dynamic_substitutions CloudbuildTrigger#dynamic_substitutions}

---

###### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putOptions.parameter.env"></a>

- *Type:* typing.List[str]

A list of global environment variable definitions that will exist for all build steps in this build.

If a variable is defined in both globally and in a build step,
the variable will use the build step value.

The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#env CloudbuildTrigger#env}

---

###### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putOptions.parameter.logging"></a>

- *Type:* str

Option to specify the logging mode, which determines if and where build logs are stored.

Possible values: ["LOGGING_UNSPECIFIED", "LEGACY", "GCS_ONLY", "STACKDRIVER_ONLY", "CLOUD_LOGGING_ONLY", "NONE"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#logging CloudbuildTrigger#logging}

---

###### `log_streaming_option`<sup>Optional</sup> <a name="log_streaming_option" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putOptions.parameter.logStreamingOption"></a>

- *Type:* str

Option to define build log streaming behavior to Google Cloud Storage. Possible values: ["STREAM_DEFAULT", "STREAM_ON", "STREAM_OFF"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#log_streaming_option CloudbuildTrigger#log_streaming_option}

---

###### `machine_type`<sup>Optional</sup> <a name="machine_type" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putOptions.parameter.machineType"></a>

- *Type:* str

Compute Engine machine type on which to run the build. Possible values: ["UNSPECIFIED", "N1_HIGHCPU_8", "N1_HIGHCPU_32", "E2_HIGHCPU_8", "E2_HIGHCPU_32"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#machine_type CloudbuildTrigger#machine_type}

---

###### `requested_verify_option`<sup>Optional</sup> <a name="requested_verify_option" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putOptions.parameter.requestedVerifyOption"></a>

- *Type:* str

Requested verifiability options. Possible values: ["NOT_VERIFIED", "VERIFIED"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#requested_verify_option CloudbuildTrigger#requested_verify_option}

---

###### `secret_env`<sup>Optional</sup> <a name="secret_env" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putOptions.parameter.secretEnv"></a>

- *Type:* typing.List[str]

A list of global environment variables, which are encrypted using a Cloud Key Management Service crypto key.

These values must be specified in the build's Secret. These variables
will be available to all build steps in this build.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#secret_env CloudbuildTrigger#secret_env}

---

###### `source_provenance_hash`<sup>Optional</sup> <a name="source_provenance_hash" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putOptions.parameter.sourceProvenanceHash"></a>

- *Type:* typing.List[str]

Requested hash for SourceProvenance. Possible values: ["NONE", "SHA256", "MD5"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#source_provenance_hash CloudbuildTrigger#source_provenance_hash}

---

###### `substitution_option`<sup>Optional</sup> <a name="substitution_option" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putOptions.parameter.substitutionOption"></a>

- *Type:* str

Option to specify behavior when there is an error in the substitution checks.

NOTE this is always set to ALLOW_LOOSE for triggered builds and cannot be overridden
in the build configuration file. Possible values: ["MUST_MATCH", "ALLOW_LOOSE"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#substitution_option CloudbuildTrigger#substitution_option}

---

###### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putOptions.parameter.volumes"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumes">CloudbuildTriggerBuildOptionsVolumes</a>]]

volumes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#volumes CloudbuildTrigger#volumes}

---

###### `worker_pool`<sup>Optional</sup> <a name="worker_pool" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putOptions.parameter.workerPool"></a>

- *Type:* str

Option to specify a WorkerPool for the build. Format projects/{project}/workerPools/{workerPool}.

This field is experimental.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#worker_pool CloudbuildTrigger#worker_pool}

---

##### `put_secret` <a name="put_secret" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putSecret"></a>

```python
def put_secret(
  value: typing.Union[IResolvable, typing.List[CloudbuildTriggerBuildSecret]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putSecret.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecret">CloudbuildTriggerBuildSecret</a>]]

---

##### `put_source` <a name="put_source" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putSource"></a>

```python
def put_source(
  repo_source: CloudbuildTriggerBuildSourceRepoSource = None,
  storage_source: CloudbuildTriggerBuildSourceStorageSource = None
) -> None
```

###### `repo_source`<sup>Optional</sup> <a name="repo_source" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putSource.parameter.repoSource"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource">CloudbuildTriggerBuildSourceRepoSource</a>

repo_source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#repo_source CloudbuildTrigger#repo_source}

---

###### `storage_source`<sup>Optional</sup> <a name="storage_source" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putSource.parameter.storageSource"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource">CloudbuildTriggerBuildSourceStorageSource</a>

storage_source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#storage_source CloudbuildTrigger#storage_source}

---

##### `put_step` <a name="put_step" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putStep"></a>

```python
def put_step(
  value: typing.Union[IResolvable, typing.List[CloudbuildTriggerBuildStep]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putStep.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep">CloudbuildTriggerBuildStep</a>]]

---

##### `reset_artifacts` <a name="reset_artifacts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetArtifacts"></a>

```python
def reset_artifacts() -> None
```

##### `reset_available_secrets` <a name="reset_available_secrets" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetAvailableSecrets"></a>

```python
def reset_available_secrets() -> None
```

##### `reset_images` <a name="reset_images" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetImages"></a>

```python
def reset_images() -> None
```

##### `reset_logs_bucket` <a name="reset_logs_bucket" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetLogsBucket"></a>

```python
def reset_logs_bucket() -> None
```

##### `reset_options` <a name="reset_options" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetOptions"></a>

```python
def reset_options() -> None
```

##### `reset_queue_ttl` <a name="reset_queue_ttl" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetQueueTtl"></a>

```python
def reset_queue_ttl() -> None
```

##### `reset_secret` <a name="reset_secret" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetSecret"></a>

```python
def reset_secret() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_substitutions` <a name="reset_substitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetSubstitutions"></a>

```python
def reset_substitutions() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.artifacts">artifacts</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference">CloudbuildTriggerBuildArtifactsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.availableSecrets">available_secrets</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference">CloudbuildTriggerBuildAvailableSecretsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.options">options</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference">CloudbuildTriggerBuildOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList">CloudbuildTriggerBuildSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.source">source</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference">CloudbuildTriggerBuildSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.step">step</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList">CloudbuildTriggerBuildStepList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.artifactsInput">artifacts_input</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts">CloudbuildTriggerBuildArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.availableSecretsInput">available_secrets_input</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecrets">CloudbuildTriggerBuildAvailableSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.imagesInput">images_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.logsBucketInput">logs_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.optionsInput">options_input</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions">CloudbuildTriggerBuildOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.queueTtlInput">queue_ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.secretInput">secret_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecret">CloudbuildTriggerBuildSecret</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.sourceInput">source_input</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource">CloudbuildTriggerBuildSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.stepInput">step_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep">CloudbuildTriggerBuildStep</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.substitutionsInput">substitutions_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.timeoutInput">timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.images">images</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.logsBucket">logs_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.queueTtl">queue_ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.substitutions">substitutions</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.timeout">timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild">CloudbuildTriggerBuild</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `artifacts`<sup>Required</sup> <a name="artifacts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.artifacts"></a>

```python
artifacts: CloudbuildTriggerBuildArtifactsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference">CloudbuildTriggerBuildArtifactsOutputReference</a>

---

##### `available_secrets`<sup>Required</sup> <a name="available_secrets" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.availableSecrets"></a>

```python
available_secrets: CloudbuildTriggerBuildAvailableSecretsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference">CloudbuildTriggerBuildAvailableSecretsOutputReference</a>

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.options"></a>

```python
options: CloudbuildTriggerBuildOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference">CloudbuildTriggerBuildOptionsOutputReference</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.secret"></a>

```python
secret: CloudbuildTriggerBuildSecretList
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList">CloudbuildTriggerBuildSecretList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.source"></a>

```python
source: CloudbuildTriggerBuildSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference">CloudbuildTriggerBuildSourceOutputReference</a>

---

##### `step`<sup>Required</sup> <a name="step" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.step"></a>

```python
step: CloudbuildTriggerBuildStepList
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList">CloudbuildTriggerBuildStepList</a>

---

##### `artifacts_input`<sup>Optional</sup> <a name="artifacts_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.artifactsInput"></a>

```python
artifacts_input: CloudbuildTriggerBuildArtifacts
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts">CloudbuildTriggerBuildArtifacts</a>

---

##### `available_secrets_input`<sup>Optional</sup> <a name="available_secrets_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.availableSecretsInput"></a>

```python
available_secrets_input: CloudbuildTriggerBuildAvailableSecrets
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecrets">CloudbuildTriggerBuildAvailableSecrets</a>

---

##### `images_input`<sup>Optional</sup> <a name="images_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.imagesInput"></a>

```python
images_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `logs_bucket_input`<sup>Optional</sup> <a name="logs_bucket_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.logsBucketInput"></a>

```python
logs_bucket_input: str
```

- *Type:* str

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.optionsInput"></a>

```python
options_input: CloudbuildTriggerBuildOptions
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions">CloudbuildTriggerBuildOptions</a>

---

##### `queue_ttl_input`<sup>Optional</sup> <a name="queue_ttl_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.queueTtlInput"></a>

```python
queue_ttl_input: str
```

- *Type:* str

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.secretInput"></a>

```python
secret_input: typing.Union[IResolvable, typing.List[CloudbuildTriggerBuildSecret]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecret">CloudbuildTriggerBuildSecret</a>]]

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.sourceInput"></a>

```python
source_input: CloudbuildTriggerBuildSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource">CloudbuildTriggerBuildSource</a>

---

##### `step_input`<sup>Optional</sup> <a name="step_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.stepInput"></a>

```python
step_input: typing.Union[IResolvable, typing.List[CloudbuildTriggerBuildStep]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep">CloudbuildTriggerBuildStep</a>]]

---

##### `substitutions_input`<sup>Optional</sup> <a name="substitutions_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.substitutionsInput"></a>

```python
substitutions_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.timeoutInput"></a>

```python
timeout_input: str
```

- *Type:* str

---

##### `images`<sup>Required</sup> <a name="images" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.images"></a>

```python
images: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `logs_bucket`<sup>Required</sup> <a name="logs_bucket" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.logsBucket"></a>

```python
logs_bucket: str
```

- *Type:* str

---

##### `queue_ttl`<sup>Required</sup> <a name="queue_ttl" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.queueTtl"></a>

```python
queue_ttl: str
```

- *Type:* str

---

##### `substitutions`<sup>Required</sup> <a name="substitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.substitutions"></a>

```python
substitutions: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.internalValue"></a>

```python
internal_value: CloudbuildTriggerBuild
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild">CloudbuildTriggerBuild</a>

---


### CloudbuildTriggerBuildSecretList <a name="CloudbuildTriggerBuildSecretList" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerBuildSecretList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudbuildTriggerBuildSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecret">CloudbuildTriggerBuildSecret</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudbuildTriggerBuildSecret]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecret">CloudbuildTriggerBuildSecret</a>]]

---


### CloudbuildTriggerBuildSecretOutputReference <a name="CloudbuildTriggerBuildSecretOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.resetSecretEnv">reset_secret_env</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_secret_env` <a name="reset_secret_env" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.resetSecretEnv"></a>

```python
def reset_secret_env() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.secretEnvInput">secret_env_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.secretEnv">secret_env</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecret">CloudbuildTriggerBuildSecret</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `secret_env_input`<sup>Optional</sup> <a name="secret_env_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.secretEnvInput"></a>

```python
secret_env_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `secret_env`<sup>Required</sup> <a name="secret_env" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.secretEnv"></a>

```python
secret_env: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudbuildTriggerBuildSecret, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecret">CloudbuildTriggerBuildSecret</a>, cdktf.IResolvable]

---


### CloudbuildTriggerBuildSourceOutputReference <a name="CloudbuildTriggerBuildSourceOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.putRepoSource">put_repo_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.putStorageSource">put_storage_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.resetRepoSource">reset_repo_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.resetStorageSource">reset_storage_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_repo_source` <a name="put_repo_source" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.putRepoSource"></a>

```python
def put_repo_source(
  repo_name: str,
  branch_name: str = None,
  commit_sha: str = None,
  dir: str = None,
  invert_regex: typing.Union[bool, IResolvable] = None,
  project_id: str = None,
  substitutions: typing.Mapping[str] = None,
  tag_name: str = None
) -> None
```

###### `repo_name`<sup>Required</sup> <a name="repo_name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.putRepoSource.parameter.repoName"></a>

- *Type:* str

Name of the Cloud Source Repository.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#repo_name CloudbuildTrigger#repo_name}

---

###### `branch_name`<sup>Optional</sup> <a name="branch_name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.putRepoSource.parameter.branchName"></a>

- *Type:* str

Regex matching branches to build.

Exactly one a of branch name, tag, or commit SHA must be provided.
The syntax of the regular expressions accepted is the syntax accepted by RE2 and
described at https://github.com/google/re2/wiki/Syntax

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#branch_name CloudbuildTrigger#branch_name}

---

###### `commit_sha`<sup>Optional</sup> <a name="commit_sha" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.putRepoSource.parameter.commitSha"></a>

- *Type:* str

Explicit commit SHA to build. Exactly one a of branch name, tag, or commit SHA must be provided.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#commit_sha CloudbuildTrigger#commit_sha}

---

###### `dir`<sup>Optional</sup> <a name="dir" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.putRepoSource.parameter.dir"></a>

- *Type:* str

Directory, relative to the source root, in which to run the build.

This must be a relative path. If a step's dir is specified and is an absolute path,
this value is ignored for that step's execution.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#dir CloudbuildTrigger#dir}

---

###### `invert_regex`<sup>Optional</sup> <a name="invert_regex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.putRepoSource.parameter.invertRegex"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Only trigger a build if the revision regex does NOT match the revision regex.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#invert_regex CloudbuildTrigger#invert_regex}

---

###### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.putRepoSource.parameter.projectId"></a>

- *Type:* str

ID of the project that owns the Cloud Source Repository.

If omitted, the project ID requesting the build is assumed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#project_id CloudbuildTrigger#project_id}

---

###### `substitutions`<sup>Optional</sup> <a name="substitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.putRepoSource.parameter.substitutions"></a>

- *Type:* typing.Mapping[str]

Substitutions to use in a triggered build. Should only be used with triggers.run.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#substitutions CloudbuildTrigger#substitutions}

---

###### `tag_name`<sup>Optional</sup> <a name="tag_name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.putRepoSource.parameter.tagName"></a>

- *Type:* str

Regex matching tags to build.

Exactly one a of branch name, tag, or commit SHA must be provided.
The syntax of the regular expressions accepted is the syntax accepted by RE2 and
described at https://github.com/google/re2/wiki/Syntax

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#tag_name CloudbuildTrigger#tag_name}

---

##### `put_storage_source` <a name="put_storage_source" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.putStorageSource"></a>

```python
def put_storage_source(
  bucket: str,
  object: str,
  generation: str = None
) -> None
```

###### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.putStorageSource.parameter.bucket"></a>

- *Type:* str

Google Cloud Storage bucket containing the source.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#bucket CloudbuildTrigger#bucket}

---

###### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.putStorageSource.parameter.object"></a>

- *Type:* str

Google Cloud Storage object containing the source. This object must be a gzipped archive file (.tar.gz) containing source to build.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#object CloudbuildTrigger#object}

---

###### `generation`<sup>Optional</sup> <a name="generation" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.putStorageSource.parameter.generation"></a>

- *Type:* str

Google Cloud Storage generation for the object.  If the generation is omitted, the latest generation will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#generation CloudbuildTrigger#generation}

---

##### `reset_repo_source` <a name="reset_repo_source" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.resetRepoSource"></a>

```python
def reset_repo_source() -> None
```

##### `reset_storage_source` <a name="reset_storage_source" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.resetStorageSource"></a>

```python
def reset_storage_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.repoSource">repo_source</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference">CloudbuildTriggerBuildSourceRepoSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.storageSource">storage_source</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference">CloudbuildTriggerBuildSourceStorageSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.repoSourceInput">repo_source_input</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource">CloudbuildTriggerBuildSourceRepoSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.storageSourceInput">storage_source_input</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource">CloudbuildTriggerBuildSourceStorageSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource">CloudbuildTriggerBuildSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `repo_source`<sup>Required</sup> <a name="repo_source" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.repoSource"></a>

```python
repo_source: CloudbuildTriggerBuildSourceRepoSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference">CloudbuildTriggerBuildSourceRepoSourceOutputReference</a>

---

##### `storage_source`<sup>Required</sup> <a name="storage_source" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.storageSource"></a>

```python
storage_source: CloudbuildTriggerBuildSourceStorageSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference">CloudbuildTriggerBuildSourceStorageSourceOutputReference</a>

---

##### `repo_source_input`<sup>Optional</sup> <a name="repo_source_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.repoSourceInput"></a>

```python
repo_source_input: CloudbuildTriggerBuildSourceRepoSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource">CloudbuildTriggerBuildSourceRepoSource</a>

---

##### `storage_source_input`<sup>Optional</sup> <a name="storage_source_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.storageSourceInput"></a>

```python
storage_source_input: CloudbuildTriggerBuildSourceStorageSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource">CloudbuildTriggerBuildSourceStorageSource</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.internalValue"></a>

```python
internal_value: CloudbuildTriggerBuildSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource">CloudbuildTriggerBuildSource</a>

---


### CloudbuildTriggerBuildSourceRepoSourceOutputReference <a name="CloudbuildTriggerBuildSourceRepoSourceOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetBranchName">reset_branch_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetCommitSha">reset_commit_sha</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetDir">reset_dir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetInvertRegex">reset_invert_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetSubstitutions">reset_substitutions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetTagName">reset_tag_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_branch_name` <a name="reset_branch_name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetBranchName"></a>

```python
def reset_branch_name() -> None
```

##### `reset_commit_sha` <a name="reset_commit_sha" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetCommitSha"></a>

```python
def reset_commit_sha() -> None
```

##### `reset_dir` <a name="reset_dir" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetDir"></a>

```python
def reset_dir() -> None
```

##### `reset_invert_regex` <a name="reset_invert_regex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetInvertRegex"></a>

```python
def reset_invert_regex() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_substitutions` <a name="reset_substitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetSubstitutions"></a>

```python
def reset_substitutions() -> None
```

##### `reset_tag_name` <a name="reset_tag_name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetTagName"></a>

```python
def reset_tag_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.branchNameInput">branch_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.commitShaInput">commit_sha_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.dirInput">dir_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.invertRegexInput">invert_regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.repoNameInput">repo_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.substitutionsInput">substitutions_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.tagNameInput">tag_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.branchName">branch_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.commitSha">commit_sha</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.dir">dir</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.invertRegex">invert_regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.repoName">repo_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.substitutions">substitutions</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.tagName">tag_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource">CloudbuildTriggerBuildSourceRepoSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `branch_name_input`<sup>Optional</sup> <a name="branch_name_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.branchNameInput"></a>

```python
branch_name_input: str
```

- *Type:* str

---

##### `commit_sha_input`<sup>Optional</sup> <a name="commit_sha_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.commitShaInput"></a>

```python
commit_sha_input: str
```

- *Type:* str

---

##### `dir_input`<sup>Optional</sup> <a name="dir_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.dirInput"></a>

```python
dir_input: str
```

- *Type:* str

---

##### `invert_regex_input`<sup>Optional</sup> <a name="invert_regex_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.invertRegexInput"></a>

```python
invert_regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `repo_name_input`<sup>Optional</sup> <a name="repo_name_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.repoNameInput"></a>

```python
repo_name_input: str
```

- *Type:* str

---

##### `substitutions_input`<sup>Optional</sup> <a name="substitutions_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.substitutionsInput"></a>

```python
substitutions_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tag_name_input`<sup>Optional</sup> <a name="tag_name_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.tagNameInput"></a>

```python
tag_name_input: str
```

- *Type:* str

---

##### `branch_name`<sup>Required</sup> <a name="branch_name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.branchName"></a>

```python
branch_name: str
```

- *Type:* str

---

##### `commit_sha`<sup>Required</sup> <a name="commit_sha" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.commitSha"></a>

```python
commit_sha: str
```

- *Type:* str

---

##### `dir`<sup>Required</sup> <a name="dir" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.dir"></a>

```python
dir: str
```

- *Type:* str

---

##### `invert_regex`<sup>Required</sup> <a name="invert_regex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.invertRegex"></a>

```python
invert_regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `repo_name`<sup>Required</sup> <a name="repo_name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.repoName"></a>

```python
repo_name: str
```

- *Type:* str

---

##### `substitutions`<sup>Required</sup> <a name="substitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.substitutions"></a>

```python
substitutions: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tag_name`<sup>Required</sup> <a name="tag_name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.tagName"></a>

```python
tag_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.internalValue"></a>

```python
internal_value: CloudbuildTriggerBuildSourceRepoSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource">CloudbuildTriggerBuildSourceRepoSource</a>

---


### CloudbuildTriggerBuildSourceStorageSourceOutputReference <a name="CloudbuildTriggerBuildSourceStorageSourceOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.resetGeneration">reset_generation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_generation` <a name="reset_generation" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.resetGeneration"></a>

```python
def reset_generation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.generationInput">generation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.objectInput">object_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.generation">generation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource">CloudbuildTriggerBuildSourceStorageSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `generation_input`<sup>Optional</sup> <a name="generation_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.generationInput"></a>

```python
generation_input: str
```

- *Type:* str

---

##### `object_input`<sup>Optional</sup> <a name="object_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.objectInput"></a>

```python
object_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.generation"></a>

```python
generation: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.internalValue"></a>

```python
internal_value: CloudbuildTriggerBuildSourceStorageSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource">CloudbuildTriggerBuildSourceStorageSource</a>

---


### CloudbuildTriggerBuildStepList <a name="CloudbuildTriggerBuildStepList" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerBuildStepList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudbuildTriggerBuildStepOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep">CloudbuildTriggerBuildStep</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudbuildTriggerBuildStep]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep">CloudbuildTriggerBuildStep</a>]]

---


### CloudbuildTriggerBuildStepOutputReference <a name="CloudbuildTriggerBuildStepOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.putVolumes">put_volumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetArgs">reset_args</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetDir">reset_dir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetEntrypoint">reset_entrypoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetEnv">reset_env</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetScript">reset_script</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetSecretEnv">reset_secret_env</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetTiming">reset_timing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetVolumes">reset_volumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetWaitFor">reset_wait_for</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_volumes` <a name="put_volumes" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.putVolumes"></a>

```python
def put_volumes(
  value: typing.Union[IResolvable, typing.List[CloudbuildTriggerBuildStepVolumes]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.putVolumes.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumes">CloudbuildTriggerBuildStepVolumes</a>]]

---

##### `reset_args` <a name="reset_args" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetArgs"></a>

```python
def reset_args() -> None
```

##### `reset_dir` <a name="reset_dir" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetDir"></a>

```python
def reset_dir() -> None
```

##### `reset_entrypoint` <a name="reset_entrypoint" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetEntrypoint"></a>

```python
def reset_entrypoint() -> None
```

##### `reset_env` <a name="reset_env" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetEnv"></a>

```python
def reset_env() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_script` <a name="reset_script" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetScript"></a>

```python
def reset_script() -> None
```

##### `reset_secret_env` <a name="reset_secret_env" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetSecretEnv"></a>

```python
def reset_secret_env() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```

##### `reset_timing` <a name="reset_timing" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetTiming"></a>

```python
def reset_timing() -> None
```

##### `reset_volumes` <a name="reset_volumes" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetVolumes"></a>

```python
def reset_volumes() -> None
```

##### `reset_wait_for` <a name="reset_wait_for" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetWaitFor"></a>

```python
def reset_wait_for() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.volumes">volumes</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList">CloudbuildTriggerBuildStepVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.argsInput">args_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.dirInput">dir_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.entrypointInput">entrypoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.envInput">env_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.scriptInput">script_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.secretEnvInput">secret_env_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.timeoutInput">timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.timingInput">timing_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.volumesInput">volumes_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumes">CloudbuildTriggerBuildStepVolumes</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.waitForInput">wait_for_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.args">args</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.dir">dir</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.entrypoint">entrypoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.env">env</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.script">script</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.secretEnv">secret_env</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.timeout">timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.timing">timing</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.waitFor">wait_for</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep">CloudbuildTriggerBuildStep</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.volumes"></a>

```python
volumes: CloudbuildTriggerBuildStepVolumesList
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList">CloudbuildTriggerBuildStepVolumesList</a>

---

##### `args_input`<sup>Optional</sup> <a name="args_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.argsInput"></a>

```python
args_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dir_input`<sup>Optional</sup> <a name="dir_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.dirInput"></a>

```python
dir_input: str
```

- *Type:* str

---

##### `entrypoint_input`<sup>Optional</sup> <a name="entrypoint_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.entrypointInput"></a>

```python
entrypoint_input: str
```

- *Type:* str

---

##### `env_input`<sup>Optional</sup> <a name="env_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.envInput"></a>

```python
env_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `script_input`<sup>Optional</sup> <a name="script_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.scriptInput"></a>

```python
script_input: str
```

- *Type:* str

---

##### `secret_env_input`<sup>Optional</sup> <a name="secret_env_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.secretEnvInput"></a>

```python
secret_env_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.timeoutInput"></a>

```python
timeout_input: str
```

- *Type:* str

---

##### `timing_input`<sup>Optional</sup> <a name="timing_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.timingInput"></a>

```python
timing_input: str
```

- *Type:* str

---

##### `volumes_input`<sup>Optional</sup> <a name="volumes_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.volumesInput"></a>

```python
volumes_input: typing.Union[IResolvable, typing.List[CloudbuildTriggerBuildStepVolumes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumes">CloudbuildTriggerBuildStepVolumes</a>]]

---

##### `wait_for_input`<sup>Optional</sup> <a name="wait_for_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.waitForInput"></a>

```python
wait_for_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dir`<sup>Required</sup> <a name="dir" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.dir"></a>

```python
dir: str
```

- *Type:* str

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.entrypoint"></a>

```python
entrypoint: str
```

- *Type:* str

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.env"></a>

```python
env: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.script"></a>

```python
script: str
```

- *Type:* str

---

##### `secret_env`<sup>Required</sup> <a name="secret_env" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.secretEnv"></a>

```python
secret_env: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

---

##### `timing`<sup>Required</sup> <a name="timing" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.timing"></a>

```python
timing: str
```

- *Type:* str

---

##### `wait_for`<sup>Required</sup> <a name="wait_for" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.waitFor"></a>

```python
wait_for: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudbuildTriggerBuildStep, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep">CloudbuildTriggerBuildStep</a>, cdktf.IResolvable]

---


### CloudbuildTriggerBuildStepVolumesList <a name="CloudbuildTriggerBuildStepVolumesList" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudbuildTriggerBuildStepVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumes">CloudbuildTriggerBuildStepVolumes</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudbuildTriggerBuildStepVolumes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumes">CloudbuildTriggerBuildStepVolumes</a>]]

---


### CloudbuildTriggerBuildStepVolumesOutputReference <a name="CloudbuildTriggerBuildStepVolumesOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumes">CloudbuildTriggerBuildStepVolumes</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudbuildTriggerBuildStepVolumes, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumes">CloudbuildTriggerBuildStepVolumes</a>, cdktf.IResolvable]

---


### CloudbuildTriggerGitFileSourceOutputReference <a name="CloudbuildTriggerGitFileSourceOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.resetGithubEnterpriseConfig">reset_github_enterprise_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.resetRevision">reset_revision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.resetUri">reset_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_github_enterprise_config` <a name="reset_github_enterprise_config" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.resetGithubEnterpriseConfig"></a>

```python
def reset_github_enterprise_config() -> None
```

##### `reset_revision` <a name="reset_revision" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.resetRevision"></a>

```python
def reset_revision() -> None
```

##### `reset_uri` <a name="reset_uri" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.resetUri"></a>

```python
def reset_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.githubEnterpriseConfigInput">github_enterprise_config_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.repoTypeInput">repo_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.revisionInput">revision_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.githubEnterpriseConfig">github_enterprise_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.repoType">repo_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.revision">revision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource">CloudbuildTriggerGitFileSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `github_enterprise_config_input`<sup>Optional</sup> <a name="github_enterprise_config_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.githubEnterpriseConfigInput"></a>

```python
github_enterprise_config_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `repo_type_input`<sup>Optional</sup> <a name="repo_type_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.repoTypeInput"></a>

```python
repo_type_input: str
```

- *Type:* str

---

##### `revision_input`<sup>Optional</sup> <a name="revision_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.revisionInput"></a>

```python
revision_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `github_enterprise_config`<sup>Required</sup> <a name="github_enterprise_config" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.githubEnterpriseConfig"></a>

```python
github_enterprise_config: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `repo_type`<sup>Required</sup> <a name="repo_type" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.repoType"></a>

```python
repo_type: str
```

- *Type:* str

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.revision"></a>

```python
revision: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.internalValue"></a>

```python
internal_value: CloudbuildTriggerGitFileSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource">CloudbuildTriggerGitFileSource</a>

---


### CloudbuildTriggerGithubOutputReference <a name="CloudbuildTriggerGithubOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerGithubOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.putPullRequest">put_pull_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.putPush">put_push</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resetOwner">reset_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resetPullRequest">reset_pull_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resetPush">reset_push</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_pull_request` <a name="put_pull_request" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.putPullRequest"></a>

```python
def put_pull_request(
  branch: str,
  comment_control: str = None,
  invert_regex: typing.Union[bool, IResolvable] = None
) -> None
```

###### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.putPullRequest.parameter.branch"></a>

- *Type:* str

Regex of branches to match.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#branch CloudbuildTrigger#branch}

---

###### `comment_control`<sup>Optional</sup> <a name="comment_control" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.putPullRequest.parameter.commentControl"></a>

- *Type:* str

Whether to block builds on a "/gcbrun" comment from a repository owner or collaborator. Possible values: ["COMMENTS_DISABLED", "COMMENTS_ENABLED", "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#comment_control CloudbuildTrigger#comment_control}

---

###### `invert_regex`<sup>Optional</sup> <a name="invert_regex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.putPullRequest.parameter.invertRegex"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, branches that do NOT match the git_ref will trigger a build.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#invert_regex CloudbuildTrigger#invert_regex}

---

##### `put_push` <a name="put_push" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.putPush"></a>

```python
def put_push(
  branch: str = None,
  invert_regex: typing.Union[bool, IResolvable] = None,
  tag: str = None
) -> None
```

###### `branch`<sup>Optional</sup> <a name="branch" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.putPush.parameter.branch"></a>

- *Type:* str

Regex of branches to match.  Specify only one of branch or tag.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#branch CloudbuildTrigger#branch}

---

###### `invert_regex`<sup>Optional</sup> <a name="invert_regex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.putPush.parameter.invertRegex"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, only trigger a build if the revision regex does NOT match the git_ref regex.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#invert_regex CloudbuildTrigger#invert_regex}

---

###### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.putPush.parameter.tag"></a>

- *Type:* str

Regex of tags to match.  Specify only one of branch or tag.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger#tag CloudbuildTrigger#tag}

---

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_owner` <a name="reset_owner" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resetOwner"></a>

```python
def reset_owner() -> None
```

##### `reset_pull_request` <a name="reset_pull_request" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resetPullRequest"></a>

```python
def reset_pull_request() -> None
```

##### `reset_push` <a name="reset_push" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resetPush"></a>

```python
def reset_push() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.pullRequest">pull_request</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference">CloudbuildTriggerGithubPullRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.push">push</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference">CloudbuildTriggerGithubPushOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.pullRequestInput">pull_request_input</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest">CloudbuildTriggerGithubPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.pushInput">push_input</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush">CloudbuildTriggerGithubPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub">CloudbuildTriggerGithub</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pull_request`<sup>Required</sup> <a name="pull_request" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.pullRequest"></a>

```python
pull_request: CloudbuildTriggerGithubPullRequestOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference">CloudbuildTriggerGithubPullRequestOutputReference</a>

---

##### `push`<sup>Required</sup> <a name="push" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.push"></a>

```python
push: CloudbuildTriggerGithubPushOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference">CloudbuildTriggerGithubPushOutputReference</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `pull_request_input`<sup>Optional</sup> <a name="pull_request_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.pullRequestInput"></a>

```python
pull_request_input: CloudbuildTriggerGithubPullRequest
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest">CloudbuildTriggerGithubPullRequest</a>

---

##### `push_input`<sup>Optional</sup> <a name="push_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.pushInput"></a>

```python
push_input: CloudbuildTriggerGithubPush
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush">CloudbuildTriggerGithubPush</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.internalValue"></a>

```python
internal_value: CloudbuildTriggerGithub
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub">CloudbuildTriggerGithub</a>

---


### CloudbuildTriggerGithubPullRequestOutputReference <a name="CloudbuildTriggerGithubPullRequestOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.resetCommentControl">reset_comment_control</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.resetInvertRegex">reset_invert_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_comment_control` <a name="reset_comment_control" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.resetCommentControl"></a>

```python
def reset_comment_control() -> None
```

##### `reset_invert_regex` <a name="reset_invert_regex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.resetInvertRegex"></a>

```python
def reset_invert_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.branchInput">branch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.commentControlInput">comment_control_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.invertRegexInput">invert_regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.branch">branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.commentControl">comment_control</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.invertRegex">invert_regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest">CloudbuildTriggerGithubPullRequest</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `branch_input`<sup>Optional</sup> <a name="branch_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.branchInput"></a>

```python
branch_input: str
```

- *Type:* str

---

##### `comment_control_input`<sup>Optional</sup> <a name="comment_control_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.commentControlInput"></a>

```python
comment_control_input: str
```

- *Type:* str

---

##### `invert_regex_input`<sup>Optional</sup> <a name="invert_regex_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.invertRegexInput"></a>

```python
invert_regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.branch"></a>

```python
branch: str
```

- *Type:* str

---

##### `comment_control`<sup>Required</sup> <a name="comment_control" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.commentControl"></a>

```python
comment_control: str
```

- *Type:* str

---

##### `invert_regex`<sup>Required</sup> <a name="invert_regex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.invertRegex"></a>

```python
invert_regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.internalValue"></a>

```python
internal_value: CloudbuildTriggerGithubPullRequest
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest">CloudbuildTriggerGithubPullRequest</a>

---


### CloudbuildTriggerGithubPushOutputReference <a name="CloudbuildTriggerGithubPushOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.resetBranch">reset_branch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.resetInvertRegex">reset_invert_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.resetTag">reset_tag</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_branch` <a name="reset_branch" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.resetBranch"></a>

```python
def reset_branch() -> None
```

##### `reset_invert_regex` <a name="reset_invert_regex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.resetInvertRegex"></a>

```python
def reset_invert_regex() -> None
```

##### `reset_tag` <a name="reset_tag" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.resetTag"></a>

```python
def reset_tag() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.branchInput">branch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.invertRegexInput">invert_regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.tagInput">tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.branch">branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.invertRegex">invert_regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.tag">tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush">CloudbuildTriggerGithubPush</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `branch_input`<sup>Optional</sup> <a name="branch_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.branchInput"></a>

```python
branch_input: str
```

- *Type:* str

---

##### `invert_regex_input`<sup>Optional</sup> <a name="invert_regex_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.invertRegexInput"></a>

```python
invert_regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.tagInput"></a>

```python
tag_input: str
```

- *Type:* str

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.branch"></a>

```python
branch: str
```

- *Type:* str

---

##### `invert_regex`<sup>Required</sup> <a name="invert_regex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.invertRegex"></a>

```python
invert_regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.tag"></a>

```python
tag: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.internalValue"></a>

```python
internal_value: CloudbuildTriggerGithubPush
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush">CloudbuildTriggerGithubPush</a>

---


### CloudbuildTriggerPubsubConfigOutputReference <a name="CloudbuildTriggerPubsubConfigOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.resetServiceAccountEmail">reset_service_account_email</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_service_account_email` <a name="reset_service_account_email" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.resetServiceAccountEmail"></a>

```python
def reset_service_account_email() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.subscription">subscription</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.serviceAccountEmailInput">service_account_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.topicInput">topic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.topic">topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig">CloudbuildTriggerPubsubConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subscription`<sup>Required</sup> <a name="subscription" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.subscription"></a>

```python
subscription: str
```

- *Type:* str

---

##### `service_account_email_input`<sup>Optional</sup> <a name="service_account_email_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.serviceAccountEmailInput"></a>

```python
service_account_email_input: str
```

- *Type:* str

---

##### `topic_input`<sup>Optional</sup> <a name="topic_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.topicInput"></a>

```python
topic_input: str
```

- *Type:* str

---

##### `service_account_email`<sup>Required</sup> <a name="service_account_email" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.topic"></a>

```python
topic: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.internalValue"></a>

```python
internal_value: CloudbuildTriggerPubsubConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig">CloudbuildTriggerPubsubConfig</a>

---


### CloudbuildTriggerSourceToBuildOutputReference <a name="CloudbuildTriggerSourceToBuildOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.resetGithubEnterpriseConfig">reset_github_enterprise_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_github_enterprise_config` <a name="reset_github_enterprise_config" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.resetGithubEnterpriseConfig"></a>

```python
def reset_github_enterprise_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.githubEnterpriseConfigInput">github_enterprise_config_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.refInput">ref_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.repoTypeInput">repo_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.githubEnterpriseConfig">github_enterprise_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.repoType">repo_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild">CloudbuildTriggerSourceToBuild</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `github_enterprise_config_input`<sup>Optional</sup> <a name="github_enterprise_config_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.githubEnterpriseConfigInput"></a>

```python
github_enterprise_config_input: str
```

- *Type:* str

---

##### `ref_input`<sup>Optional</sup> <a name="ref_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.refInput"></a>

```python
ref_input: str
```

- *Type:* str

---

##### `repo_type_input`<sup>Optional</sup> <a name="repo_type_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.repoTypeInput"></a>

```python
repo_type_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `github_enterprise_config`<sup>Required</sup> <a name="github_enterprise_config" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.githubEnterpriseConfig"></a>

```python
github_enterprise_config: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `repo_type`<sup>Required</sup> <a name="repo_type" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.repoType"></a>

```python
repo_type: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.internalValue"></a>

```python
internal_value: CloudbuildTriggerSourceToBuild
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild">CloudbuildTriggerSourceToBuild</a>

---


### CloudbuildTriggerTimeoutsOutputReference <a name="CloudbuildTriggerTimeoutsOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts">CloudbuildTriggerTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudbuildTriggerTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts">CloudbuildTriggerTimeouts</a>, cdktf.IResolvable]

---


### CloudbuildTriggerTriggerTemplateOutputReference <a name="CloudbuildTriggerTriggerTemplateOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetBranchName">reset_branch_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetCommitSha">reset_commit_sha</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetDir">reset_dir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetInvertRegex">reset_invert_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetRepoName">reset_repo_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetTagName">reset_tag_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_branch_name` <a name="reset_branch_name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetBranchName"></a>

```python
def reset_branch_name() -> None
```

##### `reset_commit_sha` <a name="reset_commit_sha" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetCommitSha"></a>

```python
def reset_commit_sha() -> None
```

##### `reset_dir` <a name="reset_dir" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetDir"></a>

```python
def reset_dir() -> None
```

##### `reset_invert_regex` <a name="reset_invert_regex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetInvertRegex"></a>

```python
def reset_invert_regex() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_repo_name` <a name="reset_repo_name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetRepoName"></a>

```python
def reset_repo_name() -> None
```

##### `reset_tag_name` <a name="reset_tag_name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetTagName"></a>

```python
def reset_tag_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.branchNameInput">branch_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.commitShaInput">commit_sha_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.dirInput">dir_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.invertRegexInput">invert_regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.repoNameInput">repo_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.tagNameInput">tag_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.branchName">branch_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.commitSha">commit_sha</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.dir">dir</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.invertRegex">invert_regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.repoName">repo_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.tagName">tag_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate">CloudbuildTriggerTriggerTemplate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `branch_name_input`<sup>Optional</sup> <a name="branch_name_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.branchNameInput"></a>

```python
branch_name_input: str
```

- *Type:* str

---

##### `commit_sha_input`<sup>Optional</sup> <a name="commit_sha_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.commitShaInput"></a>

```python
commit_sha_input: str
```

- *Type:* str

---

##### `dir_input`<sup>Optional</sup> <a name="dir_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.dirInput"></a>

```python
dir_input: str
```

- *Type:* str

---

##### `invert_regex_input`<sup>Optional</sup> <a name="invert_regex_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.invertRegexInput"></a>

```python
invert_regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `repo_name_input`<sup>Optional</sup> <a name="repo_name_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.repoNameInput"></a>

```python
repo_name_input: str
```

- *Type:* str

---

##### `tag_name_input`<sup>Optional</sup> <a name="tag_name_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.tagNameInput"></a>

```python
tag_name_input: str
```

- *Type:* str

---

##### `branch_name`<sup>Required</sup> <a name="branch_name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.branchName"></a>

```python
branch_name: str
```

- *Type:* str

---

##### `commit_sha`<sup>Required</sup> <a name="commit_sha" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.commitSha"></a>

```python
commit_sha: str
```

- *Type:* str

---

##### `dir`<sup>Required</sup> <a name="dir" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.dir"></a>

```python
dir: str
```

- *Type:* str

---

##### `invert_regex`<sup>Required</sup> <a name="invert_regex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.invertRegex"></a>

```python
invert_regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `repo_name`<sup>Required</sup> <a name="repo_name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.repoName"></a>

```python
repo_name: str
```

- *Type:* str

---

##### `tag_name`<sup>Required</sup> <a name="tag_name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.tagName"></a>

```python
tag_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.internalValue"></a>

```python
internal_value: CloudbuildTriggerTriggerTemplate
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate">CloudbuildTriggerTriggerTemplate</a>

---


### CloudbuildTriggerWebhookConfigOutputReference <a name="CloudbuildTriggerWebhookConfigOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuild_trigger

cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.property.secretInput">secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.property.secret">secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfig">CloudbuildTriggerWebhookConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.property.secretInput"></a>

```python
secret_input: str
```

- *Type:* str

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.property.secret"></a>

```python
secret: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.property.internalValue"></a>

```python
internal_value: CloudbuildTriggerWebhookConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfig">CloudbuildTriggerWebhookConfig</a>

---



